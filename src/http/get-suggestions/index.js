exports.handler = async function http(req) {

    const fetch = require("node-fetch");
    var myHeaders = new fetch.Headers();
    myHeaders.append("Cookie", "CONSENT=PENDING+855");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
        
    const response = await fetch("https://www.google.com/complete/search?q=peloton&cp=1&client=gws-wiz&xssi=t", requestOptions);
    const responseText = await response.text();
    const suggestionsRaw = JSON.parse(responseText.substring(5))[0]; // substring is to strip leading characters that invalidate JSON
    const suggestions = suggestionsRaw.flatMap(x => x[0]);

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(suggestions)
    }
}