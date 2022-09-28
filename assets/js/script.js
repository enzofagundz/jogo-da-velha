const casa = Array.from(document.querySelectorAll('.casa'));
let tabuleiro = ['', '', '', '', '', '', '' , '', ''];
let sessao = true;
let jogada;
const players = [1, 2];
let sortear = Math.floor(Math.random() * players.length);


casa[0].addEventListener ('click', function () {

    if(casa[0].innerHTML === '<div class="playerOne"></div>' || casa[0].innerHTML === '<div class="playerTwo"></div>')
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');
        
        if (sortear == 0)
        {
            playerAtual.classList.add('playerOne');
            sortear = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            sortear = 0;
        }

        casa[0].appendChild(playerAtual);
    }
});

casa[1].addEventListener ('click', function () {

    if(casa[1].innerHTML === '<div class="playerOne"></div>' || casa[1].innerHTML === '<div class="playerTwo"></div>')
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');
        
        if (sortear == 0)
        {
            playerAtual.classList.add('playerOne');
            sortear = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            sortear = 0;
        }

        casa[1].appendChild(playerAtual);
    }
});

casa[2].addEventListener ('click', function () {

    if(casa[2].innerHTML === '<div class="playerOne"></div>' || casa[2].innerHTML === '<div class="playerTwo"></div>')
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');
        
        if (sortear == 0)
        {
            playerAtual.classList.add('playerOne');
            sortear = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            sortear = 0;
        }

        casa[2].appendChild(playerAtual);
    }
});

casa[3].addEventListener ('click', function () {

    if(casa[3].innerHTML === '<div class="playerOne"></div>' || casa[3].innerHTML === '<div class="playerTwo"></div>')
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');
        
        if (sortear == 0)
        {
            playerAtual.classList.add('playerOne');
            sortear = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            sortear = 0;
        }

        casa[3].appendChild(playerAtual);
    }
});

casa[4].addEventListener ('click', function () {

    if(casa[4].innerHTML === '<div class="playerOne"></div>' || casa[4].innerHTML === '<div class="playerTwo"></div>')
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');
        
        if (sortear == 0)
        {
            playerAtual.classList.add('playerOne');
            sortear = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            sortear = 0;
        }

        casa[4].appendChild(playerAtual);
    }
});

casa[5].addEventListener ('click', function () {

    if(casa[5].innerHTML === '<div class="playerOne"></div>' || casa[5].innerHTML === '<div class="playerTwo"></div>')
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');
        
        if (sortear == 0)
        {
            playerAtual.classList.add('playerOne');
            sortear = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            sortear = 0;
        }

        casa[5].appendChild(playerAtual);
    }
});

casa[6].addEventListener ('click', function () {

    if(casa[6].innerHTML === '<div class="playerOne"></div>' || casa[1].innerHTML === '<div class="playerTwo"></div>')
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');
        
        if (sortear == 0)
        {
            playerAtual.classList.add('playerOne');
            sortear = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            sortear = 0;
        }

        casa[6].appendChild(playerAtual);
    }
});

casa[7].addEventListener ('click', function () {

    if(casa[7].innerHTML === '<div class="playerOne"></div>' || casa[1].innerHTML === '<div class="playerTwo"></div>')
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');
        
        if (sortear == 0)
        {
            playerAtual.classList.add('playerOne');
            sortear = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            sortear = 0;
        }

        casa[7].appendChild(playerAtual);
    }
});

casa[8].addEventListener ('click', function () {

    if(casa[8].innerHTML === '<div class="playerOne"></div>' || casa[1].innerHTML === '<div class="playerTwo"></div>')
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');
        
        if (sortear == 0)
        {
            playerAtual.classList.add('playerOne');
            sortear = 1;
        }
        else
        {
            playerAtual.classList.add('playerTwo');
            sortear = 0;
        }

        casa[8].appendChild(playerAtual);
    }
});

