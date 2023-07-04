// Funcion que 
// cambia el estilo del input a visible
// toma el valor del texto del parrafo con id "texto-acercade"
// lo muestra en consola
function cambiar_parrafo() {
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
};

function myFunction2(valor){
    document.getElementById("text-acercade").innerText=valor;
};

function logMessage(message){
    console.log(message + "<br>");
}

//controla si se presiono un enter
let textarea=document.getElementById("edit-acercade")
textarea.addEventListener('keyup',(e) => {
    logMessage(`key "${e.key}" released [event: keyup]`);
    if (e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none"
    }
});
//carga el contenido de un archivo de texto
//y lo muestra en el parrafo
function showfile(input){
    let file = input.files[0];
    alert(`File name: ${file.name}`); // e.g my.png
    alert(`Last modified: ${file.lastModified}`); //e.g 1552830408824
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(){
        console.log(reader.result);
        document.getElementById("text-acercade").innerText = reader.result;
    };
    reader.onerror = function(){
        console.log(reader.error);
    };
}
