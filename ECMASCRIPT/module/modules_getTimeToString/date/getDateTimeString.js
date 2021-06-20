const formattedDateTime = () => {
    return new Date().toJSON().slice(0,10) + " " + new Date(new Date()).toString().split(' ')[4];
}

export { formattedDateTime };