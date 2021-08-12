exports.handler = async function http(req) {

    let resultsJSON = {1: "SoulCycle", 2: "Wattbike"}

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(resultsJSON)
    }
}