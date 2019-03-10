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

exports.transaction = (date, payee, value, description, debit, credit, type) => {

    return {
        date: date,
        payee: payee,
        value: value,
        description: description,
        debit: debit,
        credit: credit,
        type: type
    }    

}