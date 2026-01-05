const gameboard = (function() {
    let gameboardStorage = ["", "", "", "", "", "", "" , "", ""];


    return {


        placeMarker: function(position, marker) {

            if (gameboardStorage[position] === "") {

                gameboardStorage[position] = marker;

                return true;




            } else {

                let marked = [];
                let unmarked = [];

                for (let i = 0; i < gameboardStorage.length; i++) {

                    if (gameboardStorage[i] === "") {

                        unmarked.push(i);

                    } else { 
                        
                        marked.push(i);


                    }



                    

                }

                let positionMessage = `Available spaces: ${unmarked}, Unavailable spaces: ${marked}`;

                console.log(positionMessage);
                return false;

            }


        },

        gameboardState: function() {


            return gameboardStorage;

        },

       gameReset: function() {

            gameboardStorage = ["", "", "", "", "", "", "", "", ""];

            console.log('game has been reset');

            return gameboardStorage;


        }


    }
})();

const gameController = (function () {

    let isGameOver = false;


    function PlayerContent(name, marker) {

        this.name = name;
        this.marker = marker;


    }

    const playerOne = new PlayerContent("Player 1", "X");
    const playerTwo = new PlayerContent("Player 2", "O");


    let winningCombos = [

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ];


    let activePlayer = playerOne;

    function switchTurn(){

        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;


    }





    return {



        getCurrentMarker: function() {

            return activePlayer.marker;


        },

                getPlayers: function() {
            return {playerOne, playerTwo};
        },



        checkWinner: function() {
            

            const currentBoard = gameboard.gameboardState();

            for (let i = 0; i < winningCombos.length; i++)

            // i represents ONE winning combination

            if (currentBoard[winningCombos[i][0]] === currentBoard[winningCombos[i][1]]
                && currentBoard[winningCombos[i][1]] === currentBoard[winningCombos[i][2]] && currentBoard[winningCombos[i][0]] != "") 
                {

                console.log(`${activePlayer.name} wins!`);

                return currentBoard[winningCombos[i][0]];

            }

            return "no winner";




        },

        playTurn: function(position) {


            if (isGameOver) return;

            let marker = this.getCurrentMarker();


            const moveWasLegal = gameboard.placeMarker(position, marker);

            if (moveWasLegal) {

                let winningPlayer = this.checkWinner();
                let tieCheck = this.tieDetector(winningPlayer);


                if (winningPlayer == "no winner" && tieCheck !== "tie") {

                    switchTurn();

                } else {
                    isGameOver = true;
                }
            }

            
        },

        tieDetector: function(winner) {

            const currentBoard = gameboard.gameboardState();

            let boardIsFull = currentBoard.every(element => element !== "");

            let noWinner = winner === "no winner";

                if (boardIsFull && noWinner) {

                    console.log("tie");
                    return "tie";


                }

                return false;




            },

        gameReset: function() {

            isGameOver = false;
            activePlayer = playerOne;
            gameboard.gameReset();




        },






            
        







        



    }






})();