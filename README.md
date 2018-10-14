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
console.log(encode.protocol('file', '/Absolute/Path/And/Filename'));
```

Protocols
=========

Prudent to Add-on:

| Message name | Expected content                            | Type of add-on applicable | Example                | Data type   |
|--------------|---------------------------------------------|---------------------------|------------------------|-------------|
| file         | Absolute path and filename of file to parse | Parser                    | /Users/Cody/August.csv | String      |
