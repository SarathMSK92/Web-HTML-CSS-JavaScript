function stopwatch()
{
    let time = new Date()
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let millisec = time.getMilliseconds();
    let ampmval = '';
    
    // hr = 12
    // min = 1
    if(hr>=12)
    {
        ampmval = 'PM';
        console.log(ampmval)
        hr = (hr > 12) ? (hr - 12) : hr;
       
    }
    else {
        ampmval = 'AM'
    }


    

    document.getElementById('hours').innerHTML =padZero(hr);
    document.getElementById('minutes').innerHTML =padZero(min);
    document.getElementById('seconds').innerHTML =padZero(sec);
   // document.getElementById('millisecond').innerHTML =padZero(millisec);
    document.getElementById('ampm').innerHTML = ampmval;


}

function padZero(num)
{
    return num<10?"0"+num : num
}

setInterval(stopwatch, 500)