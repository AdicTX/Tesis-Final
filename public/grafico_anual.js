function filtro2(arr) {
  const counters = [0, 0, 0, 0];
  const threshold = 15;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].field1 <= threshold) {
      counters[0]++;
    }
    if (arr[i].field3 <= threshold) {
      counters[1]++;
    }
    if (arr[i].field5 <= threshold) {
      counters[2]++;
    }
    if (arr[i].field7 <= threshold) {
      counters[3]++;
    }
  }

  return counters.reduce((sum, count) => sum + count, 0);
}
///////////////////////////////////////////////////////////////////chart1
///////////////////////////////////////////////////////////////////chart2
///////////////////////////////////meses
const urlmes2 =
  "https://api.thingspeak.com/channels/1843700/feeds.json?api_key=IBQ4MO28Z5TSVBEU&results=1096";

const urlmes3 =
  "https://api.thingspeak.com/channels/1843703/feeds.json?api_key=IBQ4MO28Z5TSVBEU&results=1096";

const urlmes4 =
  "https://api.thingspeak.com/channels/1843704/feeds.json?api_key=DZJ1A3P9EAV0GRPU&results=1096";

const anho1 = async () => {
  let peticionMes2 = await fetch(urlmes2);
  let resultadooMes2 = await peticionMes2.json();
  console.log("🚀 ~ file: grafico_anual.js:49 ~ anho1 ~ resultadooMes2:", resultadooMes2);

  let peticionMes3 = await fetch(urlmes3);
  let resultadooMes3 = await peticionMes3.json();

  let peticionMes4 = await fetch(urlmes4);
  let resultadooMes4 = await peticionMes4.json();
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////mes1
  var startDateMes = "2021-01-01";
  var endDateMes = "2021-01-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes && date.created_at < endDateMes
  );

  var bas1 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes && date.created_at < endDateMes
  );

  var bas2 = filtro2(resultMes2);

  // var mes2 = filtro2(resultMes1);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes && date.created_at < endDateMes
  );

  var bas3 = filtro2(resultMes3);

  var mes1 = bas1 + bas2 + bas3;
  console.log("🚀 ~ file: grafico_anual.js:70 ~ anho1 ~ mes1:", mes1);

  //es2);
  ////////////////////////////dia
  ///////////////////////////mes2
  var startDateMes2 = "2021-02-01";
  var endDateMes2 = "2021-02-28";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes2 && date.created_at < endDateMes2
  );

  var bas4 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes2 && date.created_at < endDateMes2
  );

  var bas5 = filtro2(resultMes2);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes2 && date.created_at < endDateMes2
  );

  var bas6 = filtro2(resultMes3);

  var mes2 = bas4 + bas5 + bas6;

  //es6);
  ///////////////////////////mes2
  ///////////////////////////mes3
  var startDateMes3 = "2021-03-01";
  var endDateMes3 = "2021-03-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes3 && date.created_at < endDateMes3
  );

  var bas7 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes3 && date.created_at < endDateMes3
  );

  var bas8 = filtro2(resultMes2);

  // var mes2 = filtro2(resultMes1);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes3 && date.created_at < endDateMes3
  );

  var bas9 = filtro2(resultMes3);

  var mes3 = bas7 + bas8 + bas9;

  //es9);
  ///////////////////////////mes3
  ///////////////////////////mes4
  var startDateMes4 = "2021-04-01";
  var endDateMes4 = "2021-04-30";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes4 && date.created_at < endDateMes4
  );

  var bas10 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes4 && date.created_at < endDateMes4
  );

  var bas11 = filtro2(resultMes2);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes4 && date.created_at < endDateMes4
  );

  var bas12 = filtro2(resultMes3);

  var mes4 = bas10 + bas11 + bas12;

  //  res12);
  ///////////////////////////mes4
  ///////////////////////////mes5
  var startDateMes5 = "2021-05-01";
  var endDateMes5 = "2021-05-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes5 && date.created_at < endDateMes5
  );

  var bas13 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes5 && date.created_at < endDateMes5
  );

  var bas14 = filtro2(resultMes2);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes5 && date.created_at < endDateMes5
  );

  var bas15 = filtro2(resultMes3);

  var mes5 = bas13 + bas14 + bas15;

  ///////////////////////////mes5
  ///////////////////////////mes6
  var startDateMes6 = "2021-06-01";
  var endDateMes6 = "2021-06-30";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes6 && date.created_at < endDateMes6
  );

  var bas16 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes6 && date.created_at < endDateMes6
  );

  var bas17 = filtro2(resultMes2);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes6 && date.created_at < endDateMes6
  );

  var bas18 = filtro2(resultMes3);

  var mes6 = bas16 + bas17 + bas18;

  //  res12);
  ///////////////////////////mes6
  ///////////////////////////mes7
  var startDateMes7 = "2021-07-01";
  var endDateMes7 = "2021-07-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas19 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas20 = filtro2(resultMes2);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas21 = filtro2(resultMes3);

  var mes7 = bas19 + bas20 + bas21;
  ///////////////////////////mes7
  ///////////////////////////mes8
  var startDateMes7 = "2021-08-01";
  var endDateMes7 = "2021-08-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas22 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas23 = filtro2(resultMes2);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas39 = filtro2(resultMes3);

  var mes8 = bas22 + bas23 + bas39;
  ///////////////////////////mes8
  ///////////////////////////mes9
  var startDateMes7 = "2021-09-01";
  var endDateMes7 = "2021-09-30";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas24 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas40 = filtro2(resultMes2);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas25 = filtro2(resultMes3);

  var mes9 = bas24 + bas40 + bas25;
  ///////////////////////////mes9
  ///////////////////////////mes10
  var startDateMes7 = "2021-10-01";
  var endDateMes7 = "2021-10-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas26 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas27 = filtro2(resultMes2);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas28 = filtro2(resultMes3);

  var mes10 = bas26 + bas27 + bas28;
  ///////////////////////////mes10
  ///////////////////////////mes11
  var startDateMes7 = "2021-11-01";
  var endDateMes7 = "2021-11-30";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas29 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas30 = filtro2(resultMes2);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas31 = filtro2(resultMes3);

  var mes11 = bas29 + bas30 + bas31;
  ///////////////////////////mes11
  ///////////////////////////mes12
  var startDateMes7 = "2021-12-01";
  var endDateMes7 = "2021-12-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas32 = filtro2(resultMes1);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas34 = filtro2(resultMes2);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  var bas35 = filtro2(resultMes3);

  var mes12 = bas32 + bas34 + bas35;
  ///////////////////////////mes12

  var objetivo = document.getElementById("mes1");
  objetivo.innerHTML = mes1;
  var objetivo2 = document.getElementById("mes2");
  objetivo2.innerHTML = mes2;
  var objetivo3 = document.getElementById("mes3");
  objetivo3.innerHTML = mes3;
  var objetivo4 = document.getElementById("mes4");
  objetivo4.innerHTML = mes4;
  var objetivo5 = document.getElementById("mes5");
  objetivo5.innerHTML = mes5;
  var objetivo6 = document.getElementById("mes6");
  objetivo6.innerHTML = mes6;
  var objetivo7 = document.getElementById("mes7");
  objetivo7.innerHTML = mes7;
  var objetivo8 = document.getElementById("mes8");
  objetivo8.innerHTML = mes8;
  var objetivo9 = document.getElementById("mes9");
  objetivo9.innerHTML = mes9;
  var objetivo10 = document.getElementById("mes10");
  objetivo10.innerHTML = mes10;
  var objetivo11 = document.getElementById("mes11");
  objetivo11.innerHTML = mes11;
  var objetivo12 = document.getElementById("mes12");
  objetivo12.innerHTML = mes12;
};

anho1();
