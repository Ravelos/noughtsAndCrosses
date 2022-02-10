// We create the constants places, restart button and label player in order ot get the spaces(buttons), the restart button and the button player

const places = document.getElementsByTagName('input');
const restart_button = document.getElementById('restart');
const label_player = document.getElementById('player');

//we create a variable in order to show whose turn is and another for the winner

let player = '_'; // to see who is going to play

let winner = '_'; // to define the winner


//Answer to the clicks on the board

for (i = 0; i < 9; i++) {
    places[i].addEventListener('click', (Event) => {
        if ((Event.target.value === '_') && (winner === '_')) {
            Event.target.value = player; // shows X or 0 depending on the player
            Event.target.style.color = 'yellow'; //show the value of the place in yellow

            changePlayer(); // decides who is going to play
            winner = victory();//shows the winner

            if (winner !== '_') {
                label_player.innerText = `${winner} wins!`;
            }
        }
    })
}

// Now the function to restart the game

restart_button.addEventListener('click', (Event) => {
    for (i = 0; i < 9; i++) {
        places[i].value = '_';
        places[i].style.color = 'yellow';
        places[i].style.backgroungColor = 'yellow';
    }

    winner = '_';

    randomPlayer(); // select a random player to restart the game

})

//Now the function randomPlayer sort of a head or tails function

function randomPlayer() {
    if (Math.floor(Math.random() * 2) === 0) {
        player = "0";
        label_player.innerText = "0";
        label_player.style.color = 'yellow';

    } else {
        player = "X";
        label_player.innerText = "X";
        label_player.style.color = 'yellow';
    }

}

// Changing the players with the following function
function changePlayer() {
    if (player == "0") {
        player = "X";
        label_player.innerText = "X";
        label_player.style.color = 'Yellow';
    } else {
        player = "0";
        label_player.innerText = "0";
        label_player.style.color = 'Yellow';
    }
}

// Checking every line with this function in order to get the winner
function victory() {
    if ((places[0].value === places[1].value) && (places[1].value === places[2].value) && places[0].value != '_') {
        places[0].style.backgroundColor = '#369633';
        places[1].style.backgroundColor = '#369633';
        places[2].style.backgroundColor = '#369633';

        return places[0].value;

    } else if ((places[3].value === places[4].value) && (places[4].value === places[5].value) & places[3].value != '_') {

        places[3].style.backgroundColor = '#FF0000';
        places[4].style.backgroundColor = '#369633';
        places[5].style.backgroundColor = '#369633';

        return places[3].value;

    } else if ((places[6].value === places[7].value) && (places[7].value === places[8].value) && places[6].value != '_') {

        places[6].style.backgroundColor = '#369633';
        places[7].style.backgroundColor = '#369633';
        places[8].style.backgroundColor = '#369633';

        return places[6].value;

    } else if ((places[0].value === places[3].value) && (places[3].value === places[6].value) && places[0].value != '_') {
        places[0].style.backgroundColor = '#369633';
        places[3].style.backgroundColor = '#369633';
        places[6].style.backgroundColor = '#369633';

        return places[0].value;

    } else if ((places[1].value === places[4].value) && (places[4].value === places[7].value) && places[1].value != '_') {
        places[1].style.backgroundColor = '#369633';
        places[4].style.backgroundColor = '#369633';
        places[7].style.backgroundColor = '#369633';

        return places[1].value;
       
    }else if ((places[2].value === places[5].value) && (places[5].value === places[8].value) && places[2].value != '_') {
        places[2].style.backgroundColor = '#369633';
        places[5].style.backgroundColor = '#369633';
        places[8].style.backgroundColor = '#369633';

        return places[2].value; 

    }else if ((places[0].value === places[4].value) && (places[4].value === places[8].value) && places[8].value != '_') {
        places[0].style.backgroundColor = '#369633';
        places[4].style.backgroundColor = '#369633';
        places[8].style.backgroundColor = '#369633';

        return places[0].value; 

    }else if ((places[2].value === places[4].value) && (places[4].value === places[6].value) && places[2].value != '_') {
        places[2].style.backgroundColor = '#369633';
        places[4].style.backgroundColor = '#369633';
        places[6].style.backgroundColor = '#369633';

        return places[2].value; 

    }

    return '_';

}



