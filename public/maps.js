function iniciarMap() {
  var coordMuni = { lat: -25.331279515148417, lng: -57.64640622667176 }; //cateura

  var coord = { lat: -25.312171015131717, lng: -57.57646764431806 }; //ventura los laureles

  var coord2 = { lat: -25.29565287925811, lng: -57.60699727255747 }; //condominio bernardino

  var coord3 = { lat: -25.323781047826603, lng: -57.62615566734231 }; //julieta village

  var coord4 = { lat: -25.324360843056613, lng: -57.630190614159694 }; //residencial san nicolas

  var coord5 = { lat: -25.32223871118889, lng: -57.58487594780794 }; //residencial la victoria

  var coord6 = { lat: -25.327134021237946, lng: -57.62338193258231 }; //parques del sol

  var coord7 = { lat: -25.294603063498393, lng: -57.61417763309835 }; //ventura 25 de mayo

  var coord8 = { lat: -25.277530861808074, lng: -57.56595145831378 }; //ventura carmelitas

  var coord9 = { lat: -25.2972015681465, lng: -57.586314858837724 }; //marquis villa morra

  var coord10 = { lat: -25.29548903693381, lng: -57.606938560236 }; //condominio bernardino 2

  var coord11 = { lat: -25.322515108755393, lng: -57.584693554079514 }; //residencial la vitoria 2

  //var coord12 = { lat: -25.279786189129716, lng: -57.54193727784776 }; //-25.279786189129716, -57.54193727784776

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 40,
    center: coord,
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const url =
    "https://api.thingspeak.com/channels/1437601/fields/1.json?api_key=DFMTPNCWK75GSWV2&results=1";

  const url2 = "https://api.thingspeak.com/channels/1843700/feeds.json?results=1";

  const url3 =
    "https://api.thingspeak.com/channels/1843703/feeds.json?api_key=IBQ4MO28Z5TSVBEU&results=1";

  const url4 =
    "https://api.thingspeak.com/channels/1843704/feeds.json?api_key=DZJ1A3P9EAV0GRPU&results=1";
  const waypts = [];
  const asd = async () => {
    let peticion = await fetch(url);
    let resultadoo = await peticion.json();
    console.log(resultadoo.feeds[0].field1);
    filtrar(resultadoo.feeds[0].field1, coord);

    let peticion2 = await fetch(url2);
    let resultadoo2 = await peticion2.json();
    filtrar(resultadoo2.feeds[0].field1, coord2);
    filtrar(resultadoo2.feeds[0].field3, coord3);
    filtrar(resultadoo2.feeds[0].field5, coord4);
    filtrar(resultadoo2.feeds[0].field7, coord5);

    let peticion3 = await fetch(url3);
    let resultadoo3 = await peticion3.json();

    filtrar(resultadoo3.feeds[0].field1, coord6);
    filtrar(resultadoo3.feeds[0].field3, coord7);
    filtrar(resultadoo3.feeds[0].field5, coord8);
    filtrar(resultadoo3.feeds[0].field7, coord9);

    let peticion4 = await fetch(url4);
    let resultadoo4 = await peticion4.json();

    filtrar(resultadoo4.feeds[0].field1, coord10);
    filtrar(resultadoo4.feeds[0].field3, coord11);
    // filtrar(resultadoo4.feeds[0].field5, coord12);

    /////////////////////////////////////////
    var objConfigDR = {
      map: map,
    };

    var objConfigDS = {
      origin: coordMuni,
      waypoints: waypts,
      optimizeWaypoints: true,
      destination: coordMuni,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    var ds = new google.maps.DirectionsService();

    var dr = new google.maps.DirectionsRenderer(objConfigDR);

    ds.route(objConfigDS, fnRutear);

    function fnRutear(resultados) {
      dr.setDirections(resultados);
    }
    /////////////////////////////////////////////////////////////////////////////////

    function filtrar(dato, coo) {
      var vacio = 96;
      var lleno = 20;
      if (dato > lleno) {
        new google.maps.Marker({
          position: coo,
          title: "Excelente",
          icon: {
            url: "../verde.png",
            scaledSize: new google.maps.Size(50, 50),
          },
          animation: google.maps.Animation.DROP,
          map: map,
        });
      } else if (dato > vacio && dato <= lleno) {
        new google.maps.Marker({
          position: coo,
          title: "Aceptable",
          icon: {
            url: "../amarillo.png",
            scaledSize: new google.maps.Size(50, 50),
          },
          animation: google.maps.Animation.DROP,
          map: map,
        });
      } else if (dato <= vacio) {
        new google.maps.Marker({
          position: coo,
          title: "Atencion",
          icon: {
            url: "../rojo.png",
            scaledSize: new google.maps.Size(50, 50),
          },
          animation: google.maps.Animation.DROP,
          map: map,
        });
        waypts.push({
          location: coo,
          stopover: true,
        });
        console.log(waypts);
      }
    }
  };

  asd();
}

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
const asd2 = async () => {
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
    if (dato > vacio) {
      var centi2 = "Vacio";
      var objetivos = document.getElementById(lugar2);
      objetivos.innerHTML = centi2;
    } else if (dato > lleno && dato <= vacio) {
      var centi2 = "Medio";
      var objetivos = document.getElementById(lugar2);
      objetivos.innerHTML = centi2;
    } else if (dato <= lleno) {
      var centi2 = "Lleno";
      var objetivos = document.getElementById(lugar2);
      objetivos.innerHTML = centi2;
    }
  }
};

asd2();
function filtro(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lleno) {
      verde = verde + 1;
    }
    if (arr[i] <= lleno && arr[i] > lleno) {
      amarillo = amarillo + 1;
    }
    if (arr[i] <= lleno) {
      rojo = rojo + 1;
    }
  }
  // console.log(arr);
}
