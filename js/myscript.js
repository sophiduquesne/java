function trocarFrase(){
    var fraseAtual=document.getElementById("frase");
    fraseAtual.innerHTML= "Qualquer frase!";
    fraseAtual.style.color= "purple";
    fraseAtual.style.fontSize= "25px";
    fraseAtual.style.backgroundColor= "lightblue";
    document.body.style.backgroundColor= "lightgreen";
    fraseAtual.innerHTML= "<img src=\'img/rapunzel.jpg\' />"
}

function trocarClasse(){
    var fraseAtual=document.getElementById("frase");
    fraseAtual.className="h1_2";
}

function gebi(id){
    return document.getElementById(id)
}