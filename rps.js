function startGame(userChoice){
    let playagain = true;
    let s=true;
    while (playagain) {
        
            let a = userChoice.trim().toLowerCase();
            if (a) {
                if (a === 'rock' || a === 'paper' || a === 'scissors') {
                    let b1 = Math.floor(Math.random() * 3); 
                    let b = (b1 === 0) ? 'rock' : (b1 === 1) ? 'paper' : 'scissors'; 
                    console.log("You chose: " + a);
                    console.log("Computer chose: " + b);
                    
                    let res;
                    if (a === b) {
                        res = "Tie";
                    }
                    else{
                        if(a=='rock'){
                            res=(b==='scissors')?'win':'lose';
                        }
                        else if (a=='scissors'){
                            res=(b==='paper')?'win':'lose';
                        }
                        else{
                            res=(b==='rock')?'win':'lose';
                        }
                    } 

                    if (res === 'win') {
                        alert("You Win!");
                    } else if (res === 'Tie') {
                        alert("It's a Tie!");
                    } else {
                        alert("Computer Wins!");
                    }
                    

                } else {
                    console.log("Enter valid input");
                    alert("Enter valid input");
                }
            }
            playagain = confirm("Can we play again?");
            if (playagain) {
                alert("Here we go...");
                document.getElementById("result").innerHTML = resultMessage;
            } else {
                alert("Thank you for playing");
                window.location.href = "index1.html";

            }

    }
}
