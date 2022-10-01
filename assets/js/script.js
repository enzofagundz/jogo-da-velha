const casa = Array.from(document.querySelectorAll('.casa'));
let jogador = Array.from(document.querySelectorAll('.player'));
let figura = Array.from(document.querySelectorAll('.figure'));
const players = [1, 2];

let sessao = true;
let jogada;
let reiniciar = document.querySelector('#btn-reiniciar');
let vencedor = null;

let sortear = Math.floor(Math.random() * players.length);


reiniciar.addEventListener('click', function (evt) {
    evt.preventDefault();
    location.reload();
}); 

function changeColor (sortear) {
    if (sortear == 0) {
        jogador[0].style.border = '5px solid #D90404';
        jogador[0].style.backgroundColor = '#D90404';
        figura[0].style.color = 'white';
        jogador[1].style.border = '5px solid #6B98BF';
        jogador[1].style.backgroundColor = '#A0BED9';
        figura[1].style.color = '#F24B78';
    } else {
        jogador[1].style.border = '5px solid #D90404';
        jogador[1].style.backgroundColor = '#D90404';
        figura[1].style.color = 'white';
        jogador[0].style.border = '5px solid #6B98BF';
        jogador[0].style.backgroundColor = '#A0BED9';
        figura[0].style.color = '#4C48D9';
    }
}

function mostrarVencedor (vencedor) {
    if (vencedor == 0)
    {
        setTimeout(() => {  
            alert('Bolinha ganhou');
        }, 2000);
    }
    else if (vencedor == 1)
    {
        setTimeout(() => {
            alert('Xis ganhou');
        }, 2000);
    }
    else
    {
        setTimeout(() => {
            alert('Empate');
        }, 2000);
    }
}

function verificarVitoria () {
    if (casa[0].innerHTML === '<div class="playerOne"></div>' && casa[1].innerHTML === '<div class="playerOne"></div>' && casa[2].innerHTML === '<div class="playerOne"></div>'
    || casa[3].innerHTML === '<div class="playerOne"></div>' && casa[4].innerHTML === '<div class="playerOne"></div>' && casa[5].innerHTML === '<div class="playerOne"></div>'
    || casa[6].innerHTML === '<div class="playerOne"></div>' && casa[7].innerHTML === '<div class="playerOne"></div>' && casa[8].innerHTML === '<div class="playerOne"></div>'
    || casa[0].innerHTML === '<div class="playerOne"></div>' && casa[3].innerHTML === '<div class="playerOne"></div>' && casa[6].innerHTML === '<div class="playerOne"></div>'
    || casa[1].innerHTML === '<div class="playerOne"></div>' && casa[4].innerHTML === '<div class="playerOne"></div>' && casa[7].innerHTML === '<div class="playerOne"></div>'
    || casa[2].innerHTML === '<div class="playerOne"></div>' && casa[5].innerHTML === '<div class="playerOne"></div>' && casa[8].innerHTML === '<div class="playerOne"></div>'
    || casa[0].innerHTML === '<div class="playerOne"></div>' && casa[4].innerHTML === '<div class="playerOne"></div>' && casa[8].innerHTML === '<div class="playerOne"></div>'
    || casa[2].innerHTML === '<div class="playerOne"></div>' && casa[4].innerHTML === '<div class="playerOne"></div>' && casa[6].innerHTML === '<div class="playerOne"></div>'
    )
    {
        sessao = false;
        vencedor = 0;
        mostrarVencedor(vencedor);
    }
    else if (casa[0].innerHTML === '<div class="playerTwo"></div>' && casa[1].innerHTML === '<div class="playerTwo"></div>' && casa[2].innerHTML === '<div class="playerTwo"></div>'
    || casa[3].innerHTML === '<div class="playerTwo"></div>' && casa[4].innerHTML === '<div class="playerTwo"></div>' && casa[5].innerHTML === '<div class="playerTwo"></div>'
    || casa[6].innerHTML === '<div class="playerTwo"></div>' && casa[7].innerHTML === '<div class="playerTwo"></div>' && casa[8].innerHTML === '<div class="playerTwo"></div>'
    || casa[0].innerHTML === '<div class="playerTwo"></div>' && casa[3].innerHTML === '<div class="playerTwo"></div>' && casa[6].innerHTML === '<div class="playerTwo"></div>'
    || casa[1].innerHTML === '<div class="playerTwo"></div>' && casa[4].innerHTML === '<div class="playerTwo"></div>' && casa[7].innerHTML === '<div class="playerTwo"></div>'
    || casa[2].innerHTML === '<div class="playerTwo"></div>' && casa[5].innerHTML === '<div class="playerTwo"></div>' && casa[8].innerHTML === '<div class="playerTwo"></div>'
    || casa[0].innerHTML === '<div class="playerTwo"></div>' && casa[4].innerHTML === '<div class="playerTwo"></div>' && casa[8].innerHTML === '<div class="playerTwo"></div>'
    || casa[2].innerHTML === '<div class="playerTwo"></div>' && casa[4].innerHTML === '<div class="playerTwo"></div>' && casa[6].innerHTML === '<div class="playerTwo"></div>')
    {
        sessao = false;
        vencedor = 1;
        mostrarVencedor(vencedor);
    }
}

