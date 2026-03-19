import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senhaGerada');
const qtdCarac = document.querySelector('.qtdCharact');
const chkUpper = document.querySelector('.chkUpper');
const chkLower = document.querySelector('.chkLower');
const chkNumber = document.querySelector('.chkNumber');
const chkSimbol = document.querySelector('.chkSimbols');
const gerarSenha = document.querySelector('.gerarSenha');


export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    });
};

function gera() {
    return geraSenha(
        qtdCarac.value,
        chkUpper.checked, //envia True or False.
        chkLower.checked,
        chkNumber.checked,
        chkSimbol.checked,

    ) || 'Nada selecionado.'
}