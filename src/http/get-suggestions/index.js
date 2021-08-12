exports.handler = async function http(req) {

    const fetch = require("node-fetch");
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "CONSENT=PENDING+855");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    let resultsJSON;
        
    fetch("https://www.google.com/complete/search?q=peloton&cp=1&client=gws-wiz&xssi=t", requestOptions)
    .then(response => response.text())
    .then(result => resultsJSON = result)
    .catch(error => console.log('error', error));

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: resultsJSON
    }
}