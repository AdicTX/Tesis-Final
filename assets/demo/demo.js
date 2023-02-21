demo = {
  initPickColor: function () {
    $(".pick-class-label").click(function () {
      var new_class = $(this).attr("new-class");
      var old_class = $("#display-buttons").attr("data-class");
      var display_div = $("#display-buttons");
      if (display_div.length) {
        var display_buttons = display_div.find(".btn");
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr("data-class", new_class);
      }
    });
  },

  initDocChart: function () {
    chartColor = "#FFFFFF";

    ctx = document.getElementById("chartHours").getContext("2d");

    myChart = new Chart(ctx, {
      type: "line",

      data: {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
          {
            borderColor: "#6bd098",
            backgroundColor: "#6bd098",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [300, 310, 316],
          },
          {
            borderColor: "#f17e5d",
            backgroundColor: "#f17e5d",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [320, 340, 365],
          },
          {
            borderColor: "#fcc468",
            backgroundColor: "#fcc468",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [370, 394, 415],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },

        tooltips: {
          enabled: false,
        },

        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: false,
                maxTicksLimit: 5,
                //padding: 20
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "#ccc",
                color: "rgba(255,255,255,0.05)",
              },
            },
          ],

          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(255,255,255,0.1)",
                zeroLineColor: "transparent",
                display: false,
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f",
              },
            },
          ],
        },
      },
    });
  },

  initChartsPages: function () {
    ////////////////////////////funcion para traer datos
    var vacio = 20;
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

      function filtro(arr) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > 96) {
            verde = verde + 1;
          }
          if (arr[i] <= 96 && arr[i] > vacio) {
            amarillo = amarillo + 1;
          }
          if (arr[i] <= vacio) {
            rojo = rojo + 1;
          }
        }
        // console.log(arr);
      }

      chartColor = "#FFFFFF";

      ctx = document.getElementById("chartHours").getContext("2d");

      myChart = new Chart(ctx, {
        type: "pie",

        data: {
          // labels: ["Vacíos", "Medios", "Llenos"],
          // render: "percentage",
          datasets: [
            {
              label: "Emails",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ["#6BD098", "#fcc468", "#F03F3F"],
              borderWidth: 3,
              data: [verde, amarillo, rojo],
            },
          ],
        },
        options: {
          legend: {
            display: true,
          },

          pieceLabel: {
            display: true,
            render: "percentage",
            fontColor: "#6BD098",
            precision: 15,
            color: "rgba(255,255,255,0.05)",
          },

          tooltips: {
            enabled: false,
          },

          scales: {
            yAxes: [
              {
                ticks: {
                  display: false,
                },
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: "transparent",
                  color: "rgba(255,255,255,0.05)",
                },
              },
            ],

            xAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(255,255,255,0.1)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  display: false,
                },
              },
            ],
          },
        },
      });
    };

    asd();

    ////////////////////////funcion para traer datos
    // ctx = document.getElementById("chartEmail").getContext("2d");

    // myChart = new Chart(ctx, {
    //   type: "pie",
    //   data: {
    //     labels: [1, 2, 3],
    //     datasets: [
    //       {
    //         label: "Emails",
    //         pointRadius: 0,
    //         pointHoverRadius: 0,
    //         backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
    //         borderWidth: 0,
    //         data: [342, 480, 530, 120],
    //       },
    //     ],
    //   },

    //   options: {
    //     legend: {
    //       display: false,
    //     },

    //     pieceLabel: {
    //       render: "percentage",
    //       fontColor: ["white"],
    //       precision: 2,
    //     },

    //     tooltips: {
    //       enabled: false,
    //     },

    //     scales: {
    //       yAxes: [
    //         {
    //           ticks: {
    //             display: false,
    //           },
    //           gridLines: {
    //             drawBorder: false,
    //             zeroLineColor: "transparent",
    //             color: "rgba(255,255,255,0.05)",
    //           },
    //         },
    //       ],

    //       xAxes: [
    //         {
    //           barPercentage: 1.6,
    //           gridLines: {
    //             drawBorder: false,
    //             color: "rgba(255,255,255,0.1)",
    //             zeroLineColor: "transparent",
    //           },
    //           ticks: {
    //             display: false,
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
    ///////////////////////////////////////////////////////////////////chart1

    const urls2 = "https://api.thingspeak.com/channels/1843700/feeds.json?results=1096";

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

      var res1 = filtro2(resultProductData1);

      ////////////////////////////
      var resultProductData2 = resultadoos3.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      var res2 = filtro2(resultProductData2);

      // var res2 = filtro2(resultProductData1);

      var resultProductData3 = resultadoos4.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      var res3 = filtro2(resultProductData3);
      console.log(res3 + res1 + res2);
      var sema1 = res3 + res1 + res2;
      ////////////////////////////semana
      ///////////////////////////semana2
      var startDate2 = "2021-08-09";
      var endDate2 = "2021-08-15";
      var resultProductData1 = resultadoos2.feeds.filter(
        (date) => date.created_at >= startDate2 && date.created_at <= endDate2
      );

      var res4 = filtro2(resultProductData1);

      ////////////////////////////
      var resultProductData2 = resultadoos3.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      var res5 = filtro2(resultProductData2);

      var resultProductData3 = resultadoos4.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      var res6 = filtro2(resultProductData3);
      console.log(res4 + res5 + res6);
      var sema2 = res4 + res5 + res6;
      ///////////////////////////semana2
      ///////////////////////////semana3
      var startDate2 = "2021-08-16";
      var endDate2 = "2021-08-22";
      var resultProductData1 = resultadoos2.feeds.filter(
        (date) => date.created_at >= startDate2 && date.created_at <= endDate2
      );

      var res7 = filtro2(resultProductData1);

      ////////////////////////////
      var resultProductData2 = resultadoos3.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      var res8 = filtro2(resultProductData2);

      // var res2 = filtro2(resultProductData1);

      var resultProductData3 = resultadoos4.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      var res9 = filtro2(resultProductData3);
      console.log(res7 + res8 + res9);
      var sema3 = res7 + res8 + res9;
      ///////////////////////////semana3
      ///////////////////////////semana4
      var startDate2 = "2021-08-23";
      var endDate2 = "2021-08-29";
      var resultProductData1 = resultadoos2.feeds.filter(
        (date) => date.created_at >= startDate2 && date.created_at <= endDate2
      );

      var res10 = filtro2(resultProductData1);

      ////////////////////////////
      var resultProductData2 = resultadoos3.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      var res11 = filtro2(resultProductData2);

      var resultProductData3 = resultadoos4.feeds.filter(
        (date) => date.created_at >= startDate && date.created_at <= endDate
      );

      var res12 = filtro2(resultProductData3);
      console.log(res10 + res11 + res12);
      var sema4 = res10 + res11 + res12;
      ///////////////////////////semana4
      var speedCanvas = document.getElementById("speedChart");
      var dataFirst = {
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
        datasets: [dataFirst],
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
    function filtro2(arr) {
      const counters = [0, 0, 0, 0];
      const threshold = 20;

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
    const urlmes2 = "https://api.thingspeak.com/channels/1843700/feeds.json?results=1096";

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
      console.log(mes1 + "asd1");
      //console.log(mes3 + mes1 + mes2);
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
      console.log(mes2 + "asd2");
      //console.log(res4 + res5 + res6);
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
      console.log(mes3 + "asd3");
      //console.log(res7 + res8 + res9);
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
      console.log(mes4 + "asd4");
      // console.log(res10 + res11 + res12);
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
      console.log(mes5 + "asd5");

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
      console.log(mes6 + "asd6");
      // console.log(res10 + res11 + res12);
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
      console.log(mes7 + "8");
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
      console.log(mes8 + "9");
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
      console.log(mes9 + "10");
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
      console.log(mes10 + "11");
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
      console.log(mes11 + "12");
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
      console.log(mes12 + "13");
      ///////////////////////////mes12

      ////////////////////////meses

      var speedCanvas = document.getElementById("speedChart2");

      var dataFirst2 = {
        data: [mes1, mes2, mes3, mes4, mes5, mes6, mes7, mes8, mes9, mes10, mes11, mes12],
        fill: false,
        borderColor: "#F03F3F",
        backgroundColor: "transparent",
        pointBorderColor: "#F03F3F",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var speedData = {
        labels: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ],
        datasets: [dataFirst2],
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

    anho1();
    //////////////////////ANHO
    //////////////////////////SEMANA
    ///////////////////////////////////DIAS
    const urlDia2 = "https://api.thingspeak.com/channels/1843700/feeds.json?results=1096";

    const urlDia3 =
      "https://api.thingspeak.com/channels/1843703/feeds.json?api_key=IBQ4MO28Z5TSVBEU&results=1096";

    const urlDia4 =
      "https://api.thingspeak.com/channels/1843704/feeds.json?api_key=DZJ1A3P9EAV0GRPU&results=1096";

    const dia1 = async () => {
      let peticionDia2 = await fetch(urlDia2);
      let resultadooDia2 = await peticionDia2.json();

      let peticionDia3 = await fetch(urlDia3);
      let resultadooDia3 = await peticionDia3.json();

      let peticionDia4 = await fetch(urlDia4);
      let resultadooDia4 = await peticionDia4.json();
      ////////////////////////////////////////////////////////////////
      ////////////////////////////////dia1
      var startDateDia = "2021-08-23";
      var endDateDia = "2021-08-24";
      var result1 = resultadooDia2.feeds.filter(
        (date) => date.created_at > startDateDia && date.created_at < endDateDia
      );

      var b1 = filtro2(result1);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) => date.created_at > startDateDia && date.created_at < endDateDia
      );

      var b2 = filtro2(result2);

      // var dia2 = filtro2(result1);

      var result3 = resultadooDia4.feeds.filter(
        (date) => date.created_at > startDateDia && date.created_at < endDateDia
      );

      var b3 = filtro2(result3);

      var dia1 = b1 + b2 + b3;

      //console.log(dia3 + dia1 + dia2);
      ////////////////////////////dia
      ///////////////////////////dia2
      var startDateDia2 = "2021-08-24";
      var endDateDia2 = "2021-08-25";
      var result1 = resultadooDia2.feeds.filter(
        (date) => date.created_at > startDateDia2 && date.created_at < endDateDia2
      );

      var b4 = filtro2(result1);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) => date.created_at > startDateDia2 && date.created_at < endDateDia2
      );

      var b5 = filtro2(result2);

      var result3 = resultadooDia4.feeds.filter(
        (date) => date.created_at > startDateDia2 && date.created_at < endDateDia2
      );

      var b6 = filtro2(result3);

      var dia2 = b4 + b5 + b6;

      //console.log(res4 + res5 + res6);
      ///////////////////////////dia2
      ///////////////////////////dia3
      var startDateDia3 = "2021-08-25";
      var endDateDia3 = "2021-08-26";
      var result1 = resultadooDia2.feeds.filter(
        (date) => date.created_at > startDateDia3 && date.created_at < endDateDia3
      );

      var b7 = filtro2(result1);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) => date.created_at > startDateDia3 && date.created_at < endDateDia3
      );

      var b8 = filtro2(result2);

      // var dia2 = filtro2(result1);

      var result3 = resultadooDia4.feeds.filter(
        (date) => date.created_at > startDateDia3 && date.created_at < endDateDia3
      );

      var b9 = filtro2(result3);

      var dia3 = b7 + b8 + b9;

      //console.log(res7 + res8 + res9);
      ///////////////////////////dia3
      ///////////////////////////dia4
      var startDateDia4 = "2021-08-26";
      var endDateDia4 = "2021-08-27";
      var result1 = resultadooDia2.feeds.filter(
        (date) => date.created_at > startDateDia4 && date.created_at < endDateDia4
      );

      var b10 = filtro2(result1);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) => date.created_at > startDateDia4 && date.created_at < endDateDia4
      );

      var b11 = filtro2(result2);

      var result3 = resultadooDia4.feeds.filter(
        (date) => date.created_at > startDateDia4 && date.created_at < endDateDia4
      );

      var b12 = filtro2(result3);

      var dia4 = b10 + b11 + b12;

      // console.log(res10 + res11 + res12);
      ///////////////////////////dia4
      ///////////////////////////dia5
      var startDateDia5 = "2021-08-27";
      var endDateDia5 = "2021-08-28";
      var result1 = resultadooDia2.feeds.filter(
        (date) => date.created_at > startDateDia5 && date.created_at < endDateDia5
      );

      var b13 = filtro2(result1);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) => date.created_at > startDateDia5 && date.created_at < endDateDia5
      );

      var b14 = filtro2(result2);

      var result3 = resultadooDia4.feeds.filter(
        (date) => date.created_at > startDateDia5 && date.created_at < endDateDia5
      );

      var b15 = filtro2(result3);

      var dia5 = b13 + b14 + b15;

      ///////////////////////////dia5
      ///////////////////////////dia6
      var startDateDia6 = "2021-08-28";
      var endDateDia6 = "2021-08-29";
      var result1 = resultadooDia2.feeds.filter(
        (date) => date.created_at > startDateDia6 && date.created_at < endDateDia6
      );

      var b16 = filtro2(result1);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) => date.created_at > startDateDia6 && date.created_at < endDateDia6
      );

      var b17 = filtro2(result2);

      var result3 = resultadooDia4.feeds.filter(
        (date) => date.created_at > startDateDia6 && date.created_at < endDateDia6
      );

      var b18 = filtro2(result3);

      var dia6 = b16 + b17 + b18;

      // console.log(res10 + res11 + res12);
      ///////////////////////////dia6
      ///////////////////////////dia7
      var startDateDia7 = "2021-08-29";
      var endDateDia7 = "2021-08-30";
      var result1 = resultadooDia2.feeds.filter(
        (date) => date.created_at > startDateDia7 && date.created_at < endDateDia7
      );

      var b19 = filtro2(result1);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) => date.created_at > startDateDia7 && date.created_at < endDateDia7
      );

      var b20 = filtro2(result2);

      var result3 = resultadooDia4.feeds.filter(
        (date) => date.created_at > startDateDia7 && date.created_at < endDateDia7
      );

      var b21 = filtro2(result3);

      var dia7 = b19 + b20 + b21;

      ///////////////////////////dia7

      var speedCanvas = document.getElementById("speedChart3");

      var dataFirst3 = {
        data: [dia1, dia2, dia3, dia4, dia5, dia6, dia7],
        fill: false,
        borderColor: "#F03F3F",
        backgroundColor: "#F03F3F",
        pointBorderColor: "#F03F3F",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var speedData = {
        labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
        datasets: [dataFirst3],
      };

      var chartOptions = {
        legend: {
          display: false,
          position: "bottom",
        },
      };

      var lineChart = new Chart(speedCanvas, {
        type: "line",
        hover: false,
        data: speedData,
        options: chartOptions,
      });
    };
    dia1();
  },

  initGoogleMaps: function () {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [
        {
          featureType: "water",
          stylers: [
            {
              saturation: 43,
            },
            {
              lightness: -11,
            },
            {
              hue: "#0088ff",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              hue: "#ff0000",
            },
            {
              saturation: -100,
            },
            {
              lightness: 99,
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#808080",
            },
            {
              lightness: 54,
            },
          ],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ece2d9",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ccdca1",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#767676",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#b8cb93",
            },
          ],
        },
        {
          featureType: "poi.park",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "poi.sports_complex",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "poi.medical",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "poi.business",
          stylers: [
            {
              visibility: "simplified",
            },
          ],
        },
      ],
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!",
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  },

  showNotification: function (from, align) {
    color = "primary";

    $.notify(
      {
        icon: "nc-icon nc-bell-55",
        message:
          "Welcome to <b>Paper Dashboard</b> - a beautiful bootstrap dashboard for every web developer.",
      },
      {
        type: color,
        timer: 8000,
        placement: {
          from: from,
          align: align,
        },
      }
    );
  },
};
