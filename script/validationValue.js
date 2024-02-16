function validateNumber(number){
    
    const guess = +number;
  
    if(cheeckNumber(guess)){
        marker.innerHTML= 'Numero inválido';
        return
    }
    else if(guess === secretNumber){
        document.body.innerHTML=`
        <h2>Você acertou!</h2>
        <h3>o número secreto é o ${secretNumber}</h3>
        <button id="restart" class="btn-restart"> Jogar novamente</button>`
        const buttonRestart = document.getElementById("restart");
        buttonRestart.onclick = ()=>window.location.reload();

    }
    else if (guess < secretNumber){
        marker.innerHTML = `O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i>`;
    }
    else if (guess > secretNumber){
        marker.innerHTML = `O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i>`;
    }

}
function cheeckNumber(number){
    return Number.isNaN(number) || number< min || number > max;
}
