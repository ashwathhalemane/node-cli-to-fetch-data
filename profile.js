const https = require('https');

const http =require('http')

//const username = "chalkers"

function printError(error){
	console.error(error.message)
}

function printMessage(username, badgeCount, points){
	const message = `${username} has badges ${badgeCount} with ${points}`;
	console.log(message);
}

function get(username){
	try{
			const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

				if(response.statusCode === 200){
					let body = " "

					//console.log('statusCode:', response.statusCode)
						response.on('data', (d) => {
						body += d.toString();
					});

					response.on('end',()=>{
						try{
						const bod = JSON.parse(body)
						//console.log(typeof body)
						printMessage(username, bod.badges.length , bod.points.JavaScript)}
						catch(err){
							printError(err)
						}
					});}
					else{
						//console.log("Wrong statusCode!!")
						const message = `There is an error for ${username} (${http.STATUS_CODES[response.statusCode]})`
						const statusCodeError = new Error(message);
						printError(statusCodeError)
					}
			}).on('error', err => printError(err))
		}
		catch(err){
			printError(err)
		}
}

module.exports.get = get;
