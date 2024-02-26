const randomColor=function(){//function to generate random color
    const hex="0123456789ABCDEF";//hexadecimal characters
    let color="#";//hexadecimal color starts with #

    for(let i=0;i<6;i++){//loop to generate 6 random characters
        color+=hex[Math.floor(Math.random()*16)];//randomly select a character from hex and add it to color
    }
     return color;//return the color
};

let intervalId;//variable to store the interval id

const startChangingColor=function(){//function to start changing the color
    if(!intervalId){//if intervalId is not set
        intervalId=setInterval(changeColor,1000);//change the color every 1000ms
    }
};

const stopChangingColor=function(){//function to stop changing the color
    if(intervalId){//if intervalId is set
        clearInterval(intervalId);//clear the interval
        intervalId=null;//set intervalId to null
    }
};

const changeColor=function(){//function to change the color
    document.body.style.backgroundColor=randomColor();//change the background color of the body
};

document.getElementById("start").addEventListener("click",startChangingColor);//add event listener to start button
document.getElementById("stop").addEventListener("click",stopChangingColor);//add event listener to stop button
