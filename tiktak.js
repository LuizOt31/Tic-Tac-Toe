const ticTacContainer = document.querySelector('.tictacContainer')
const squares = document.querySelectorAll('.square')
const displayVictory = document.querySelector('.victory')
let count = 0 //This Count will be used in func ChangeRound to change the player round

const gameBoard = () => {
    const square = []
    for (let i = 0; i < squares.length; i++) {
        square[i] = squares[i]
    }
    let arrayMatch = []
    const draw = () => {
        if (arrayMatch.length == 9) {
            displayVictory.innerHTML = 'Draw'
        }
    }
    const addArray = (letter, number) => {
        arrayMatch.push([letter, number])
        if (letter == 'X') {
            player1.arrayPlayer[number - 1] = letter
        } else {
            player2.arrayPlayer[number - 1] = letter
        }
        draw()
    }
    return { square, arrayMatch, draw, addArray }
}
const TheGameBoard = gameBoard()


ticTacContainer.addEventListener('click', (e) => {
    for (let i = 0; i < TheGameBoard.square.length; i++) {
        if (e.target == TheGameBoard.square[i]) {
            if (TheGameBoard.square[i].textContent != 'X' && TheGameBoard.square[i].textContent != 'O') {
                ChangeRound(TheGameBoard.square[i])
                TheGameBoard.addArray(TheGameBoard.square[i].textContent, i + 1)

            }

        }
    }
    console.log(player1.YouWin(player1))
    console.log(TheGameBoard.arrayMatch)
    let v1 = player1.YouWin(player1)
    let v2 = player2.YouWin(player2)
    if (v1 == true) {
        victory('player 1')
    } else if (v2 == true) {
        victory('player 2')
    }
})


const newPlayer = () => {
    let arrayPlayer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let YouWin = (player) => {
        if ((player.arrayPlayer[0] == player.arrayPlayer[1] && player.arrayPlayer[0] == player.arrayPlayer[2]) ||

            (player.arrayPlayer[3] == player.arrayPlayer[4] && player.arrayPlayer[3] == player.arrayPlayer[5]) ||

            (player.arrayPlayer[6] == player.arrayPlayer[7] && player.arrayPlayer[6] == player.arrayPlayer[8]) ||

            (player.arrayPlayer[0] == player.arrayPlayer[3] && player.arrayPlayer[0] == player.arrayPlayer[6]) ||

            (player.arrayPlayer[1] == player.arrayPlayer[4] && player.arrayPlayer[1] == player.arrayPlayer[7]) ||

            (player.arrayPlayer[2] == player.arrayPlayer[5] && player.arrayPlayer[2] == player.arrayPlayer[8]) ||

            (player.arrayPlayer[0] == player.arrayPlayer[4] && player.arrayPlayer[0] == player.arrayPlayer[8]) ||

            (player.arrayPlayer[2] == player.arrayPlayer[4] && player.arrayPlayer[2] == player.arrayPlayer[6])
        ) {
            return true
        } else {
            return false
        }
    }
    return { arrayPlayer, YouWin }
}



let player1 = newPlayer()
let player2 = newPlayer()



function ChangeRound(local) {
    if (count % 2 == 0) {
        local.innerHTML = 'X'
        count++
    } else {
        local.innerHTML = 'O'
        count++
    }

}

const btnDelete = document.querySelector('.reset')
btnDelete.addEventListener('click', () => {
    player1.arrayPlayer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    player2.arrayPlayer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    TheGameBoard.arrayMatch.length = 0
    count = 0
    TheGameBoard.square.forEach((nome) => {
        nome.innerHTML = null
        displayVictory.innerHTML = null
    })
})


function victory(letter) {
    displayVictory.innerHTML = letter + ' win'
}