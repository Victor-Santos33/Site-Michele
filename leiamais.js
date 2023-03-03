function leiaMais(){
    let maisTexto = document.getElementById("leiamais");
    let btnLeiaMais = document.getElementById("btnLeiaMais");

    if(btnLeiaMais.innerHTML=="Leia Mais"){
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }else{
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML="Leia Mais";
    }
}