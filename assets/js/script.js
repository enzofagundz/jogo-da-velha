const squares = document.querySelectorAll('.square');
const btnReset = document.querySelector('#btnReset');
const playersContainer = document.querySelectorAll('.player');
const player = { currentTurn: 1 };
const board = Array(9).fill(null);

squares.forEach((element, index) => {
    element.addEventListener('click', (event) => makeMove(event, index));
});

function makeMove(event, index) {
    console.log(index)
    event.preventDefault();
    const element = event.currentTarget;
    if (element.childElementCount > 0) return;
    board[index] = player.currentTurn
    changePlayerContainerBorderColor(player);
    addPlayerMarkInsideSquare({ player, element });

    if (checkWinner()) {
        alert(`Player ${player.currentTurn} wins!`);
        return;
    }

    if (isBoardFull()) {
        alert(`It's tie!`)
        return
    }

    player.currentTurn = player.currentTurn === 1 ? 2 : 1;
}

btnReset.addEventListener('click', () => {
    squares.forEach(element => element.innerHTML = '');
    board.fill(null);
    player.currentTurn = 1;
    changePlayerContainerBorderColor(player);
})

function changePlayerContainerBorderColor(player) {
    if (player.currentTurn === 1) {
        playersContainer[0].style.borderColor = '#F24B78';
        playersContainer[1].style.borderColor = '#6B98BF';
    } else {
        playersContainer[0].style.borderColor = '#6B98BF';
        playersContainer[1].style.borderColor = '#F24B78';
    }
}

function addPlayerMarkInsideSquare({ player, element }) {
    let node = document.createElement("div");
    player.currentTurn === 1 ? node.className = 'playerOne' : node.className = 'playerTwo';
    element.appendChild(node);
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function isBoardFull() {
    return board.every(cell => cell !== null);
}