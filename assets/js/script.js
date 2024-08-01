const square = Array.from(document.querySelectorAll('.square'));
let jogador = Array.from(document.querySelectorAll('.player'));
let figure = Array.from(document.querySelectorAll('.figure'));
const playerID = [1, 2];

let session = true;
let flag;
let reset = document.querySelector('#btn-reset');
let winner = null;

let draw = Math.floor(Math.random() * playerID.length);

reset.addEventListener('click', function (evt) {
    evt.preventDefault();
    location.reload();
}); 

function changeColor (draw) {
    if (draw == 0) {
        jogador[0].style.border = '5px solid #D90404';
        jogador[0].style.backgroundColor = '#D90404';
        figure[0].style.color = 'white';
        jogador[1].style.border = '5px solid #6B98BF';
        jogador[1].style.backgroundColor = '#A0BED9';
        figure[1].style.color = '#F24B78';
    } else {
        jogador[1].style.border = '5px solid #D90404';
        jogador[1].style.backgroundColor = '#D90404';
        figure[1].style.color = 'white';
        jogador[0].style.border = '5px solid #6B98BF';
        jogador[0].style.backgroundColor = '#A0BED9';
        figure[0].style.color = '#4C48D9';
    }
}

function showWinner (winner) {
    
    if (winner == 0)
    {
        setTimeout(() => {
            alert('Bolinha ganhou');
        }, 2000); 
    }
    else if (winner == 1)
    {
        setTimeout(() => {
            alert('Xis ganhou');
        }, 2000);
    }
    else if (winner == null)
    {
        setTimeout(() => {
            alert('Empate');
        }, 2000);
    }
}

function verificarVitoria () {
    if (square[0].innerHTML === '<div class="playerOne"></div>' && square[1].innerHTML === '<div class="playerOne"></div>' && square[2].innerHTML === '<div class="playerOne"></div>'
    || square[3].innerHTML === '<div class="playerOne"></div>' && square[4].innerHTML === '<div class="playerOne"></div>' && square[5].innerHTML === '<div class="playerOne"></div>'
    || square[6].innerHTML === '<div class="playerOne"></div>' && square[7].innerHTML === '<div class="playerOne"></div>' && square[8].innerHTML === '<div class="playerOne"></div>'
    || square[0].innerHTML === '<div class="playerOne"></div>' && square[3].innerHTML === '<div class="playerOne"></div>' && square[6].innerHTML === '<div class="playerOne"></div>'
    || square[1].innerHTML === '<div class="playerOne"></div>' && square[4].innerHTML === '<div class="playerOne"></div>' && square[7].innerHTML === '<div class="playerOne"></div>'
    || square[2].innerHTML === '<div class="playerOne"></div>' && square[5].innerHTML === '<div class="playerOne"></div>' && square[8].innerHTML === '<div class="playerOne"></div>'
    || square[0].innerHTML === '<div class="playerOne"></div>' && square[4].innerHTML === '<div class="playerOne"></div>' && square[8].innerHTML === '<div class="playerOne"></div>'
    || square[2].innerHTML === '<div class="playerOne"></div>' && square[4].innerHTML === '<div class="playerOne"></div>' && square[6].innerHTML === '<div class="playerOne"></div>'
    )
    {
        session = false;
        winner = 0;
        showWinner(winner);
    }
    else if (square[0].innerHTML === '<div class="playerTwo"></div>' && square[1].innerHTML === '<div class="playerTwo"></div>' && square[2].innerHTML === '<div class="playerTwo"></div>'
    || square[3].innerHTML === '<div class="playerTwo"></div>' && square[4].innerHTML === '<div class="playerTwo"></div>' && square[5].innerHTML === '<div class="playerTwo"></div>'
    || square[6].innerHTML === '<div class="playerTwo"></div>' && square[7].innerHTML === '<div class="playerTwo"></div>' && square[8].innerHTML === '<div class="playerTwo"></div>'
    || square[0].innerHTML === '<div class="playerTwo"></div>' && square[3].innerHTML === '<div class="playerTwo"></div>' && square[6].innerHTML === '<div class="playerTwo"></div>'
    || square[1].innerHTML === '<div class="playerTwo"></div>' && square[4].innerHTML === '<div class="playerTwo"></div>' && square[7].innerHTML === '<div class="playerTwo"></div>'
    || square[2].innerHTML === '<div class="playerTwo"></div>' && square[5].innerHTML === '<div class="playerTwo"></div>' && square[8].innerHTML === '<div class="playerTwo"></div>'
    || square[0].innerHTML === '<div class="playerTwo"></div>' && square[4].innerHTML === '<div class="playerTwo"></div>' && square[8].innerHTML === '<div class="playerTwo"></div>'
    || square[2].innerHTML === '<div class="playerTwo"></div>' && square[4].innerHTML === '<div class="playerTwo"></div>' && square[6].innerHTML === '<div class="playerTwo"></div>')
    {
        session = false;
        winner = 1;
        showWinner(winner);
    }
    else if (square[0].hasChildNodes() && square[1].hasChildNodes() && square[2].hasChildNodes() 
    && square[3].hasChildNodes() && square[4].hasChildNodes() && square[5].hasChildNodes()
    && square[6].hasChildNodes() && square[7].hasChildNodes() && square[8].hasChildNodes() && session == true)
    {
        winner = null;
        session = false;
        showWinner(winner);
    }
}

