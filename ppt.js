let jogstone = document.getElementById('jogstone')
let jogpaper = document.getElementById('jogpaper')
let jogscissor = document.getElementById('jogscissor')
let maqstone = document.getElementById('maqstone')
let maqpaper = document.getElementById('maqpaper')
let maqscissor = document.getElementById('maqscissor')
let imgstone = document.getElementById('imgstone')
let imgpaper = document.getElementById('imgpaper')
let imgscissor = document.getElementById('imgscissor')
let resultado = document.getElementById('resultado')
let contagem = document.getElementById('contagem')
let imgstonemaq = document.getElementById('imgstonemaq')
let imgpapermaq = document.getElementById('imgpapermaq')
let imgscissormaq = document.getElementById('imgscissormaq')
let jogar = document.getElementById('jogar')
let perror = document.getElementById('perror')
let jogC;
let maqC;
let jogP = 0
let maqP = 0
let maqRandom;
let possibilities = [0, 1, 2]
jogstone.addEventListener('click', () => {
    jogC = 0
    imgstone.style.backgroundColor = 'blue'
    imgpaper.style.backgroundColor = 'white'
    imgscissor.style.backgroundColor = 'white'
})
jogpaper.addEventListener('click', () => {
    jogC = 1
    imgstone.style.backgroundColor = 'white'
    imgpaper.style.backgroundColor = 'yellowgreen'
    imgscissor.style.backgroundColor = 'white'
})
jogscissor.addEventListener('click', () => {
    jogC = 2
    imgstone.style.backgroundColor = 'white'
    imgpaper.style.backgroundColor = 'white'
    imgscissor.style.backgroundColor = 'yellow'
})
jogar.addEventListener('click', () => {
    jogar.classList.remove('botaoAnim')
    void jogar.offsetWidth
    jogar.classList.add('botaoAnim')
    if (jogC == undefined) {
        perror.style.display = 'block'
        jogar.style.top = '39%'
        perror.addEventListener('animationend', () => {
            jogar.style.top = '41%'
            perror.style.display = 'none'
        })
    } else {
        maqRandom = Math.floor(Math.random() * 3)
        maqC = possibilities[maqRandom]; console.log(maqC)
        if (jogC == 0 && maqC == 0) {
            resultado.innerHTML = 'Empate!'
            imgstonemaq.style.backgroundColor = 'blue'
            imgpapermaq.style.backgroundColor = 'white'
            imgscissormaq.style.backgroundColor = 'white'
        } else if (jogC == 0 && maqC == 1) {
            resultado.innerHTML = 'Você perdeu!'
            imgstonemaq.style.backgroundColor = 'white'
            imgpapermaq.style.backgroundColor = 'yellowgreen'
            imgscissormaq.style.backgroundColor = 'white'
        } else if (jogC == 0 && maqC == 2) {
            resultado.innerHTML = 'Você ganhou!'
            imgstonemaq.style.backgroundColor = 'white'
            imgpapermaq.style.backgroundColor = 'white'
            imgscissormaq.style.backgroundColor = 'yellow'
        } else if (jogC == 1 && maqC == 0) {
            resultado.innerHTML = 'Você ganhou!'
            imgstonemaq.style.backgroundColor = 'blue'
            imgpapermaq.style.backgroundColor = 'white'
            imgscissormaq.style.backgroundColor = 'white'
        } else if (jogC == 1 && maqC == 1) {
            resultado.innerHTML = 'Empate!'
            imgstonemaq.style.backgroundColor = 'white'
            imgpapermaq.style.backgroundColor = 'yellowgreen'
            imgscissormaq.style.backgroundColor = 'white'
        } else if (jogC == 1 && maqC == 2) {
            resultado.innerHTML = 'Você perdeu!'
            imgstonemaq.style.backgroundColor = 'white'
            imgpapermaq.style.backgroundColor = 'white'
            imgscissormaq.style.backgroundColor = 'yellow'
        } else if (jogC == 2 && maqC == 0) {
            resultado.innerHTML = 'Você perdeu!'
            imgstonemaq.style.backgroundColor = 'blue'
            imgpapermaq.style.backgroundColor = 'white'
            imgscissormaq.style.backgroundColor = 'white'
        } else if (jogC == 2 && maqC == 1) {
            resultado.innerHTML = 'Você ganhou!'
            imgstonemaq.style.backgroundColor = 'white'
            imgpapermaq.style.backgroundColor = 'yellowgreen'
            imgscissormaq.style.backgroundColor = 'white'
        } else {
            resultado.innerHTML = 'Empate!'
            imgstonemaq.style.backgroundColor = 'white'
            imgpapermaq.style.backgroundColor = 'white'
            imgscissormaq.style.backgroundColor = 'yellow'
        }
        if (resultado.innerHTML == 'Você ganhou!') {
            jogP += 1
        } else if (resultado.innerHTML == 'Você perdeu!') {
            maqP += 1
        }
        contagem.innerHTML = `You: ${jogP} x Maq: ${maqP}`
    }
})