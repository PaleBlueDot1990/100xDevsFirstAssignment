var counter=1;

function printAndIncreaseCount() {
    console.clear();
    console.log(counter);
    counter=counter+1;
    setTimeout(printAndIncreaseCount,1000);
}

setTimeout(printAndIncreaseCount,1000);