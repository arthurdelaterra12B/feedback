function pegarNota() {
    let nota = localStorage.getItem("nota")

    let paragrafoNota = document.querySelector(".paragrafo_nota")

    paragrafoNota.innerHTML = `Voce selecionou ${nota} de 5`
}

pegarNota()