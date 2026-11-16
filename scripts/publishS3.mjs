import fs from 'fs'
import path from 'path'
import mime from 'mime'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const AWS_KEY = process.env.AWS_KEY
const AWS_SECRET = process.env.AWS_SECRET
const AWS_REGION = process.env.AWS_REGION || 'us-east-1'
const S3_BUCKET = process.env.S3_BUCKET
const S3_STORAGE_TYPE = 'STANDARD'
const S3_ACL = 'public-read'

if (!AWS_KEY || !AWS_SECRET || !S3_BUCKET) {
  throw new Error('Failed to find env vars for s3 config!')
}

const s3 = new S3Client({
  region: AWS_REGION,
  // follow the bucket's real region if AWS_REGION is wrong
  followRegionRedirects: true,
  credentials: {
    accessKeyId: AWS_KEY,
    secretAccessKey: AWS_SECRET
  }
})

const uploadFile = async (filePath) => {
  await s3.send(new PutObjectCommand({
    Bucket: S3_BUCKET,
    StorageClass: S3_STORAGE_TYPE,
    ACL: S3_ACL,
    Key: filePath.split(path.sep).join('/'),
    ContentType: mime.getType(filePath),
    Body: fs.readFileSync(filePath)
  }))
  console.log('File uploaded successfully.', filePath)
}

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach((file) => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file))
  })
  return filelist
}

if (process.argv[2] === 'upload') {
  const files = walkSync('build')
  files.push('index.html')
  files.push('favicon.ico')
  await Promise.all(files.map(uploadFile))
} else {
  console.error('Invalid argument', process.argv[2])
  process.exit(1)
}
