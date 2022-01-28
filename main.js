
function imposto() {

    let rendaAnual = document.querySelector("#renda").value
    let pessoas = document.querySelector("#pessoa").value 
    document.querySelector("#lol").innerHTML = ""
    document.querySelector("#kek").innerHTML =""
    if (!rendaAnual) {
        document.querySelector("#renda").focus()
        document.querySelector("#lol").innerHTML = " Renda anual não pode ficar vazio!"
        return

    } if (!pessoas) {
        document.querySelector("#pessoa").focus()
        document.querySelector("#kek").innerHTML = "Numero de dependentes não pode ficar vazio!"
        return;
    }
    
    
pessoas= ((-pessoas/ 100) * 2) + (1.0)


if (rendaAnual < 2000) {
    document.querySelector("#k").innerHTML = "isento"
}
else if (rendaAnual >= 2000 && rendaAnual < 5000) {
    document.querySelector("#k").innerHTML = "Você tera que pagar" + " " + (rendaAnual * pessoas) * 0.05
}
else if (rendaAnual >= 5000 && rendaAnual < 10000) {
    document.querySelector("#k").innerHTML = "Você tera que pagar" + " " + (rendaAnual * pessoas) * 0.1
}
else if (rendaAnual >= 10000) {
    document.querySelector("#k").innerHTML = "Você tera que pagar" + " " + (rendaAnual * pessoas) * 0.15
}

}