square[0].addEventListener ('click', function () {

    if(square[0].innerHTML === '<div class="playerOne"></div>' || square[0].innerHTML === '<div class="playerTwo"></div>' || session == false)
    {
        flag = false;
    }
    else
    {
        let playerAtual = document.createElement('div');
        
        changeColor(draw);

        if (draw == 0)
        {
            playerAtual.classList.add('playerOne');
            draw = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            draw = 0;
        }

        square[0].appendChild(playerAtual);
    }

    verificarVitoria();
});

square[1].addEventListener ('click', function () {

    if(square[1].innerHTML === '<div class="playerOne"></div>' || square[1].innerHTML === '<div class="playerTwo"></div>' || session == false)
    {
        flag = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(draw);
        
        if (draw == 0)
        {
            playerAtual.classList.add('playerOne');
            draw = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            draw = 0;
        }

        square[1].appendChild(playerAtual);
    }

    verificarVitoria();
});

square[2].addEventListener ('click', function () {

    if(square[2].innerHTML === '<div class="playerOne"></div>' || square[2].innerHTML === '<div class="playerTwo"></div>' || session == false)
    {
        flag = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(draw);
        
        if (draw == 0)
        {
            playerAtual.classList.add('playerOne');
            draw = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            draw = 0;
        }

        square[2].appendChild(playerAtual);
    }

    verificarVitoria();
});

square[3].addEventListener ('click', function () {

    if(square[3].innerHTML === '<div class="playerOne"></div>' || square[3].innerHTML === '<div class="playerTwo"></div>' || session == false)
    {
        flag = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(draw);
        
        if (draw == 0)
        {
            playerAtual.classList.add('playerOne');
            draw = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            draw = 0;
        }

        square[3].appendChild(playerAtual);
    }

    verificarVitoria();
});

square[4].addEventListener ('click', function () {

    if(square[4].innerHTML === '<div class="playerOne"></div>' || square[4].innerHTML === '<div class="playerTwo"></div>' || session == false)
    {
        flag = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(draw);
        
        if (draw == 0)
        {
            playerAtual.classList.add('playerOne');
            draw = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            draw = 0;
        }

        square[4].appendChild(playerAtual);
    }

    verificarVitoria();
});

square[5].addEventListener ('click', function () {

    if(square[5].innerHTML === '<div class="playerOne"></div>' || square[5].innerHTML === '<div class="playerTwo"></div>' || session == false)
    {
        flag = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(draw);
        
        if (draw == 0)
        {
            playerAtual.classList.add('playerOne');
            draw = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            draw = 0;
        }

        square[5].appendChild(playerAtual);
    }

    verificarVitoria();
});

square[6].addEventListener ('click', function () {

    if(square[6].innerHTML === '<div class="playerOne"></div>' || square[6].innerHTML === '<div class="playerTwo"></div>' || session == false)
    {
        flag = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(draw);
        
        if (draw == 0)
        {
            playerAtual.classList.add('playerOne');
            draw = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            draw = 0;
        }

        square[6].appendChild(playerAtual);
    }

    verificarVitoria();
});

square[7].addEventListener ('click', function () {

    if(square[7].innerHTML === '<div class="playerOne"></div>' || square[7].innerHTML === '<div class="playerTwo"></div>' || session == false)
    {
        flag = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(draw);
        
        if (draw == 0)
        {
            playerAtual.classList.add('playerOne');
            draw = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            draw = 0;
        }

        square[7].appendChild(playerAtual);
    }

    verificarVitoria();
});

square[8].addEventListener ('click', function () {

    if(square[8].innerHTML === '<div class="playerOne"></div>' || square[8].innerHTML === '<div class="playerTwo"></div>' || session == false)
    {
        flag = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(draw);
        
        if (draw == 0)
        {
            playerAtual.classList.add('playerOne');
            draw = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            draw = 0;
        }

        square[8].appendChild(playerAtual);
    }

    verificarVitoria();
});
