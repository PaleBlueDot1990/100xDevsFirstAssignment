const fs = require('fs');

function printFile(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
}

fs.readFile('a.txt', 'utf8', printFile);

var counter=0;
for (var i=0; i<10000000000; i++) {
    counter=counter+1;
}

/*
1.The first argument of fs.readFile has to be the
path name of the file to be read. The second
argument has to be the encoding format of the
file. And the third argument needs to be the
callback function that is called once the file
is read using the fs.readFile() function.

2.By definition, the callback function (which in
this case is printFile) has to take two parameters-
err and data. err contains details of any error
encountered while trying to read the data. And
data contains the content of the file (if the
file is successfully read).

3.As you can see, a very expensive time consuming
synchronous process has also been added in this
file- the for loop which increments the counter.
When you run this file, you will see a significant
delay in the printing of file contents. This is
because the after the fs.readFile API has run
and the printFile function has been put in the
callback queue, the event loop is waiting for this
expensive for loop to finish so that printFile
function can be pushed to the main stack. And
this wait time is significant because the for loop
take a significant time to run. 
*/