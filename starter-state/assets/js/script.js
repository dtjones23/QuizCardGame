var preGameEl = document.getElementById("pre-game");
var gameEl = document.getElementById("game");
var gameEndEl = document.getElementById("game-end");
var hiScoreEl = document.getElementById("hi-score");

var hiButtonEl = document.getElementById("hi");
var backButtonEl = document.getElementById("back");


hiButtonEl.addEventListener("click", viewHiScore);

backButtonEl.addEventListener("click", function () {
    document.location.reload();
backButtonEl.addEventListener("click" , function () {
    this.hidden
})
});


function startGame() {
    preGameEl.setAttribute("class", "is-inactive");
    gameEl.setAttribute("class", "is-active");
    }
    
    

    // var timeInterval = setInterval(function (){
     
    //     // displays seconds remaining
    //     if (quizTime > 1) {
    //         gameEl.setAttribute("style","font-size:30px; position:absolute; top:0; right:10px;");
    //         gameEl.textContent = quizTime + ' seconds remaining';
    //         quizTime--;
    //     }   else if(quizTime === 1) {
    //         gameEl.textContent = quizTime + ' second remaining';
    //         quizTime--;
    //     }   else {
    //         gameEl.textContent = 'end';
    //         clearInterval(timeInterval);
            
    //         // endGame();
    //         // starting endGame function
    //     }
        
    // }, 1000);

    
    


function endGame() {
    game.setAttribute("class", "is-inactive");
    gameEnd.setAttribute("class", "is-active");
}

function viewHiScore() {
    preGameEl.setAttribute("class", "is-inactive");
    game.setAttribute("class", "is-inactive");
    gameEndEl.setAttribute("class", "is-inactive");
    hiScoreEl.setAttribute("class", "is-active");
}
