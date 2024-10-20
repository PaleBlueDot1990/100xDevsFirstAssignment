const fs=require('fs');

function fileWritePostProcessor(err) {
    if(err) {
        console.error(err);
    } else {
        console.log("File is successfully cleaned!");
    }
}

//this function removes the extra redundant white spaced in the txt file
function clean(data) {
    let arr=data.split(" ");
    let _arr=[];
    for (var i=0; i<arr.length; i++) {
        if(arr[i].length!=0) {
            _arr.push(arr[i]);
        }
    }
    var cleanedData=_arr.join(" ");
    return cleanedData;
}

function fileReadPostProcessor(err, data) {
    if(err) {
        console.error(err);
    } else {
        let cleanedData=clean(data);
        fs.writeFile('c.txt', cleanedData, 'utf-8', fileWritePostProcessor);
    }
}

fs.readFile('c.txt', 'utf-8', fileReadPostProcessor);

