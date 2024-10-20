const fs=require('fs');

let data = "Welcome to the cohort!";

function afterContentsUpdated(err){
    if(err) {
        console.error(err);
    } else {
        console.log('File has been written');
    }
}

fs.writeFile('b.txt', data, 'utf8', afterContentsUpdated);

/*
The callback function afterContentsUpdated is
not doing anything significant apart from logging
the error (if encountered). This is in contrast to
the callback function used in reading the file
because it contains the data read and we do need
to do something important with that data.
*/