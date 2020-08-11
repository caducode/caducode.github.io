function addNovo(){
                
                
    let sectionNode = document.createElement("section");
    sectionNode.setAttribute("class","flex");
    let btnNode = document.createElement("button");
    let btnDellNode = document.createElement("button");

    btnNode.textContent = "Adicionar Novo";
    btnNode.setAttribute("onClick","addNovo()"); 
    btnDellNode.textContent= "Excluir";
    btnDellNode.setAttribute("onClick","dellEste(this)");

    let spanNode = document.createElement("span");
    spanNode.textContent ="nome do link";
    let inputNode = document.createElement("input");
    let selectNode = document.createElement("select");
    let optionNodeArtigo = document.createElement("option");
    let optionNodeRevista = document.createElement("option");
    let optionNodeLivro = document.createElement("option");
    let optionNodeApresentacao = document.createElement("option");
    let optionNodeVideo = document.createElement("option");

    optionNodeArtigo.textContent=" Artigo ";
    optionNodeArtigo.setAttribute("value","artigo");
    optionNodeRevista.textContent=" Revista ";
    optionNodeRevista.setAttribute("value","revista");
    optionNodeLivro.textContent = " Livro ";
    optionNodeLivro.setAttribute("value", "livro");
    optionNodeApresentacao.textContent=" Apresentação ";
    optionNodeApresentacao.setAttribute("value", "apresentacao");
    optionNodeVideo.textContent= " Vídeo ";
    optionNodeVideo.setAttribute("value", "video");

    selectNode.appendChild(optionNodeArtigo);
    selectNode.appendChild(optionNodeRevista);
    selectNode.appendChild(optionNodeLivro);
    selectNode.appendChild(optionNodeApresentacao);
    selectNode.appendChild(optionNodeVideo);

    sectionNode.appendChild(spanNode);
    sectionNode.appendChild(inputNode);
    sectionNode.appendChild(selectNode);
    sectionNode.appendChild(btnNode);
    sectionNode.appendChild(btnDellNode);
    

    tudoDiv.appendChild(sectionNode);

}

function dellEste(node){
    let sectionNodeDel =  node.parentNode;
    tudoDiv.removeChild(sectionNodeDel);

}

function geraCode(){
    
    const pathLivro = "imgs/LIVRO.png";
    const pathRevista = "imgs/REVISTA.png";
    const pathArtigo = "imgs/ARTIGO.png";
    const pathApresentacao = "imgs/APRESENTACAO.png";
    const pathVideo = "imgs/VIDEO.png"

    


}