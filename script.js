const gameboard = (function() {
    let gameboardStorage = ["", "", "", "", "", "", "" , "", ""];


    return {

        placeMarker: function(position, marker) {

            if (gameboardStorage[position] === "") {

                gameboardStorage[position] = marker;




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

            }


        }

        gameboardState: function() {


            return gameboardStorage;

        }


    }
})();

const gameController = (function () {

    let gameState = gameboard.gameboardState();

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


    return {

        checkWinner: function() {

            gameState;

            for (let i = 0; i < winningCombos.length; i++);

            // i represents ONE winning combination





        }


    }



})();