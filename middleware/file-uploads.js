const multer = require('multer')
const fileUploadMiddleware = (dir,file_name)=>{
    async (req,res,next)=>{
        const upload = multer({ dest: dir })
        upload.single(file_name)
        console.log(req.file)
        next()
    }
}

module.exports= {fileUploadMiddleware}