const fs = require('fs');

function printFile(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
}

fs.readFile('a.txt', 'utf8', printFile);

/*
The first argument of fs.readFile has to be the
path name of the file to be read. The second
argument has to be the encoding format of the
file. And the third argument needs to be the
callback function that is called once the file
is read using the fs.readFile() function.

By definition, the callback function (which in
this case is printFile) has to take two parameters-
err and data. err contains details of any error
encountered while trying to read the data. And
data contains the content of the file (if the
file is successfully read).
*/