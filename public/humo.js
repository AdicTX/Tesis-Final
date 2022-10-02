// const url2 = "http://localhost:5000/api/humo";
// const asd2 = async () => {
//   let peticion = await fetch(url2);
//   let resultadoo = await peticion.json();
//   console.log(resultadoo.feeds[0].field2);

//   if (resultadoo.feeds[0].field2 === null) {
//     alert("es nula la lectura del sensor de humo");
//   } else if (
//     resultadoo.feeds[0].field2 < 70 &&
//     resultadoo.feeds[0].field2 !== null
//   ) {
//     fechacompleta1 = "Estado Normal";
//     var objetivo = document.getElementById("texto_nav2");
//     objetivo.innerHTML = fechacompleta1;
//     fechacompleta2 = resultadoo.feeds[0].field2;
//     var objetivo = document.getElementById("texto_nav1");
//     objetivo.innerHTML = fechacompleta2;
//   } else if (
//     resultadoo.feeds[0].field2 > 70 &&
//     resultadoo.feeds[0].field2 <= 130 &&
//     resultadoo.feeds[0].field2 !== null
//   ) {
//     fechacompleta1 = "Atención";
//     var objetivo = document.getElementById("texto_nav2");
//     objetivo.innerHTML = fechacompleta1;
//     fechacompleta2 = resultadoo.feeds[0].field2;
//     var objetivo = document.getElementById("texto_nav1");
//     objetivo.innerHTML = fechacompleta2;
//   } else if (
//     resultadoo.feeds[0].field2 > 130 &&
//     resultadoo.feeds[0].field2 !== null
//   ) {
//     fechacompleta1 = "PELIGRO INCENDIO";
//     var objetivo = document.getElementById("texto_nav2");
//     objetivo.innerHTML = fechacompleta1;
//     fechacompleta2 = resultadoo.feeds[0].field2;
//     var objetivo = document.getElementById("texto_nav1");
//     objetivo.innerHTML = fechacompleta2;
//   }
// };
// asd2();
const url =
  "https://api.thingspeak.com/channels/1437601/fields/2.json?api_key=DFMTPNCWK75GSWV2&results=1";

const url2 = "https://api.thingspeak.com/channels/1843700/feeds.json?results=1";

const url3 =
  "https://api.thingspeak.com/channels/1843703/feeds.json?api_key=IBQ4MO28Z5TSVBEU&results=1";

const url4 =
  "https://api.thingspeak.com/channels/1843704/feeds.json?api_key=DZJ1A3P9EAV0GRPU&results=1";

var rojo = 0;
const asd = async () => {
  let peticion = await fetch(url);
  let resultadoo = await peticion.json();
  let arr1 = [
    resultadoo.feeds[0].field2,
    resultadoo.feeds[0].field4,
    resultadoo.feeds[0].field6,
    resultadoo.feeds[0].field8,
  ];

  filtro(arr1);

  let peticion2 = await fetch(url2);
  let resultadoo2 = await peticion2.json();
  let arr2 = [
    resultadoo2.feeds[0].field2,
    resultadoo2.feeds[0].field4,
    resultadoo2.feeds[0].field6,
    resultadoo2.feeds[0].field8,
  ];

  filtro(arr2);

  let peticion3 = await fetch(url3);
  let resultadoo3 = await peticion3.json();
  let arr3 = [
    resultadoo3.feeds[0].field2,
    resultadoo3.feeds[0].field4,
    resultadoo3.feeds[0].field6,
    resultadoo3.feeds[0].field8,
  ];

  filtro(arr3);

  let peticion4 = await fetch(url4);
  let resultadoo4 = await peticion4.json();
  let arr4 = [
    resultadoo4.feeds[0].field2,
    resultadoo4.feeds[0].field4,
    resultadoo4.feeds[0].field6,
    resultadoo4.feeds[0].field8,
  ];

  filtro(arr4);
  var objetivos = document.getElementById("hum");
  objetivos.innerHTML = rojo;

  htm(resultadoo.feeds[0].field2, "bas11", "bas12", "bas13");
  console.log(resultadoo.feeds[0].field2);
  htm(resultadoo2.feeds[0].field2, "bas21", "bas22", "bas23");
  htm(resultadoo2.feeds[0].field4, "bas31", "bas32", "bas33");
  htm(resultadoo2.feeds[0].field6, "bas41", "bas42", "bas43");
  htm(resultadoo2.feeds[0].field8, "bas51", "bas52", "bas53");
  htm(resultadoo3.feeds[0].field2, "bas61", "bas62", "bas63");
  htm(resultadoo3.feeds[0].field4, "bas71", "bas72", "bas73");
  htm(resultadoo3.feeds[0].field6, "bas81", "bas82", "bas83");
  htm(resultadoo3.feeds[0].field8, "bas91", "bas92", "bas93");
  htm(resultadoo4.feeds[0].field2, "bas101", "bas102", "bas103");
  htm(resultadoo4.feeds[0].field4, "bas111", "bas112", "bas113");
  htm(resultadoo4.feeds[0].field6, "bas121", "bas122", "bas123");

  function htm(dato, lugar1, lugar2, lugar3) {
    if (dato >= 199) {
      var objetivos = document.getElementById(lugar1);
      objetivos.innerHTML = dato + " ppm";
      var centi2 = "PELIGRO!";
      var objetivos = document.getElementById(lugar2);
      objetivos.innerHTML = centi2;
    } else if (dato < 199) {
      var objetivos = document.getElementById(lugar1);
      objetivos.innerHTML = dato + " ppm";
      var centi2 = "Normal";
      var objetivos = document.getElementById(lugar2);
      objetivos.innerHTML = centi2;
    }
  }
  
};

asd();
function filtro(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 199) {
      rojo = rojo + 1;
    }
  }
  // console.log(arr);
}
