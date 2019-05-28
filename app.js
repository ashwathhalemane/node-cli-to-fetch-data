
const profile = require('./profile')
//printMessage("ashwath", 20, 99)	

// const https = require('https');

// https.get('https://encrypted.google.com/', (res) => {
//   console.log('statusCode:', res.statusCode);
//   //console.log('headers:', res.headers)

// });
// getProfile("chalkers");
// getProfile("alenaholligan");

// const users = ["alenaholligan", "chalkers", "davemcfarland"];

// // users.forEach(username =>{
// // 	getProfile(username)
// // })

// users.forEach(getProfile)

const users = process.argv.splice(2);
users.forEach(profile.get)


