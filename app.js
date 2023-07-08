(function(){
    "use strict";


    const select = (el, all = false) => {
        el = el.trim()
        if (all){
            return [...document.querySelectorAll(el)];
        }else{
            return document.querySelector(el);
        }
    }
    // Utilizo la funcion de arriba para seleccionar del DOM

    // const boton = document.querySelector('button');
   //  const color = document.getElementById('color');

    function generarColor(){
        let digitos = '0123456789ABCDEF';
        let colorHex = '#';
        for (let i = 0; i < 6; i++) {
            let indiceAleatorio = Math.floor(Math.random() * 16);
            colorHex += digitos[indiceAleatorio]; 
        }
        return colorHex;
    }
   
    
    select('button').addEventListener('click', function(){
        let colorAleatorio = generarColor();
       //Actualizar el texto.
        select('#color').textContent = colorAleatorio;
        //actualizar el color de fondo.
        document.body.style.backgroundColor = colorAleatorio;
    });






})()