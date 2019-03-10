@prudent/encode
===============

Encode messages using Prudent's IPC protocol (for communicating between add-ons and Prudent). 

This is useful for Prudent add-on developers.

Installing
==========

```
$ npm install --save
```

Usage
=====

To encode a message that comply to Prudent's add-on communication protocol:

```
encode.protocol(messageName, content);
```

Typically, Prudent will listen to your add-on process' standard output. To send a message to Prudent, the following will do:

```
console.log(encode.protocol('transactions', arrayOfTransactions));
```

To format a date string into a Prudent compatible string:

```
console.log(encode.dateString('2019-12-25'));
```

To format a transaction to be Prudent compatible:

```
console.log(encode.transaction(date, payee, value, description, debit, credit, type));
```

```debit```, ```credit``` and ```type``` are optional. 

See format section below for the expected type that these parameters.

Protocols
=========

Prudent to Add-on:

| Message name | Expected content                            | Type of add-on applicable | Example                | Data type                    |
|--------------|---------------------------------------------|---------------------------|------------------------|------------------------------|
| file         | Absolute path and filename of file to parse | Parser                    | /Users/Cody/August.csv | String                       |
| transactions | List of transactions in parsed file         | Parser                    | ```[]```               | Array of transaction objects |


Format
=========

Supported date string format:

```
yyyy/mm/dd
```

Use ```encode.dateString()``` to convert most popular date strings to this format.

Expected transaction object format:

```
{
    date: date, // String: yyyy/mm/dd as per above
    payee: payee, // String
    value: value, // Numerics in String form, e.g. '3.89'
    description: description, // String
    debit: debit, // String, Optional
    credit: credit, // String, Optional
    type: type // String: DEBIT | CREDIT, Optional 
} 
```

Use ```encode.transaction()``` to create such an object.
