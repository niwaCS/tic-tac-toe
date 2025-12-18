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

    }
})();

// using IIFE for one instance and private variables made immediately