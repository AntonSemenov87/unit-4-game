$(document).ready(function () {

    //random computer number is created (19 - 120)
    var compRandomNumber = Math.floor(Math.random() * 120 + 19);

    //assigning comp random number to compRandomNumber
    $('#random').text(compRandomNumber);

    //variables for game results:
    var myTotal = 0;
    var wins = 0;
    var losses = 0;

    //variables:
    $('#numWins').text(wins);
    $('#numLosses').text(lost);

    //game reset
    function reset() {
        //here I set up random number to each crystal

        $('#randomNumber').text(compRandomNumber);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        myTotal = 0;
    }

    //adding wins to userTotal
    function win() {
        alert("You Are The Winner! 🤩");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    //adding losses to userTotal
    function lost() {
        alert("You Are Such a Loser! 😭");
        losses++;
        $('numberLost').text(losses);
        reset();
    }

    // clicks for crystals
    $('#One').on('click', function () {
        myTotal = myTotal + num1;
        console.log("New myTotal= " + myTotal);
        $('#finalTotal').text(myTotal);
        //win/lose conditions
        if (myTotal == compRandomNumber) {
            win();
        }
        else if (myTotal > compRandomNumber) {
            lost();
        }
    })

    $('#Two').on('click', function () {
        myTotal = myTotal + num2;
        console.log("New myTotal= " + myTotal);
        $('#finalTotal').text(myTotal);
        if (myTotal == compRandomNumber) {
            win();
        }
        else if (myTotal > compRandomNumber) {
            lost();
        }
    })

    $('#Three').on('click', function () {
        myTotal = myTotal + num3;
        console.log("New myTotal= " + myTotal);
        $('#finalTotal').text(myTotal);
        //sets win/lose conditions
        if (myTotal == compRandomNumber) {
            win();
        }
        else if (myTotal > compRandomNumber) {
            lost();
        }
    })

    $('#Four').on('click', function () {
        myTotal = myTotal + num4;
        console.log("New myTotal= " + myTotal);
        $('#finalTotal').text(myTotal);

        if (myTotal == compRandomNumber) {
            win();
        }
        else if (myTotal > compRandomNumber) {
            lost();
        }
    });
});

