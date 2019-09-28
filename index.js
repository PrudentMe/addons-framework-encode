var dateFormat = require('dateformat');

exports.protocol = (name, content) => {

    return JSON.stringify({
        name: name,
        content: content
    });
    
}

exports.dateString = (dateString) => {

    try {
        return dateFormat(dateString, "yyyy/mm/dd");
    } catch (e) {
        if (dateString.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)) {
            let dateComponents = dateString.split('/');
            return dateComponents[2] + '/' + dateComponents[1] + '/' + dateComponents[0];
        } else {
            throw e;
        }
    }
    
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