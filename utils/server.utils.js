const handleHtmlResponse = (res) => {
    return res.sendFile(path.join(__dirname, 'views', '404.html'))
};

const handleJsonResponse = (res) => {
    return res.json({ message: "404 Not found" });
};

const handleTextResponse = (res) => {
    return res.type("txt").send("404 Not found");
};

module.exports = { handleHtmlResponse, handleJsonResponse, handleTextResponse };