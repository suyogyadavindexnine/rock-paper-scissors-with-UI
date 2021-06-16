const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");

rockbtn.onclick = () => {
    paperbtn.style.borderStyle = "none";
    scissorsbtn.style.borderStyle = "none";

    rockbtn.style.borderStyle = "solid";
    rockbtn.style.borderColor = "red";
    playRound("rock",computerPlay());
}


paperbtn.onclick = () => {
    rockbtn.style.borderStyle = "none";
    scissorsbtn.style.borderStyle = "none";

    paperbtn.style.borderStyle = "solid";
    paperbtn.style.borderColor = "red";
    playRound("paper",computerPlay());
}


scissorsbtn.onclick = () => {
    paperbtn.style.borderStyle = "none";
    rockbtn.style.borderStyle = "none";

    scissorsbtn.style.borderStyle = "solid";
    scissorsbtn.style.borderColor = "red";
    playRound("scissors",computerPlay());
}

const comment = document.querySelector("#comment");

const myscore = document.querySelector("#myscore");
const tiascore = document.querySelector("#tiascore");
const computerscore = document.querySelector("#computerscore");

const comprock = document.querySelector("#comprock");
const comppaper = document.querySelector("#comppaper");
const compscissors = document.querySelector("#compscissors");

function computerPlay(){
    let random = parseInt((Math.random()*10)%3);
    switch (random) {
        case 0:
            comprock.style.borderStyle = "solid";
            comprock.style.borderColor = "red";
            
            comppaper.style.borderStyle = "none";
            compscissors.style.borderStyle = "none";
            return "rock";
        case 1:
            comppaper.style.borderStyle = "solid";
            comppaper.style.borderColor = "red";

            comprock.style.borderStyle = "none";
            compscissors.style.borderStyle = "none";
            return "paper";
        case 2:
            compscissors.style.borderStyle = "solid";
            compscissors.style.borderColor = "red";
            
            comppaper.style.borderStyle = "none";
            comprock.style.borderStyle = "none";
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection == "rock" && computerSelection == "rock")
    {
        comment.textContent = "It's A Tie Play Again";
        tiascore.textContent = parseInt(tiascore.textContent)+1;
    }

    if(playerSelection == "paper" && computerSelection == "paper")
    {
        comment.textContent = "It's A Tie Play Again";
        tiascore.textContent = parseInt(tiascore.textContent)+1;
    }

    if(playerSelection == "scissors" && computerSelection == "scissors")
    {
        comment.textContent = "It's A Tie Play Again";
        tiascore.textContent = parseInt(tiascore.textContent)+1;
    }

    if(playerSelection == "rock" && computerSelection == "scissors")
    {
        comment.textContent = "You Win! Rock beats Scissors";
        myscore.textContent = parseInt(myscore.textContent)+1;

    } else if(playerSelection == "rock" && computerSelection == "paper"){

        comment.textContent = "You Lose! Paper beats Rock";
        computerscore.textContent = parseInt(computerscore.textContent)+1;
    }

    if(playerSelection == "paper" && computerSelection == "rock")
    {
        comment.textContent = "You Win! Paper beats Rock";
        myscore.textContent = parseInt(myscore.textContent)+1;

    }else if(playerSelection == "paper" && computerSelection == "scissors"){

        comment.textContent = "You Lose! Scissors beats Paper";
        computerscore.textContent = parseInt(computerscore.textContent)+1;
    }

    if(playerSelection == "scissors" && computerSelection == "paper")
    {
        comment.textContent = "You Win! Scissors beats Paper";
        myscore.textContent = parseInt(myscore.textContent)+1;

    }else if(playerSelection == "scissors" && computerSelection == "rock"){

        comment.textContent = "You Lose! Rock beats Scissors";
        computerscore.textContent = parseInt(computerscore.textContent)+1;
    }
}