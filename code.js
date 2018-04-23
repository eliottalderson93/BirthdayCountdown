var numDays;
function Birthday(numDays){
    while (numDays>30){
        console.log('more than 30');
        numDays = numDays-1;
    }
    while (numDays>5){
        console.log('less than 30!');
        numDays = numDays-1;
    }
    while (numDays>0){
        console.log('less than 5!!');
        numDays = numDays-1;
    }
    if (numDays == 0){
        console.log('its my birthday!!!');
    }

}
Birthday(60);