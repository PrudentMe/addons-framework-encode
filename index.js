exports.protocol = (name, content) => {

    return JSON.stringify({
        name: name,
        content: content
    });
    
}