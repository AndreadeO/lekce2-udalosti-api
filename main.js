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