let listaGenerica=[];
let lenguagesDeProgramacion=['JavaScript', 'C', 'C++', 'Kotlin','Python'];
let listaValores=[1,2,3,4,5,6,7,8,9,10];
let listaValoresO=[7,76,89,65,2,56,8,9,89,100];

lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');

function mostrarLenguajes(){
    console.log(lenguagesDeProgramacion);
    let i=0;

    for (i=lenguagesDeProgramacion.length-1; i>=0; i--){
        console.log(`${i+1}: ${lenguagesDeProgramacion[i]}`);
    }
    listaValoresO.sort(function(a,b){
        return a-b;
    });

    console.log(listaValoresO);
    console.log(`El menor es ${listaValoresO[0]} y el mayor ${listaValoresO[listaValoresO.length-1]}`);

    
    return;
}

function indiceElemento(valorBuscado){
    let indice=listaValores.indexOf(valorBuscado);
    return indice;
}

function buscarE(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    asignarTextoElemento('p',`El luegar de la lista del elemento ${numeroDeUsuario} es  ${indiceElemento(numeroDeUsuario)}`);
    return;
}

function sumaListas(lista1, lista2){
    lista1.forEach(function(elemento,index,array){
        lista2[index]=lista2[index]+elemento;
        
    })

    return listaValoresO;
}


function promedioLista(){
    let valor=0;

    listaValores.forEach(function(elemento, indice, array){
        valor=valor+elemento
    })

    valor=parseFloat(valor/listaValores.length);
    asignarTextoElemento('p',`El promedio de ${listaValores} es ${valor}`);
    return;    
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
    return;
}

mostrarLenguajes();
promedioLista();

console.log(`La suma de ${listaValores} y ${listaValoresO} es ${sumaListas(listaValores, listaValoresO)}`);
