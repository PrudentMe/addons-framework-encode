var dateFormat = require('dateformat');

exports.protocol = (name, content) => {

    return JSON.stringify({
        name: name,
        content: content
    });
    
}

exports.dateString = (dateString) => {

    return dateFormat(dateString, "yyyy/mm/dd");

}