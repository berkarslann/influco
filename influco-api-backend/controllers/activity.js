const fs = require('fs');
const path = require('path');

const Influencer = require('../models/influencer')
const Activity = require('../models/activity')
const User = require('../models/user')

// @desc      Get activities 
// @route     GET /activity/
exports.getActivity = async(req,res,nex)=>{
    try{
        const activityId = req.params.id;
        const activity = await Activity.findById(req.params.id);
        res.status(200).json({ activity});
        if (!activity) {
            return next(
                res.status(401).json({ success: false, message: "Activity bulunamadı" })
            );
          }
    }catch(err){
        console.log(err)
    }




}


// @desc      Create activity (if it is an influencer)
// @route     POST /activity/
exports.postActivity = async(req,res,next)=>{
    try{
        
        req.body.influencer = req.userId; //influencer
       
        const {title, location, sponsor, shortDescription ,time, participant} = req.body;

        const influencer = await Influencer.findById(req.body.influencer)
        console.log(influencer)

        const activity = new Activity({
            influencer: req.body.influencer,
            title: title,
            location: location,
            sponsor: sponsor,
            shortDescription: shortDescription,
            time: time,
            participant: participant
        })
         await activity.save();

    
        influencer.activities.push(activity);
        await influencer.save()

        res.status(201).json({
            message: 'Activity created successfully!'
        })

    }
    catch(err){
        console.log(err);
        next(err);
    }
   
}

// @desc      Delete activity 
// @route     DELETE /activity/:id
exports.deleteActivity = async(req,res,next)=>{

    try{
        
        const activityId = req.params.id;
        const activity = await Activity.findById(req.params.id);
   
        if (!activity) {
            return next(
                res.status(401).json({ success: false, message: "Aktivite bulunamadı" })
            );
          }
    
    const result = await Activity.findByIdAndRemove(activityId);
    const influencer = await Influencer.findById(req.userId);
    influencer.activities.pull(activityId);
    await influencer.save();

    res.status(200).json({ message: 'Deleted activity.' }); 
    
  
    }
    catch(err){
        next(err);
    }
   


}

// @desc      PUT activities 
// @route     PUT /activity/
exports.patchActivity = async (req, res, next) => {
    try {
        const activityId = req.params.id;
        const participantId = req.body.userId;

        const activity = await Activity.findById(activityId);
        const participant = await User.findById(participantId);

        if (activity.participants.includes(participantId)) {
            return res.status(201).json({ message: "false" });
          }

         activity.participants.push(participant);
         participant.subactivities.push(activityId);   
      
        await activity.save();
        await participant.save();

        res.status(200).json({ success: true, message: "Katılımcı başarıyla ekledi", activity });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

// @desc      Delete activities parcipiant
// @route     PATCH /activity/removeParticipant
exports.patchLeaveActivity = async (req, res, next) => {
    try {
        const activityId = req.params.id;
        const participantId = req.body.userId;

        const activity = await Activity.findById(activityId);
        const participant = await User.findById(participantId);

    

         activity.participants.pull(participant);
         participant.subactivities.pull(activityId);   
      
        await activity.save();
        await participant.save();

        res.status(200).json({ success: true, message: "Katılımcı başarıyla çıkarıldı", activity });
    } catch (err) {
        console.log(err);
        next(err);
    }
}