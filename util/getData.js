const fetch = require('node-fetch');
const  getData = async apiUrl => {
  const response = await fetch(apiUrl);
  if( await response.status === 404){
    return {status:404}
  }
  const responseData = await response.json()
  return responseData
}
module.exports = getData