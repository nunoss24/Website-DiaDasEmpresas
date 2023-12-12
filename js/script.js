/*-----------JavaScript-------------*/

/*-----Countdown------*/
var data_evento = new Date("jan 27 2023 9:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = data_evento - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("tempocount").innerHTML = days + " " + hours + " "
        + minutes + " " + seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("tempocount").innerHTML = "Este evento já foi realizado";
        document.getElementById("textocount").style.display = "none";
    }
}, 1000);

/*-----Botão para ir para o inicio------*/
var seta = document.getElementById("setainicio");
var scroll_seta_inicio = function () {
    var y = window.scrollY;
    if (y >= 200) {
        seta.className = "seta-inicio-button show";
    } else {
        seta.className = "seta-inicio-button hide";
    }
};
window.addEventListener("scroll", scroll_seta_inicio);

/*-----Menu mobile - mudar cor e aparecer logo mobile------*/
var menuspan = document.getElementsByClassName("menu-span");
var logomobile = document.getElementById("logo-mobile");
let viewportHeight = window.innerHeight;
var menumobile = function () {
    var y = window.scrollY;
    if (y >= viewportHeight) {
        for (i = 0; i < menuspan.length; i++) {
            menuspan[i].style.background = '#000000';
        }
        logomobile.style.display = "block";
    } else {
        for (i = 0; i < menuspan.length; i++) {
            menuspan[i].style.background = '#ffffff';
        }
        logomobile.style.display = "none";
    }
};
window.addEventListener("scroll", menumobile);

/*-----------React-------------*/
"use strict";

var listaComentarios = [["Rodrigo Matias", "8/10", "Evento muito bem organizado! As palestras foram todas muito bem concebidas, cada empresa explicou de forma clara do que se trata a mesma e o que pretendem desenvolver com os alunos finalistas. As duas partes de networking que existiram foram uma mais valia pois dá-nos um grande contacto com as empresas!"],

["Maria do Mar", "10/10", "Adorei tudo! Este evento foi uma mais valia para a minha futura vida profissional, pois consegui contacto com uma empresa que sempre me lá vi a trabalhar, a Deloitte, e com este evento pude deixar diretamente o meu currículo para eles e no dia a seguir ter o contacto deles para uma entrevista. Muito obrigado por continuarem com estas iniciativas e darem oportunidade aos alunos de terem um contacto direto com as empresas, espero que continuem assim todos os anos."],

["Filipa Guiomar", "9/10", "Evento 5*! Este é um exemplo de um evento que deveria existir mais vezes, pois está muito bem estruturado, as palestras são muito bem conseguidas e os momentos que existem de networking são fulcrais para os alunos."]]

function ComentariosUsers(props) {
    return props.comentarios.map((comentario) =>
        React.createElement('article', { class: "comentario-article" },
            React.createElement('h2', { class: "comentario-nome" }, comentario[0]),
            React.createElement('p', { class: "comentario-rating" }, comentario[1]),
            React.createElement('p', { class: "comentario" }, comentario[2])
        )
    );
}
ReactDOM.render(
    React.createElement(ComentariosUsers, { comentarios: listaComentarios }), document.getElementById("comentario-zone")
);