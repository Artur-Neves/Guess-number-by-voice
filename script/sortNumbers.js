
const minimumValue = document.querySelector('.minimum-value'); 
const maximumValue = document.querySelector('.maximum-value');
const min =1;
const max=101;
function generateRandomNumber(){
    return parseInt(Math.random()*max+1)
}

minimumValue.textContent=`${min}`;
maximumValue.textContent=`${max}`;
