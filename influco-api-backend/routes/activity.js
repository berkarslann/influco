const express = require('express');

const activityController = require('../controllers/activity');
const isAuth = require('../middleware/is-auth');
const { route } = require('./auth');


const router = express.Router();

router.post('/', isAuth, activityController.postActivity)
router.get('/:id',  activityController.getActivity)
router.delete('/:id', isAuth, activityController.deleteActivity)
router.patch('/:id', isAuth, activityController.patchActivity)
router.patch('/:id/removeParticipant', isAuth, activityController.patchLeaveActivity)

module.exports = router;