exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello World - Security in Webapps'),
    };
    return response;
};