const messageParameters = {
    title: "Merhaba",
    user: "Abc",
    titleColor: "red",
    textFontSize: "30px"
}

const generateWellcomeText = params => {
    return [
        "<div>",
            "<h1 style='color:" + params.titleColor + "'>" + params.title + "</h1>",
            "<p style='font-size:" + params.textFontSize + "'>" + params.user + "</h1>",
        "</div>"
    ].join('')
}
document.write(generateWellcomeText (messageParameters) );