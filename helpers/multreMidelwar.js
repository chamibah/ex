const multer=require('multer');
const path =require('path');

const uploadSingle = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'upload/');
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    }),
   
}).single('image');
module.exports = {
    uploadSingle
}
