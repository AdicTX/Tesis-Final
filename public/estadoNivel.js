const url =
  "https://api.thingspeak.com/channels/1437601/fields/1.json?api_key=DFMTPNCWK75GSWV2&results=1";

const url2 = "https://api.thingspeak.com/channels/1843700/feeds.json?results=1";

const url3 =
  "https://api.thingspeak.com/channels/1843703/feeds.json?api_key=IBQ4MO28Z5TSVBEU&results=1";

const url4 =
  "https://api.thingspeak.com/channels/1843704/feeds.json?api_key=DZJ1A3P9EAV0GRPU&results=1";
var verde = 0;
var amarillo = 0;
var rojo = 0;
const asd = async () => {
  let peticion = await fetch(url);
  let resultadoo = await peticion.json();
  let arr1 = [
    resultadoo.feeds[0].field1,
    resultadoo.feeds[0].field3,
    resultadoo.feeds[0].field5,
    resultadoo.feeds[0].field7,
  ];

  filtro(arr1);

  let peticion2 = await fetch(url2);
  let resultadoo2 = await peticion2.json();
  let arr2 = [
    resultadoo2.feeds[0].field1,
    resultadoo2.feeds[0].field3,
    resultadoo2.feeds[0].field5,
    resultadoo2.feeds[0].field7,
  ];

  filtro(arr2);

  let peticion3 = await fetch(url3);
  let resultadoo3 = await peticion3.json();
  let arr3 = [
    resultadoo3.feeds[0].field1,
    resultadoo3.feeds[0].field3,
    resultadoo3.feeds[0].field5,
    resultadoo3.feeds[0].field7,
  ];

  filtro(arr3);

  let peticion4 = await fetch(url4);
  let resultadoo4 = await peticion4.json();
  let arr4 = [
    resultadoo4.feeds[0].field1,
    resultadoo4.feeds[0].field3,
    resultadoo4.feeds[0].field5,
    resultadoo4.feeds[0].field7,
  ];

  filtro(arr4);

  var objetivo = document.getElementById("rojo");
  objetivo.innerHTML = rojo;
  var objetivo2 = document.getElementById("amarillo");
  objetivo2.innerHTML = amarillo;
  var objetivo3 = document.getElementById("verde");
  objetivo3.innerHTML = verde;

  console.log(resultadoo.feeds[0].field1);

  htm(resultadoo.feeds[0].field1, "bas11", "bas12", "bas13");
  htm(resultadoo2.feeds[0].field1, "bas21", "bas22", "bas23");
  htm(resultadoo2.feeds[0].field3, "bas31", "bas32", "bas33");
  htm(resultadoo2.feeds[0].field5, "bas41", "bas42", "bas43");
  htm(resultadoo2.feeds[0].field7, "bas51", "bas52", "bas53");
  htm(resultadoo3.feeds[0].field1, "bas61", "bas62", "bas63");
  htm(resultadoo3.feeds[0].field3, "bas71", "bas72", "bas73");
  htm(resultadoo3.feeds[0].field5, "bas81", "bas82", "bas83");
  htm(resultadoo3.feeds[0].field7, "bas91", "bas92", "bas93");
  htm(resultadoo4.feeds[0].field1, "bas101", "bas102", "bas103");
  htm(resultadoo4.feeds[0].field3, "bas111", "bas112", "bas113");
  htm(resultadoo4.feeds[0].field5, "bas121", "bas122", "bas123");

  function htm(dato, lugar1, lugar2, lugar3) {
    if (dato > 35) {
      var objetivos = document.getElementById(lugar1);
      objetivos.innerHTML = dato + " cm";
      var centi2 = "Vacio";
      var objetivos = document.getElementById(lugar2);
      objetivos.innerHTML = centi2;
      var centi3 = "Excelente";
      var objetivos = document.getElementById(lugar3);
      objetivos.innerHTML = centi3;
    } else if (dato > 15 && dato <= 35) {
      var objetivos = document.getElementById(lugar1);
      objetivos.innerHTML = dato + " cm";
      var centi2 = "Medio";
      var objetivos = document.getElementById(lugar2);
      objetivos.innerHTML = centi2;
      var centi3 = "Aceptable";
      var objetivos = document.getElementById(lugar3);
      objetivos.innerHTML = centi3;
    } else if (dato <= 15) {
      var objetivos = document.getElementById(lugar1);
      objetivos.innerHTML = dato + " cm";
      var centi2 = "Lleno";
      var objetivos = document.getElementById(lugar2);
      objetivos.innerHTML = centi2;
      var centi3 = "Atención";
      var objetivos = document.getElementById(lugar3);
      objetivos.innerHTML = centi3;
    }
  }
};

asd();
function filtro(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 96) {
      verde = verde + 1;
    }
    if (arr[i] <= 96 && arr[i] > 20) {
      amarillo = amarillo + 1;
    }
    if (arr[i] <= 20) {
      rojo = rojo + 1;
    }
  }
  // console.log(arr);
}
const url21 =
  "https://api.thingspeak.com/channels/1437601/fields/2.json?api_key=DFMTPNCWK75GSWV2&results=1";

const url22 =
  "https://api.thingspeak.com/channels/1843700/feeds.json?results=1";

const url23 =
  "https://api.thingspeak.com/channels/1843703/feeds.json?api_key=IBQ4MO28Z5TSVBEU&results=1";

const url24 =
  "https://api.thingspeak.com/channels/1843704/feeds.json?api_key=DZJ1A3P9EAV0GRPU&results=1";

var rojo2 = 0;
const asd0 = async () => {
  let peticion11 = await fetch(url21);
  let resultadoo11 = await peticion11.json();
  let arr11 = [
    resultadoo11.feeds[0].field2,
    resultadoo11.feeds[0].field4,
    resultadoo11.feeds[0].field6,
    resultadoo11.feeds[0].field8,
  ];

  filtro2(arr11);

  let peticion12 = await fetch(url22);
  let resultadoo12 = await peticion12.json();
  let arr12 = [
    resultadoo12.feeds[0].field2,
    resultadoo12.feeds[0].field4,
    resultadoo12.feeds[0].field6,
    resultadoo12.feeds[0].field8,
  ];

  filtro2(arr12);

  let peticion13 = await fetch(url23);
  let resultadoo13 = await peticion13.json();
  let arr13 = [
    resultadoo13.feeds[0].field2,
    resultadoo13.feeds[0].field4,
    resultadoo13.feeds[0].field6,
    resultadoo13.feeds[0].field8,
  ];

  filtro2(arr13);

  let peticion14 = await fetch(url24);
  let resultadoo14 = await peticion14.json();
  let arr14 = [
    resultadoo14.feeds[0].field2,
    resultadoo14.feeds[0].field4,
    resultadoo14.feeds[0].field6,
    resultadoo14.feeds[0].field8,
  ];

  filtro2(arr14);
  var objetivos11 = document.getElementById("hum");
  objetivos11.innerHTML = rojo2;
};

asd0();
function filtro2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 199) {
      rojo2 = rojo2 + 1;
    }
  }
  // console.log(arr);
}
