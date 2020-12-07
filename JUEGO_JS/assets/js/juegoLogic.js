console.log ("*** juego adivina quien soy");

let personajes = [{
    name:'CRISTIANO RONALDO',
    foto:'Cristiano.png',
    preguntas:['Tiene 5 balones de oro ?',' a jugado en el Barcelona ?','Actualmente Juega en la Juventus?','a jugado en el Real Madrid ?','a ganado Champions ?'],
    respuestas:['si','no','si','si','si']
},{
    name:'MESSI',
    foto:'Messi.png',
    preguntas:['Nació en Argentina ?',' a ganado 6 balones de oro ?','Juega en el Barcelona ?','a jugado en la Juventus ?','a ganado Champions ?'],
    respuestas:['si','si','si','no','si']
},{
    name:'JAMES',
    foto:'James.png',
    preguntas:['Juega en el Real Madrid ?','Juega en Everton Football Club ?','juega en la selección colombia ?','Juega como arquero ?','Juega como centrocampista ?'],
    respuestas:['no','si','si','no','si']
},{
    name:'NEYMAR',
    foto:'Neymar.png',
    preguntas:['es un futbolista brasileño ?','Juega como delantero?','Juega Actualmente en el Real Madrid ?','a marcado 311 Goles en clubes ?','a jugado en el Barcelona ?'],
    respuestas:['si','si','no','si','si']
},{
    name:'FALCAO',
    foto:'Falcao.png',
    preguntas:['juega como delantero en el Galatasaray ?','a marcado 290  Goles en clubes ?','a jugado en el Real Madrid ?','juega en la selección colombia ?','a ganado 1 Europa League ?'],
    respuestas:['si','si','no','si','si']
}
];

const imgPersonaje = document.getElementById("imgPersonaje");
const imgResultado = document.getElementById("imgResultado");
const playJuego =  document.getElementById("playJuego");
const Siguiente =  document.getElementById("Siguiente");
const mostrarPuntaje = document.getElementById('puntaje');
let indice = 0;
let opacidad = 20;
let puntaje = 0;




playJuego.addEventListener('click', () =>{
     

    const pregunta0 = document.getElementById("pregunta0");
    const pregunta1 = document.getElementById("pregunta1");
    const pregunta2 = document.getElementById("pregunta2");
    const pregunta3 = document.getElementById("pregunta3");
    const pregunta4 = document.getElementById("pregunta4");


    imgPersonaje.src = "./assets/pic/" + personajes[indice].foto;
    imgPersonaje.style.filter = "blur(20px)";
    
        pregunta0.value=personajes[indice].preguntas[0];
        pregunta1.value=personajes[indice].preguntas[1];
        pregunta2.value=personajes[indice].preguntas[2];
        pregunta3.value=personajes[indice].preguntas[3];
        pregunta4.value=personajes[indice].preguntas[4];



});

Siguiente.addEventListener('click', () =>{

    indice = indice + 1;
     
    const pregunta0 = document.getElementById("pregunta0");
    const pregunta1 = document.getElementById("pregunta1");
    const pregunta2 = document.getElementById("pregunta2");
    const pregunta3 = document.getElementById("pregunta3");
    const pregunta4 = document.getElementById("pregunta4");


    imgPersonaje.src = "./assets/pic/" + personajes[indice].foto;
    imgPersonaje.style.filter = "blur(20px)";
    
        pregunta0.value=personajes[indice].preguntas[0];
        pregunta1.value=personajes[indice].preguntas[1];
        pregunta2.value=personajes[indice].preguntas[2];
        pregunta3.value=personajes[indice].preguntas[3];
        pregunta4.value=personajes[indice].preguntas[4];


});


const respuesta0 = document.getElementById("respuesta0")

respuesta0.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta0.value == personajes[indice].respuestas[0]) {
         opacidad = opacidad - 2
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta0").src ="./assets/pic/si.png";
         
     } else  {
        document.getElementById("icoRta0").src ="./assets/pic/no.png";
     }

      respuesta0.disabled = true;
});


const respuesta1 = document.getElementById("respuesta1")

respuesta1.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta1.value == personajes[indice].respuestas[1]) {
         opacidad = opacidad - 2
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta1").src ="./assets/pic/si.png";
         
     } else  {
        document.getElementById("icoRta1").src ="./assets/pic/no.png";
     }

      respuesta1.disabled = true;
});


const respuesta2 = document.getElementById("respuesta2")

respuesta2.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta2.value == personajes[indice].respuestas[2]) {
         opacidad = opacidad - 2
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta2").src ="./assets/pic/si.png";
         
     } else  {
        document.getElementById("icoRta2").src ="./assets/pic/no.png";
     }

      respuesta2.disabled = true;
});

const respuesta3 = document.getElementById("respuesta3")

respuesta3.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta3.value == personajes[indice].respuestas[3]) {
         opacidad = opacidad - 2
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta3").src ="./assets/pic/si.png";
         
     } else  {
        document.getElementById("icoRta3").src ="./assets/pic/no.png";
     }

      respuesta3.disabled = true;
});


const respuesta4 = document.getElementById("respuesta4")

respuesta4.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta4.value == personajes[indice].respuestas[4]) {
         opacidad = opacidad - 2
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta4").src ="./assets/pic/si.png";
         
     } else  {
        document.getElementById("icoRta4").src ="./assets/pic/no.png";
     }

      respuesta4.disabled = true;
});


const btnRespuesta = document.getElementById("btnRespuesta")

btnRespuesta.addEventListener('click' , () => {
  
    const respuetaGeneral = document.getElementById("respuetaGeneral").value;

      console.log ("respueta fina " + respuetaGeneral)
       
      if(respuetaGeneral == personajes[indice].name) {
           console.log (" ganaste ") ;
           opacidad = 0;
           puntaje = puntaje + 2;
           imgPersonaje.style.filter = "blur(" + opacidad + "px)";
           imgResultado.src = "./assets/pic/ganaste.png";
           mostrarPuntaje.innerHTML = "Obtuviste " + puntaje + " puntos";

      } else {
        console.log (" perdiste ") ;
        opacidad = 0;
        puntaje = puntaje;
        imgPersonaje.style.filter = "blur(" + opacidad + "px)";
        imgResultado.src = "./assets/pic/perdiste.png";
        mostrarPuntaje.innerHTML = "Puntos: " + puntaje;
      }


})
