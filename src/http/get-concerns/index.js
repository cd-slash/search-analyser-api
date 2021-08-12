exports.handler = async function http(req) {

    let jsonString = {1: "Bad peloton experience", 2: "Peloton quality"}

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(jsonString)
    }
}