casa[0].addEventListener ('click', function () {

    if(casa[0].innerHTML === '<div class="playerOne"></div>' || casa[0].innerHTML === '<div class="playerTwo"></div>' || sessao == false)
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');
        
        changeColor(sortear);

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

    verificarVitoria();
});

casa[1].addEventListener ('click', function () {

    if(casa[1].innerHTML === '<div class="playerOne"></div>' || casa[1].innerHTML === '<div class="playerTwo"></div>' || sessao == false)
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(sortear);
        
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

    verificarVitoria();
});

casa[2].addEventListener ('click', function () {

    if(casa[2].innerHTML === '<div class="playerOne"></div>' || casa[2].innerHTML === '<div class="playerTwo"></div>' || sessao == false)
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(sortear);
        
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

    verificarVitoria();
});

casa[3].addEventListener ('click', function () {

    if(casa[3].innerHTML === '<div class="playerOne"></div>' || casa[3].innerHTML === '<div class="playerTwo"></div>' || sessao == false)
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(sortear);
        
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

    verificarVitoria();
});

casa[4].addEventListener ('click', function () {

    if(casa[4].innerHTML === '<div class="playerOne"></div>' || casa[4].innerHTML === '<div class="playerTwo"></div>' || sessao == false)
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(sortear);
        
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

    verificarVitoria();
});

casa[5].addEventListener ('click', function () {

    if(casa[5].innerHTML === '<div class="playerOne"></div>' || casa[5].innerHTML === '<div class="playerTwo"></div>' || sessao == false)
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(sortear);
        
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

    verificarVitoria();
});

casa[6].addEventListener ('click', function () {

    if(casa[6].innerHTML === '<div class="playerOne"></div>' || casa[6].innerHTML === '<div class="playerTwo"></div>' || sessao == false)
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(sortear);
        
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

    verificarVitoria();
});

casa[7].addEventListener ('click', function () {

    if(casa[7].innerHTML === '<div class="playerOne"></div>' || casa[7].innerHTML === '<div class="playerTwo"></div>' || sessao == false)
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(sortear);
        
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

    verificarVitoria();
});

casa[8].addEventListener ('click', function () {

    if(casa[8].innerHTML === '<div class="playerOne"></div>' || casa[8].innerHTML === '<div class="playerTwo"></div>' || sessao == false)
    {
        jogada = false;
    }
    else
    {
        let playerAtual = document.createElement('div');

        changeColor(sortear);
        
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

    verificarVitoria();
});
