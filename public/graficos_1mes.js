demo = {
  initChartsPages: function () {
    ///////////////////////////////////meses
    const urls2 =
      "https://api.thingspeak.com/channels/1843700/feeds.json?results=1096";

    const urls3 =
      "https://api.thingspeak.com/channels/1843703/feeds.json?api_key=IBQ4MO28Z5TSVBEU&results=1096";

    const urls4 =
      "https://api.thingspeak.com/channels/1843704/feeds.json?api_key=DZJ1A3P9EAV0GRPU&results=1096";

    const asd2 = async () => {
      let peticions2 = await fetch(urls2);
      let resultadoos2 = await peticions2.json();

      let peticions3 = await fetch(urls3);
      let resultadoos3 = await peticions3.json();

      let peticions4 = await fetch(urls4);
      let resultadoos4 = await peticions4.json();
      ////////////////////////////////////////////////////////////////
      ////////////////////////////////semana1
      var startDate = "2021-08-02";
      var endDate = "2021-08-08";
      var resultProductData1 = resultadoos2.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      let r11 = 0;
      let r12 = 0;
      let r13 = 0;
      let r14 = 0;

      var res1 = filtro2(resultProductData1, r11, r12, r13, r14);

      ////////////////////////////
      var resultProductData2 = resultadoos3.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      let r21 = 0;
      let r22 = 0;
      let r23 = 0;
      let r24 = 0;

      var res2 = filtro2(resultProductData2, r21, r22, r23, r24);

      // var res2 = filtro2(resultProductData1);

      var resultProductData3 = resultadoos4.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      let r31 = 0;
      let r32 = 0;
      let r33 = 0;
      let r34 = 0;

      var res3 = filtro2(resultProductData3, r31, r32, r33, r34);
      console.log(res3 + res1 + res2);
      var sema1 = res3 + res1 + res2;
      ////////////////////////////semana
      ///////////////////////////semana2
      var startDate2 = "2021-08-09";
      var endDate2 = "2021-08-15";
      var resultProductData1 = resultadoos2.feeds.filter(
        (date) => date.created_at >= startDate2 && date.created_at <= endDate2
      );

      let r41 = 0;
      let r42 = 0;
      let r43 = 0;
      let r44 = 0;

      var res4 = filtro2(resultProductData1, r41, r42, r43, r44);

      ////////////////////////////
      var resultProductData2 = resultadoos3.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      let r51 = 0;
      let r52 = 0;
      let r53 = 0;
      let r54 = 0;

      var res5 = filtro2(resultProductData2, r51, r52, r53, r54);

      var resultProductData3 = resultadoos4.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      let r61 = 0;
      let r62 = 0;
      let r63 = 0;
      let r64 = 0;

      var res6 = filtro2(resultProductData3, r61, r62, r63, r64);
      console.log(res4 + res5 + res6);
      var sema2 = res4 + res5 + res6;
      ///////////////////////////semana2
      ///////////////////////////semana3
      var startDate2 = "2021-08-16";
      var endDate2 = "2021-08-22";
      var resultProductData1 = resultadoos2.feeds.filter(
        (date) => date.created_at >= startDate2 && date.created_at <= endDate2
      );

      let r71 = 0;
      let r72 = 0;
      let r73 = 0;
      let r74 = 0;

      var res7 = filtro2(resultProductData1, r71, r72, r73, r74);

      ////////////////////////////
      var resultProductData2 = resultadoos3.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      let r81 = 0;
      let r82 = 0;
      let r83 = 0;
      let r84 = 0;

      var res8 = filtro2(resultProductData2, r81, r82, r83, r84);

      // var res2 = filtro2(resultProductData1);

      var resultProductData3 = resultadoos4.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      let r91 = 0;
      let r92 = 0;
      let r93 = 0;
      let r94 = 0;

      var res9 = filtro2(resultProductData3, r91, r92, r93, r94);
      console.log(res7 + res8 + res9);
      var sema3 = res7 + res8 + res9;
      ///////////////////////////semana3
      ///////////////////////////semana4
      var startDate2 = "2021-08-23";
      var endDate2 = "2021-08-29";
      var resultProductData1 = resultadoos2.feeds.filter(
        (date) => date.created_at >= startDate2 && date.created_at <= endDate2
      );

      let r101 = 0;
      let r102 = 0;
      let r103 = 0;
      let r104 = 0;

      var res10 = filtro2(resultProductData1, r101, r102, r103, r104);

      ////////////////////////////
      var resultProductData2 = resultadoos3.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      let r111 = 0;
      let r112 = 0;
      let r113 = 0;
      let r114 = 0;

      var res11 = filtro2(resultProductData2, r111, r112, r113, r114);

      var resultProductData3 = resultadoos4.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      let r121 = 0;
      let r122 = 0;
      let r123 = 0;
      let r124 = 0;

      var res12 = filtro2(resultProductData3, r121, r122, r123, r124);
      console.log(res10 + res11 + res12);
      var sema4 = res10 + res11 + res12;
      ///////////////////////////semana4
      ////////////semana 1 mes 1 grafico
      var objetivo = document.getElementById("sema1");
      objetivo.innerHTML = sema1;
      var objetivo2 = document.getElementById("sema2");
      objetivo2.innerHTML = sema2;
      var objetivo3 = document.getElementById("sema3");
      objetivo3.innerHTML = sema3;
      var objetivo4 = document.getElementById("sema4");
      objetivo4.innerHTML = sema4;
      var speedCanvas = document.getElementById("semana1");

      var datasemana1 = {
        data: [sema1, sema2, sema3, sema4],
        fill: false,
        borderColor: "#F03F3F",
        backgroundColor: "transparent",
        pointBorderColor: "#F03F3F",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var speedData = {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        datasets: [datasemana1],
      };

      var chartOptions = {
        legend: {
          display: false,
          position: "top",
        },
      };

      var lineChart = new Chart(speedCanvas, {
        type: "line",
        hover: false,
        data: speedData,
        options: chartOptions,
      });

      /////////////////////////////////semana 2 mes 1 grafico
      var speedCanvas = document.getElementById("speedChartsem2");

      var dataFirstsem2 = {
        data: [0, 19, 15, 20, 30, 40, 50],
        fill: false,
        borderColor: "#F03F3F",
        backgroundColor: "transparent",
        pointBorderColor: "#F03F3F",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var speedData = {
        labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
        datasets: [dataFirstsem2],
      };

      var chartOptions = {
        legend: {
          display: false,
          position: "top",
        },
      };

      var lineChart = new Chart(speedCanvas, {
        type: "line",
        hover: false,
        data: speedData,
        options: chartOptions,
      });
      /////////////////////////////semana 3 mes 1 grafico
      var speedCanvas = document.getElementById("speedChartsem3");

      var dataFirstsem3 = {
        data: [0, 19, 15, 20, 30, 40, 50],
        fill: false,
        borderColor: "#F03F3F",
        backgroundColor: "transparent",
        pointBorderColor: "#F03F3F",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var speedData = {
        labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
        datasets: [dataFirstsem3],
      };

      var chartOptions = {
        legend: {
          display: false,
          position: "top",
        },
      };

      var lineChart = new Chart(speedCanvas, {
        type: "line",
        hover: false,
        data: speedData,
        options: chartOptions,
      });

      /////////////////////semana 4 mes 1 grafico
      var speedCanvas = document.getElementById("speedChartsem4");

      var dataFirstsem4 = {
        data: [0, 19, 15, 20, 30, 40, 50],
        fill: false,
        borderColor: "#F03F3F",
        backgroundColor: "transparent",
        pointBorderColor: "#F03F3F",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var speedData = {
        labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
        datasets: [dataFirstsem4],
      };

      var chartOptions = {
        legend: {
          display: false,
          position: "top",
        },
      };

      var lineChart = new Chart(speedCanvas, {
        type: "line",
        hover: false,
        data: speedData,
        options: chartOptions,
      });

      var speedCanvas = document.getElementById("speedChartultmes");
      var dataFirstultmes = {
        data: [sema1, sema2, sema3, sema4],
        fill: false,
        borderColor: "#F03F3F",
        backgroundColor: "transparent",
        pointBorderColor: "#F03F3F",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var speedData = {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        datasets: [dataFirstultmes],
      };

      var chartOptions = {
        legend: {
          display: false,
          position: "top",
        },
      };

      var lineChart = new Chart(speedCanvas, {
        type: "line",
        hover: false,
        data: speedData,
        options: chartOptions,
      });
    };
    asd2();
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
  },
};
