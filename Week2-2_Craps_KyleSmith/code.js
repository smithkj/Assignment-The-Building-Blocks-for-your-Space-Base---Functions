//function for countdownTimer V1 for wk1-2
function start(){
    console.log("start() function started");
    // created variable currTime set it equal to 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //blastoff
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
        console.log(currTime);
    }, 10000)
}
//every line of code commented on...
//Start function "playCraps" console will log that playCraps has started.
function playCraps(){
    console.log("playCraps() started");
    //generate variables, die1 ,die2, sum
    var die1;
    var die2;
    var sum;
    //roll the dice
    //Rolls dice 1 randomly between 1-6 logs result in console log
    die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    //Rolls dice 2 randomly between 1-6, logs result in console log
    die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);

    //determines the sum of the two dice and save it in sum, then logs results in console log
    sum = die1 + die2;
    console.log("sum is equal to " + sum);

    //follow the rules of craps

    //first lose. This line of code changes "crapStatus" to Craps!! You lose! if the sum of both dice variables = 7 or 11
    if(sum == 7 || sum == 11){
        document.getElementById("crapsStatus").innerHTML = "Craps!! You lose!"
    // second rule, Win, if both dice are the same number, and even, player wins! "crapsStatus" will change to "Huzzah! You win!!!"
    } else if(die1 == die2 && die1%2 == 0){
        document.getElementById("crapsStatus").innerHTML = "Huzzah! You win!!!"
    }
    // third rule, if sum of dice is not 11 or 7, and both dice are not the same even number "crapsStatus" will change to "You did not lose"
    else {
        document.getElementById("crapsStatus").innerHTML = "You did not lose"
    }

}