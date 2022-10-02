///////////////////////////////////meses
console.log("asdasd");
const urlmes2 =
  "https://api.thingspeak.com/channels/1843700/feeds.json?results=1096";

const urlmes3 =
  "https://api.thingspeak.com/channels/1843703/feeds.json?api_key=IBQ4MO28Z5TSVBEU&results=1096";

const urlmes4 =
  "https://api.thingspeak.com/channels/1843704/feeds.json?api_key=DZJ1A3P9EAV0GRPU&results=1096";

const anho1 = async () => {
  let peticionMes2 = await fetch(urlmes2);
  let resultadooMes2 = await peticionMes2.json();

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

  let m11 = 0;
  let m12 = 0;
  let m13 = 0;
  let m14 = 0;

  var bas1 = filtro2(resultMes1, m11, m12, m13, m14);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes && date.created_at < endDateMes
  );

  let m21 = 0;
  let m22 = 0;
  let m23 = 0;
  let m24 = 0;

  var bas2 = filtro2(resultMes2, m21, m22, m23, m24);

  // var mes2 = filtro2(resultMes1);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes && date.created_at < endDateMes
  );

  let m31 = 0;
  let m32 = 0;
  let m33 = 0;
  let m34 = 0;

  var bas3 = filtro2(resultMes3, m31, m32, m33, m34);

  var mes1 = bas1 + bas2 + bas3;
  //s2);
  ////////////////////////////dia
  ///////////////////////////mes2
  var startDateMes2 = "2021-02-01";
  var endDateMes2 = "2021-02-28";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes2 && date.created_at < endDateMes2
  );

  let m41 = 0;
  let m42 = 0;
  let m43 = 0;
  let m44 = 0;

  var bas4 = filtro2(resultMes1, m41, m42, m43, m44);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes2 && date.created_at < endDateMes2
  );

  let m51 = 0;
  let m52 = 0;
  let m53 = 0;
  let m54 = 0;

  var bas5 = filtro2(resultMes2, m51, m52, m53, m54);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes2 && date.created_at < endDateMes2
  );

  let m61 = 0;
  let m62 = 0;
  let m63 = 0;
  let m64 = 0;

  var bas6 = filtro2(resultMes3, m61, m62, m63, m64);

  var mes2 = bas4 + bas5 + bas6;
  //s6);
  ///////////////////////////mes2
  ///////////////////////////mes3
  var startDateMes3 = "2021-03-01";
  var endDateMes3 = "2021-03-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes3 && date.created_at < endDateMes3
  );

  let m71 = 0;
  let m72 = 0;
  let m73 = 0;
  let m74 = 0;

  var bas7 = filtro2(resultMes1, m71, m72, m73, m74);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes3 && date.created_at < endDateMes3
  );

  let m81 = 0;
  let m82 = 0;
  let m83 = 0;
  let m84 = 0;

  var bas8 = filtro2(resultMes2, m81, m82, m83, m84);

  // var mes2 = filtro2(resultMes1);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes3 && date.created_at < endDateMes3
  );

  let m91 = 0;
  let m92 = 0;
  let m93 = 0;
  let m94 = 0;

  var bas9 = filtro2(resultMes3, m91, m92, m93, m94);

  var mes3 = bas7 + bas8 + bas9;
  //s9);
  ///////////////////////////mes3
  ///////////////////////////mes4
  var startDateMes4 = "2021-04-01";
  var endDateMes4 = "2021-04-30";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes4 && date.created_at < endDateMes4
  );

  let m101 = 0;
  let m102 = 0;
  let m103 = 0;
  let m104 = 0;

  var bas10 = filtro2(resultMes1, m101, m102, m103, m104);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes4 && date.created_at < endDateMes4
  );

  let m111 = 0;
  let m112 = 0;
  let m113 = 0;
  let m114 = 0;

  var bas11 = filtro2(resultMes2, m111, m112, m113, m114);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes4 && date.created_at < endDateMes4
  );

  let m121 = 0;
  let m122 = 0;
  let m123 = 0;
  let m124 = 0;

  var bas12 = filtro2(resultMes3, m121, m122, m123, m124);

  var mes4 = bas10 + bas11 + bas12;
  // res12);
  ///////////////////////////mes4
  ///////////////////////////mes5
  var startDateMes5 = "2021-05-01";
  var endDateMes5 = "2021-05-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes5 && date.created_at < endDateMes5
  );

  let m131 = 0;
  let m132 = 0;
  let m133 = 0;
  let m134 = 0;

  var bas13 = filtro2(resultMes1, m131, m132, m133, m134);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes5 && date.created_at < endDateMes5
  );

  let m141 = 0;
  let m142 = 0;
  let m143 = 0;
  let m144 = 0;

  var bas14 = filtro2(resultMes2, m141, m142, m143, m144);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes5 && date.created_at < endDateMes5
  );

  let m151 = 0;
  let m152 = 0;
  let m153 = 0;
  let m154 = 0;

  var bas15 = filtro2(resultMes3, m151, m152, m153, m154);

  var mes5 = bas13 + bas14 + bas15;

  ///////////////////////////mes5
  ///////////////////////////mes6
  var startDateMes6 = "2021-06-01";
  var endDateMes6 = "2021-06-30";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes6 && date.created_at < endDateMes6
  );

  let m161 = 0;
  let m162 = 0;
  let m163 = 0;
  let m164 = 0;

  var bas16 = filtro2(resultMes1, m161, m162, m163, m164);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes6 && date.created_at < endDateMes6
  );

  let m171 = 0;
  let m172 = 0;
  let m173 = 0;
  let m174 = 0;

  var bas17 = filtro2(resultMes2, m171, m172, m173, m174);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes6 && date.created_at < endDateMes6
  );

  let m181 = 0;
  let m182 = 0;
  let m183 = 0;
  let m184 = 0;

  var bas18 = filtro2(resultMes3, m181, m182, m183, m184);

  var mes6 = bas16 + bas17 + bas18;
  // res12);
  ///////////////////////////mes6
  ///////////////////////////mes7
  var startDateMes7 = "2021-07-01";
  var endDateMes7 = "2021-07-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m191 = 0;
  let m192 = 0;
  let m193 = 0;
  let m194 = 0;

  var bas19 = filtro2(resultMes1, m191, m192, m193, m194);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m201 = 0;
  let m202 = 0;
  let m203 = 0;
  let m204 = 0;

  var bas20 = filtro2(resultMes2, m201, m202, m203, m204);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m211 = 0;
  let m212 = 0;
  let m213 = 0;
  let m214 = 0;

  var bas21 = filtro2(resultMes3, m211, m212, m213, m214);

  var mes7 = bas19 + bas20 + bas21;
  //////////////////////////mes7
  ///////////////////////////mes8
  var startDateMes7 = "2021-08-01";
  var endDateMes7 = "2021-08-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m221 = 0;
  let m222 = 0;
  let m223 = 0;
  let m224 = 0;

  var bas22 = filtro2(resultMes1, m221, m222, m223, m224);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m231 = 0;
  let m232 = 0;
  let m233 = 0;
  let m234 = 0;

  var bas23 = filtro2(resultMes2, m231, m232, m233, m234);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m391 = 0;
  let m392 = 0;
  let m393 = 0;
  let m394 = 0;

  var bas39 = filtro2(resultMes3, m391, m392, m393, m394);

  var mes8 = bas22 + bas23 + bas39;
  //////////////////////////mes8
  ///////////////////////////mes9
  var startDateMes7 = "2021-09-01";
  var endDateMes7 = "2021-09-30";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m241 = 0;
  let m242 = 0;
  let m243 = 0;
  let m244 = 0;

  var bas24 = filtro2(resultMes1, m241, m242, m243, m244);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m401 = 0;
  let m402 = 0;
  let m403 = 0;
  let m404 = 0;

  var bas40 = filtro2(resultMes2, m401, m402, m403, m404);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m251 = 0;
  let m252 = 0;
  let m253 = 0;
  let m254 = 0;

  var bas25 = filtro2(resultMes3, m251, m252, m253, m254);

  var mes9 = bas24 + bas40 + bas25;
  ///////////////////////////mes9
  ///////////////////////////mes10
  var startDateMes7 = "2021-10-01";
  var endDateMes7 = "2021-10-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m261 = 0;
  let m262 = 0;
  let m263 = 0;
  let m264 = 0;

  var bas26 = filtro2(resultMes1, m261, m262, m263, m264);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m271 = 0;
  let m272 = 0;
  let m273 = 0;
  let m274 = 0;

  var bas27 = filtro2(resultMes2, m271, m272, m273, m274);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m281 = 0;
  let m282 = 0;
  let m283 = 0;
  let m284 = 0;

  var bas28 = filtro2(resultMes3, m281, m282, m283, m284);

  var mes10 = bas26 + bas27 + bas28;
  ///////////////////////////mes10
  ///////////////////////////mes11
  var startDateMes7 = "2021-11-01";
  var endDateMes7 = "2021-11-30";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m291 = 0;
  let m292 = 0;
  let m293 = 0;
  let m294 = 0;

  var bas29 = filtro2(resultMes1, m291, m292, m293, m294);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m301 = 0;
  let m302 = 0;
  let m303 = 0;
  let m304 = 0;

  var bas30 = filtro2(resultMes2, m301, m302, m303, m304);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m311 = 0;
  let m312 = 0;
  let m313 = 0;
  let m314 = 0;

  var bas31 = filtro2(resultMes3, m311, m312, m313, m314);

  var mes11 = bas29 + bas30 + bas31;
  ///////////////////////////mes11
  ///////////////////////////mes12
  var startDateMes7 = "2021-12-01";
  var endDateMes7 = "2021-12-31";
  var resultMes1 = resultadooMes2.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m321 = 0;
  let m322 = 0;
  let m323 = 0;
  let m324 = 0;

  var bas32 = filtro2(resultMes1, m321, m322, m323, m324);

  ////////////////////////////
  var resultMes2 = resultadooMes3.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m341 = 0;
  let m342 = 0;
  let m343 = 0;
  let m344 = 0;

  var bas34 = filtro2(resultMes2, m341, m342, m343, m344);

  var resultMes3 = resultadooMes4.feeds.filter(
    (date) => date.created_at > startDateMes7 && date.created_at < endDateMes7
  );

  let m351 = 0;
  let m352 = 0;
  let m353 = 0;
  let m354 = 0;

  var bas35 = filtro2(resultMes3, m351, m352, m353, m354);

  var mes12 = bas32 + bas34 + bas35;
  ///////////////////////////mes12
  ////////////////////////meses
};

anho1();
function filtro2(arr, c1, c2, c3, c4) {
  let arrTemp1 = [];
  let arrTemp2 = [];
  let arrTemp3 = [];
  let arrTemp4 = [];
  for (let i = 0; i < arr.length; i++) {
    arrTemp1.push(arr[i].field1);
    arrTemp2.push(arr[i].field3);
    arrTemp3.push(arr[i].field5);
    arrTemp4.push(arr[i].field7);
  }
  for (let i = 0; i < arrTemp1.length; i++) {
    if (arrTemp1[i] <= 15) {
      c1 = c1 + 1;
    }
  }
  for (let i = 0; i < arrTemp2.length; i++) {
    if (arrTemp2[i] <= 15) {
      c2 = c2 + 1;
    }
  }
  for (let i = 0; i < arrTemp3.length; i++) {
    if (arrTemp3[i] <= 15) {
      c3 = c3 + 1;
    }
  }
  for (let i = 0; i < arrTemp4.length; i++) {
    if (arrTemp4[i] <= 15) {
      c4 = c4 + 1;
    }
  }

  return c1 + c2 + c3 + c4;
}
//////////////////////////DIAS
