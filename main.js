// tady je místo pro náš program

console.log('Ahoj');

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');

let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');

let pocitadlo = 0;
function priNajetiNaCtverec() {
    console.log('test' + pocitadlo);
    pocitadlo++;
}

function zmenStyl() {
    nadpis.classList.toggle('zeleny');
}

function tucnePismo() {
    document.querySelector('.odstavec').style.fontWeight = "bold";

}

function stiskKlavesy(udalost) {
    console.log(udalost.key);
}

function startAudio() {
    let audioFile = document.getElementById('zvukova-stopa');
    console.log('Zapinam pisen..');
    audioFile.play();
}

function pause() {
    let audioFile = document.getElementById('zvukova-stopa');
    console.log('Pauza..');
    audioFile.pause();
}

function mute() {
    let audioFile = document.getElementById('zvukova-stopa');
    console.log('Ztisim..');
    audioFile.volume = 0;
    audioFile.play();

}

function normalVolume() {
    let audioFile = document.getElementById('zvukova-stopa');
    console.log('Hlasitost tak akorat..');
    audioFile.volume = 0.5;
    audioFile.play();

}

function maxVolume() {
    let audioFile = document.getElementById('zvukova-stopa');
    console.log('Maximalni hlasitost..');
    audioFile.volume = 1;
    audioFile.play();

}


function backToStart() {
    let audioFile = document.getElementById('zvukova-stopa');
    console.log('Vracim na zacatek..');
    audioFile.currentTime = 0;
    audioFile.play();

}

let odstavec;
odstavec = document.querySelector('p');
odstavec.classList.add('cerveny')

function changeRed() {
    document.querySelector('.cerveny').style.color = "red";

}

function changeSize() {
    document.querySelector('.odstavec').style.fontSize = "fontSize + px";
}
