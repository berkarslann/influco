const express = require('express')
// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       let destination;
//       if (file.fieldname === 'image') {
//         destination = 'images'; // Resimlerin kaydedileceği klasör
//       } else if (file.fieldname === 'video') {
//         destination = 'videos'; // Videoların kaydedileceği klasör
//       }
//       cb(null, destination);
//     },
//     filename: (req, file, cb) => {
//       cb(null, new Date().toISOString() + '-' + file.originalname);
//     },
//   });

//   const fileFilter = (req, file, cb) => {
//     const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg', 'video/mp4', 'video/avi'];
//     if (allowedMimeTypes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error('Dosya türü desteklenmiyor!'), false);
//     }
//   };
//   const upload = multer({ storage: storage, fileFilter: fileFilter });

const serieController = require('../controllers/serie')
const isAuth = require('../middleware/is-auth')
const isUpload = require('../middleware/is-upload')

const router = express.Router();

router.get('/:id', serieController.getSingleSerie)
router.post('/', isAuth, isUpload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 3 }]), serieController.postSerie)
router.delete('/', isAuth, serieController.deleteSerie),
router.post('/video', isAuth, serieController.postSerieVideo)

module.exports = router;