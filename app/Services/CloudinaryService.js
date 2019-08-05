const cloudinary = require('cloudinary');
const Env = use('Env');

cloudinary.config({
  cloud_name: 'doi4dylih',
  api_key: '833359542362213',
  api_secret: 'mRy-pfgawCHENWUDHdK7bc-DOSs'
});

module.exports = cloudinary;