require('dotenv').config()


const {
  Storage
} = require('@google-cloud/storage');
const {
  createWriteStream
} = require("fs");


const gc = new Storage({
  keyFilename: './OMX-RELOADED-4b107d7d3d97.json',
  projectId: 'omx-265700'
});
/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const photeBucket = gc.bucket('photos_buckets')
const uploadImage = (file) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file
  
  const blob = photeBucket.file(originalname.replace(/ /g, "_"));
  
  const blobStream = blob.createWriteStream(
    {
    resumable: false,
    gzip: true,

  })

  blobStream.on("finish", () => {
    const publicUrl = format(
      `https://storage.googleapis.com/${photeBucket.name}/${blob.name}`
    )
    resolve(publicUrl)
  })
  .on('error', () => {
    reject(`Unable to upload image, something went wrong`)
  })
  .end(buffer)
})
module.exports = {
  uploadImage
}