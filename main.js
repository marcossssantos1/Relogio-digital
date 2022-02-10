function ola(){
      var txt = "Obrigado por acessar minha pagina!";
      alert(" Ola, " + txt);
    }
ola();
setInterval(setDate, 100)

const hor = document.querySelector("[data-hour-hand]");
const min = document.querySelector("[data-minutes-hand]");
const seg = document.querySelector("[data-seconds-hand]");

function setDate(){
  const corrDate = new Date();
  const segundos = corrDate.getSeconds() / 60;
  const minutos = (segundos + corrDate.getMinutes()) / 60;
  const horas = (minutos + corrDate.getHours()) / 12;
  setRotation (seg, segundos);
  setRotation (min, minutos);
  setRotation (hor, horas);
}

function setRotation(element, rotationRatio){
  element.style.setProperty("--rotation", rotationRatio *360);
}

setDate();

var dt = document.getElementById("#data");
   dt = new Date();

    dt.setFullYear(dt.getFullYear()); 

    var dia = dt.getDay();
    var mes = dt.getMonth();
    var ye = dt.getFullYear();


    var meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
    var semana = ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"];

   document.write(semana[dia] + " , "+meses[mes] + " de " + ye + "<br>");

