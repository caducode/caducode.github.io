const pathLivro = "https://feevalestaging.blackboard.com/bbcswebdav/xid-4959068_1";
const pathRevista = "https://feevalestaging.blackboard.com/bbcswebdav/xid-4959079_1";
const pathArtigo = "https://feevalestaging.blackboard.com/bbcswebdav/xid-4959065_1";
const pathApresentacao = "https://feevalestaging.blackboard.com/bbcswebdav/xid-4959064_1";
const pathVideo = "https://feevalestaging.blackboard.com/bbcswebdav/xid-4959081_1";
const pathSite = "https://feevalestaging.blackboard.com/bbcswebdav/xid-4959081_1";


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
    let inputLinkNode = document.createElement("input");
    let checkboxInpNode = document.createElement("input");
    let spanCheckNode = document.createElement("span");
    spanCheckNode.textContent=" URL";


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
    checkboxInpNode.setAttribute("type","checkbox")
    checkboxInpNode.setAttribute("class","feevas_checkbox");
    inputLinkNode.setAttribute("class", "displayNone");

    selectNode.appendChild(optionNodeArtigo);
    selectNode.appendChild(optionNodeRevista);
    selectNode.appendChild(optionNodeLivro);
    selectNode.appendChild(optionNodeApresentacao);
    selectNode.appendChild(optionNodeVideo);

    sectionNode.appendChild(spanNode);
    sectionNode.appendChild(inputNode);
    sectionNode.appendChild(inputLinkNode);
    sectionNode.appendChild(selectNode);
    sectionNode.appendChild(checkboxInpNode);
    sectionNode.appendChild(spanCheckNode);
    sectionNode.appendChild(btnNode);
    sectionNode.appendChild(btnDellNode);
    

    tudoDiv.appendChild(sectionNode);

}

function dellEste(node){
    let sectionNodeDel =  node.parentNode;
    tudoDiv.removeChild(sectionNodeDel);

}

function geraCode(arrayMateriais){
    

    let htmlvideos = montaVideos(arrayMateriais);
    let juntaTudo="";
    let htmlTxtInicio = "<div class='tudo'>"+
                          "<div>"+
                                
                                "AQUITODOMATERIAL"+
                        "</div>"+    
                        "</div>";
    for(let i = 0; i<  arrayMateriais.length; i++ ){

    }
    juntaTudo = montaVideos(arrayMateriais);
    juntaTudo += montaIcones(arrayMateriais);
    let novoIndex = htmlTxtInicio.replace("AQUITODOMATERIAL",juntaTudo );
    return novoIndex
}  

function montaVideos(arrayMat){
    let linhaVidCont = "<section class='feevas_linha'>"+
                         "ITEMDOSVIDEOS" +
                        "</section>";
    let itensVideCont = "";
    for(let i = 0; i< arrayMat.length ; i++){     
        if(arrayMat[i].tipoItem == "video" && arrayMat[i].usaLink ){
            var urlVideo = arrayMat[i].linkMaterial;
            var arrayPegaCodigo = urlVideo.split("?v=");
            var codVideoYt = arrayPegaCodigo[1];

            itensVideCont += "<!-- DIV CONTENDO IFRAME DO VIDEO -->  <div class='feevas_vid-feev'>"+
                            "<iframe class='feevas_responsive-iframe' width='100%'  src='https://www.youtube.com/embed/"+codVideoYt+ "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"    
                            +"</div> <!-- FIM DIV DO IFRAME -->";    
            
        }
        
    }

    let linhaVideoOK = linhaVidCont.replace("ITEMDOSVIDEOS",itensVideCont);
    return linhaVideoOK;
}

function montaIcones(arrayMat){
    
    let  itensIconeCont = "";
    let contador=0;
    let abriuSection = false;
    let numeroIcones=0;
    for(let i = 0; i< arrayMat.length ; i++){
        if(arrayMat[i].tipoItem != "video"){
            numeroIcones++;
        }
    }
    for(let i = 0; i< arrayMat.length ; i++){     
        if(arrayMat[i].tipoItem != "video"){
            contador++;
            if(contador == 1 || contador == 3 || contador == 5 || contador == 7 || contador == 9){
                itensIconeCont+="<section class='feevas_linha_icones'>";

            }
            itensIconeCont+="<div class='feevas_item'>"+
                                "<img src='"+caminhoIcone(arrayMat[i].tipoItem)+"' alt='icone'>"+
                                    "<div class='feevas_texto_item'>"+
                                    geraNomeArquivo(arrayMat[i]) +
                                    "</div>"+
                            "</div>";
            if(contador == 2 || (numeroIcones == 3 && contador==3) || contador == 4 || (numeroIcones == 5 && contador==5) || contador == 6 || (numeroIcones == 7 && contador==7) || contador == 8 || (numeroIcones == 9 && contador==9) || contador == 10){
                 itensIconeCont+="</section>";
            }                

        }

    }
    console.log("contador: "+contador);
    console.log("numeroIcones: "+numeroIcones);
    return itensIconeCont;
}

function caminhoIcone(tipoMat){
    if(tipoMat){
        if(tipoMat=="artigo"){
            return pathArtigo;
        }
        if(tipoMat=="apresentacao"){
            return pathApresentacao;
        }
        if(tipoMat=="revista"){
            return pathRevista
        }
        if(tipoMat=="site"){
            return pathSite;
        }
        if(tipoMat=="livro"){
            return pathLivro;
        }   
    }else{
        return "ERRO_GERAR_ICONE";
    }
}

function geraNomeArquivo(objMat){
    let textoMaterial="";

        if(objMat.tipoItem=="artigo"){
            textoMaterial = "Artigo: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='"+objMat.linkMaterial+"'  target='_blank> "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="apresentacao"){
            textoMaterial = "Apresentação: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='"+objMat.linkMaterial+"'  target='_blank> "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="revista"){
            textoMaterial = "Revista: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='"+objMat.linkMaterial+"'  target='_blank> "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="site"){
            textoMaterial = "Revista: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='"+objMat.linkMaterial+"'  target='_blank > "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="livro"){
            textoMaterial = "Livro: ";
            if(objMat.usaLink){
                textoMaterial += "<a  href='"+objMat.linkMaterial+"' target='_blank'> "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
    return textoMaterial;
        
}

