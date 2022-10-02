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
    const url =
      "https://api.thingspeak.com/channels/1437601/fields/1.json?api_key=DFMTPNCWK75GSWV2&results=1";

    const url2 =
      "https://api.thingspeak.com/channels/1843700/feeds.json?results=1";

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
          if (arr[i] > 35) {
            verde = verde + 1;
          }
          if (arr[i] <= 35 && arr[i] > 15) {
            amarillo = amarillo + 1;
          }
          if (arr[i] <= 15) {
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
    ///////////////////////////////////////////////////////////////////chart1
    ///////////////////////////////////////////////////////////////////chart2
    ///////////////////////////////////meses
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
      console.log(mes1 + "asd1");
      //console.log(mes3 + mes1 + mes2);
      ////////////////////////////dia
      ///////////////////////////mes2
      var startDateMes2 = "2021-02-01";
      var endDateMes2 = "2021-02-28";
      var resultMes1 = resultadooMes2.feeds.filter(
        (date) =>
          date.created_at > startDateMes2 && date.created_at < endDateMes2
      );

      let m41 = 0;
      let m42 = 0;
      let m43 = 0;
      let m44 = 0;

      var bas4 = filtro2(resultMes1, m41, m42, m43, m44);

      ////////////////////////////
      var resultMes2 = resultadooMes3.feeds.filter(
        (date) =>
          date.created_at > startDateMes2 && date.created_at < endDateMes2
      );

      let m51 = 0;
      let m52 = 0;
      let m53 = 0;
      let m54 = 0;

      var bas5 = filtro2(resultMes2, m51, m52, m53, m54);

      var resultMes3 = resultadooMes4.feeds.filter(
        (date) =>
          date.created_at > startDateMes2 && date.created_at < endDateMes2
      );

      let m61 = 0;
      let m62 = 0;
      let m63 = 0;
      let m64 = 0;

      var bas6 = filtro2(resultMes3, m61, m62, m63, m64);

      var mes2 = bas4 + bas5 + bas6;
      console.log(mes2 + "asd2");
      //console.log(res4 + res5 + res6);
      ///////////////////////////mes2
      ///////////////////////////mes3
      var startDateMes3 = "2021-03-01";
      var endDateMes3 = "2021-03-31";
      var resultMes1 = resultadooMes2.feeds.filter(
        (date) =>
          date.created_at > startDateMes3 && date.created_at < endDateMes3
      );

      let m71 = 0;
      let m72 = 0;
      let m73 = 0;
      let m74 = 0;

      var bas7 = filtro2(resultMes1, m71, m72, m73, m74);

      ////////////////////////////
      var resultMes2 = resultadooMes3.feeds.filter(
        (date) =>
          date.created_at > startDateMes3 && date.created_at < endDateMes3
      );

      let m81 = 0;
      let m82 = 0;
      let m83 = 0;
      let m84 = 0;

      var bas8 = filtro2(resultMes2, m81, m82, m83, m84);

      // var mes2 = filtro2(resultMes1);

      var resultMes3 = resultadooMes4.feeds.filter(
        (date) =>
          date.created_at > startDateMes3 && date.created_at < endDateMes3
      );

      let m91 = 0;
      let m92 = 0;
      let m93 = 0;
      let m94 = 0;

      var bas9 = filtro2(resultMes3, m91, m92, m93, m94);

      var mes3 = bas7 + bas8 + bas9;
      console.log(mes3 + "asd3");
      //console.log(res7 + res8 + res9);
      ///////////////////////////mes3
      ///////////////////////////mes4
      var startDateMes4 = "2021-04-01";
      var endDateMes4 = "2021-04-30";
      var resultMes1 = resultadooMes2.feeds.filter(
        (date) =>
          date.created_at > startDateMes4 && date.created_at < endDateMes4
      );

      let m101 = 0;
      let m102 = 0;
      let m103 = 0;
      let m104 = 0;

      var bas10 = filtro2(resultMes1, m101, m102, m103, m104);

      ////////////////////////////
      var resultMes2 = resultadooMes3.feeds.filter(
        (date) =>
          date.created_at > startDateMes4 && date.created_at < endDateMes4
      );

      let m111 = 0;
      let m112 = 0;
      let m113 = 0;
      let m114 = 0;

      var bas11 = filtro2(resultMes2, m111, m112, m113, m114);

      var resultMes3 = resultadooMes4.feeds.filter(
        (date) =>
          date.created_at > startDateMes4 && date.created_at < endDateMes4
      );

      let m121 = 0;
      let m122 = 0;
      let m123 = 0;
      let m124 = 0;

      var bas12 = filtro2(resultMes3, m121, m122, m123, m124);

      var mes4 = bas10 + bas11 + bas12;
      console.log(mes4 + "asd4");
      // console.log(res10 + res11 + res12);
      ///////////////////////////mes4
      ///////////////////////////mes5
      var startDateMes5 = "2021-05-01";
      var endDateMes5 = "2021-05-31";
      var resultMes1 = resultadooMes2.feeds.filter(
        (date) =>
          date.created_at > startDateMes5 && date.created_at < endDateMes5
      );

      let m131 = 0;
      let m132 = 0;
      let m133 = 0;
      let m134 = 0;

      var bas13 = filtro2(resultMes1, m131, m132, m133, m134);

      ////////////////////////////
      var resultMes2 = resultadooMes3.feeds.filter(
        (date) =>
          date.created_at > startDateMes5 && date.created_at < endDateMes5
      );

      let m141 = 0;
      let m142 = 0;
      let m143 = 0;
      let m144 = 0;

      var bas14 = filtro2(resultMes2, m141, m142, m143, m144);

      var resultMes3 = resultadooMes4.feeds.filter(
        (date) =>
          date.created_at > startDateMes5 && date.created_at < endDateMes5
      );

      let m151 = 0;
      let m152 = 0;
      let m153 = 0;
      let m154 = 0;

      var bas15 = filtro2(resultMes3, m151, m152, m153, m154);

      var mes5 = bas13 + bas14 + bas15;
      console.log(mes5 + "asd5");

      ///////////////////////////mes5
      ///////////////////////////mes6
      var startDateMes6 = "2021-06-01";
      var endDateMes6 = "2021-06-30";
      var resultMes1 = resultadooMes2.feeds.filter(
        (date) =>
          date.created_at > startDateMes6 && date.created_at < endDateMes6
      );

      let m161 = 0;
      let m162 = 0;
      let m163 = 0;
      let m164 = 0;

      var bas16 = filtro2(resultMes1, m161, m162, m163, m164);

      ////////////////////////////
      var resultMes2 = resultadooMes3.feeds.filter(
        (date) =>
          date.created_at > startDateMes6 && date.created_at < endDateMes6
      );

      let m171 = 0;
      let m172 = 0;
      let m173 = 0;
      let m174 = 0;

      var bas17 = filtro2(resultMes2, m171, m172, m173, m174);

      var resultMes3 = resultadooMes4.feeds.filter(
        (date) =>
          date.created_at > startDateMes6 && date.created_at < endDateMes6
      );

      let m181 = 0;
      let m182 = 0;
      let m183 = 0;
      let m184 = 0;

      var bas18 = filtro2(resultMes3, m181, m182, m183, m184);

      var mes6 = bas16 + bas17 + bas18;
      console.log(mes6 + "asd6");
      // console.log(res10 + res11 + res12);
      ///////////////////////////mes6
      ///////////////////////////mes7
      var startDateMes7 = "2021-07-01";
      var endDateMes7 = "2021-07-31";
      var resultMes1 = resultadooMes2.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m191 = 0;
      let m192 = 0;
      let m193 = 0;
      let m194 = 0;

      var bas19 = filtro2(resultMes1, m191, m192, m193, m194);

      ////////////////////////////
      var resultMes2 = resultadooMes3.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m201 = 0;
      let m202 = 0;
      let m203 = 0;
      let m204 = 0;

      var bas20 = filtro2(resultMes2, m201, m202, m203, m204);

      var resultMes3 = resultadooMes4.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m211 = 0;
      let m212 = 0;
      let m213 = 0;
      let m214 = 0;

      var bas21 = filtro2(resultMes3, m211, m212, m213, m214);

      var mes7 = bas19 + bas20 + bas21;
      console.log(mes7 + "8");
      ///////////////////////////mes7
      ///////////////////////////mes8
      var startDateMes7 = "2021-08-01";
      var endDateMes7 = "2021-08-31";
      var resultMes1 = resultadooMes2.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m221 = 0;
      let m222 = 0;
      let m223 = 0;
      let m224 = 0;

      var bas22 = filtro2(resultMes1, m221, m222, m223, m224);

      ////////////////////////////
      var resultMes2 = resultadooMes3.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m231 = 0;
      let m232 = 0;
      let m233 = 0;
      let m234 = 0;

      var bas23 = filtro2(resultMes2, m231, m232, m233, m234);

      var resultMes3 = resultadooMes4.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m391 = 0;
      let m392 = 0;
      let m393 = 0;
      let m394 = 0;

      var bas39 = filtro2(resultMes3, m391, m392, m393, m394);

      var mes8 = bas22 + bas23 + bas39;
      console.log(mes8 + "9");
      ///////////////////////////mes8
      ///////////////////////////mes9
      var startDateMes7 = "2021-09-01";
      var endDateMes7 = "2021-09-30";
      var resultMes1 = resultadooMes2.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m241 = 0;
      let m242 = 0;
      let m243 = 0;
      let m244 = 0;

      var bas24 = filtro2(resultMes1, m241, m242, m243, m244);

      ////////////////////////////
      var resultMes2 = resultadooMes3.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m401 = 0;
      let m402 = 0;
      let m403 = 0;
      let m404 = 0;

      var bas40 = filtro2(resultMes2, m401, m402, m403, m404);

      var resultMes3 = resultadooMes4.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m251 = 0;
      let m252 = 0;
      let m253 = 0;
      let m254 = 0;

      var bas25 = filtro2(resultMes3, m251, m252, m253, m254);

      var mes9 = bas24 + bas40 + bas25;
      console.log(mes9 + "10");
      ///////////////////////////mes9
      ///////////////////////////mes10
      var startDateMes7 = "2021-10-01";
      var endDateMes7 = "2021-10-31";
      var resultMes1 = resultadooMes2.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m261 = 0;
      let m262 = 0;
      let m263 = 0;
      let m264 = 0;

      var bas26 = filtro2(resultMes1, m261, m262, m263, m264);

      ////////////////////////////
      var resultMes2 = resultadooMes3.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m271 = 0;
      let m272 = 0;
      let m273 = 0;
      let m274 = 0;

      var bas27 = filtro2(resultMes2, m271, m272, m273, m274);

      var resultMes3 = resultadooMes4.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m281 = 0;
      let m282 = 0;
      let m283 = 0;
      let m284 = 0;

      var bas28 = filtro2(resultMes3, m281, m282, m283, m284);

      var mes10 = bas26 + bas27 + bas28;
      console.log(mes10 + "11");
      ///////////////////////////mes10
      ///////////////////////////mes11
      var startDateMes7 = "2021-11-01";
      var endDateMes7 = "2021-11-30";
      var resultMes1 = resultadooMes2.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m291 = 0;
      let m292 = 0;
      let m293 = 0;
      let m294 = 0;

      var bas29 = filtro2(resultMes1, m291, m292, m293, m294);

      ////////////////////////////
      var resultMes2 = resultadooMes3.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m301 = 0;
      let m302 = 0;
      let m303 = 0;
      let m304 = 0;

      var bas30 = filtro2(resultMes2, m301, m302, m303, m304);

      var resultMes3 = resultadooMes4.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m311 = 0;
      let m312 = 0;
      let m313 = 0;
      let m314 = 0;

      var bas31 = filtro2(resultMes3, m311, m312, m313, m314);

      var mes11 = bas29 + bas30 + bas31;
      console.log(mes11 + "12");
      ///////////////////////////mes11
      ///////////////////////////mes12
      var startDateMes7 = "2021-12-01";
      var endDateMes7 = "2021-12-31";
      var resultMes1 = resultadooMes2.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m321 = 0;
      let m322 = 0;
      let m323 = 0;
      let m324 = 0;

      var bas32 = filtro2(resultMes1, m321, m322, m323, m324);

      ////////////////////////////
      var resultMes2 = resultadooMes3.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m341 = 0;
      let m342 = 0;
      let m343 = 0;
      let m344 = 0;

      var bas34 = filtro2(resultMes2, m341, m342, m343, m344);

      var resultMes3 = resultadooMes4.feeds.filter(
        (date) =>
          date.created_at > startDateMes7 && date.created_at < endDateMes7
      );

      let m351 = 0;
      let m352 = 0;
      let m353 = 0;
      let m354 = 0;

      var bas35 = filtro2(resultMes3, m351, m352, m353, m354);

      var mes12 = bas32 + bas34 + bas35;
      console.log(mes12 + "13");
      ///////////////////////////mes12

      ////////////////////////meses

      var speedCanvas = document.getElementById("speedChart2");

      var dataFirst2 = {
        data: [
          mes1,
          mes2,
          mes3,
          mes4,
          mes5,
          mes6,
          mes7,
          mes8,
          mes9,
          mes10,
          mes11,
          mes12,
        ],
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
    const urlDia2 =
      "https://api.thingspeak.com/channels/1843700/feeds.json?results=1096";

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

      let d11 = 0;
      let d12 = 0;
      let d13 = 0;
      let d14 = 0;

      var b1 = filtro2(result1, d11, d12, d13, d14);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) => date.created_at > startDateDia && date.created_at < endDateDia
      );

      let d21 = 0;
      let d22 = 0;
      let d23 = 0;
      let d24 = 0;

      var b2 = filtro2(result2, d21, d22, d23, d24);

      // var dia2 = filtro2(result1);

      var result3 = resultadooDia4.feeds.filter(
        (date) => date.created_at > startDateDia && date.created_at < endDateDia
      );

      let d31 = 0;
      let d32 = 0;
      let d33 = 0;
      let d34 = 0;

      var b3 = filtro2(result3, d31, d32, d33, d34);

      var dia1 = b1 + b2 + b3;

      //console.log(dia3 + dia1 + dia2);
      ////////////////////////////dia
      ///////////////////////////dia2
      var startDateDia2 = "2021-08-24";
      var endDateDia2 = "2021-08-25";
      var result1 = resultadooDia2.feeds.filter(
        (date) =>
          date.created_at > startDateDia2 && date.created_at < endDateDia2
      );

      let d41 = 0;
      let d42 = 0;
      let d43 = 0;
      let d44 = 0;

      var b4 = filtro2(result1, d41, d42, d43, d44);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) =>
          date.created_at > startDateDia2 && date.created_at < endDateDia2
      );

      let d51 = 0;
      let d52 = 0;
      let d53 = 0;
      let d54 = 0;

      var b5 = filtro2(result2, d51, d52, d53, d54);

      var result3 = resultadooDia4.feeds.filter(
        (date) =>
          date.created_at > startDateDia2 && date.created_at < endDateDia2
      );

      let d61 = 0;
      let d62 = 0;
      let d63 = 0;
      let d64 = 0;

      var b6 = filtro2(result3, d61, d62, d63, d64);

      var dia2 = b4 + b5 + b6;

      //console.log(res4 + res5 + res6);
      ///////////////////////////dia2
      ///////////////////////////dia3
      var startDateDia3 = "2021-08-25";
      var endDateDia3 = "2021-08-26";
      var result1 = resultadooDia2.feeds.filter(
        (date) =>
          date.created_at > startDateDia3 && date.created_at < endDateDia3
      );

      let d71 = 0;
      let d72 = 0;
      let d73 = 0;
      let d74 = 0;

      var b7 = filtro2(result1, d71, d72, d73, d74);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) =>
          date.created_at > startDateDia3 && date.created_at < endDateDia3
      );

      let d81 = 0;
      let d82 = 0;
      let d83 = 0;
      let d84 = 0;

      var b8 = filtro2(result2, d81, d82, d83, d84);

      // var dia2 = filtro2(result1);

      var result3 = resultadooDia4.feeds.filter(
        (date) =>
          date.created_at > startDateDia3 && date.created_at < endDateDia3
      );

      let d91 = 0;
      let d92 = 0;
      let d93 = 0;
      let d94 = 0;

      var b9 = filtro2(result3, d91, d92, d93, d94);

      var dia3 = b7 + b8 + b9;

      //console.log(res7 + res8 + res9);
      ///////////////////////////dia3
      ///////////////////////////dia4
      var startDateDia4 = "2021-08-26";
      var endDateDia4 = "2021-08-27";
      var result1 = resultadooDia2.feeds.filter(
        (date) =>
          date.created_at > startDateDia4 && date.created_at < endDateDia4
      );

      let d101 = 0;
      let d102 = 0;
      let d103 = 0;
      let d104 = 0;

      var b10 = filtro2(result1, d101, d102, d103, d104);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) =>
          date.created_at > startDateDia4 && date.created_at < endDateDia4
      );

      let d111 = 0;
      let d112 = 0;
      let d113 = 0;
      let d114 = 0;

      var b11 = filtro2(result2, d111, d112, d113, d114);

      var result3 = resultadooDia4.feeds.filter(
        (date) =>
          date.created_at > startDateDia4 && date.created_at < endDateDia4
      );

      let d121 = 0;
      let d122 = 0;
      let d123 = 0;
      let d124 = 0;

      var b12 = filtro2(result3, d121, d122, d123, d124);

      var dia4 = b10 + b11 + b12;

      // console.log(res10 + res11 + res12);
      ///////////////////////////dia4
      ///////////////////////////dia5
      var startDateDia5 = "2021-08-27";
      var endDateDia5 = "2021-08-28";
      var result1 = resultadooDia2.feeds.filter(
        (date) =>
          date.created_at > startDateDia5 && date.created_at < endDateDia5
      );

      let d131 = 0;
      let d132 = 0;
      let d133 = 0;
      let d134 = 0;

      var b13 = filtro2(result1, d131, d132, d133, d134);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) =>
          date.created_at > startDateDia5 && date.created_at < endDateDia5
      );

      let d141 = 0;
      let d142 = 0;
      let d143 = 0;
      let d144 = 0;

      var b14 = filtro2(result2, d141, d142, d143, d144);

      var result3 = resultadooDia4.feeds.filter(
        (date) =>
          date.created_at > startDateDia5 && date.created_at < endDateDia5
      );

      let d151 = 0;
      let d152 = 0;
      let d153 = 0;
      let d154 = 0;

      var b15 = filtro2(result3, d151, d152, d153, d154);

      var dia5 = b13 + b14 + b15;

      ///////////////////////////dia5
      ///////////////////////////dia6
      var startDateDia6 = "2021-08-28";
      var endDateDia6 = "2021-08-29";
      var result1 = resultadooDia2.feeds.filter(
        (date) =>
          date.created_at > startDateDia6 && date.created_at < endDateDia6
      );

      let d161 = 0;
      let d162 = 0;
      let d163 = 0;
      let d164 = 0;

      var b16 = filtro2(result1, d161, d162, d163, d164);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) =>
          date.created_at > startDateDia6 && date.created_at < endDateDia6
      );

      let d171 = 0;
      let d172 = 0;
      let d173 = 0;
      let d174 = 0;

      var b17 = filtro2(result2, d171, d172, d173, d174);

      var result3 = resultadooDia4.feeds.filter(
        (date) =>
          date.created_at > startDateDia6 && date.created_at < endDateDia6
      );

      let d181 = 0;
      let d182 = 0;
      let d183 = 0;
      let d184 = 0;

      var b18 = filtro2(result3, d181, d182, d183, d184);

      var dia6 = b16 + b17 + b18;

      // console.log(res10 + res11 + res12);
      ///////////////////////////dia6
      ///////////////////////////dia7
      var startDateDia7 = "2021-08-29";
      var endDateDia7 = "2021-08-30";
      var result1 = resultadooDia2.feeds.filter(
        (date) =>
          date.created_at > startDateDia7 && date.created_at < endDateDia7
      );

      let d191 = 0;
      let d192 = 0;
      let d193 = 0;
      let d194 = 0;

      var b19 = filtro2(result1, d191, d192, d193, d194);

      ////////////////////////////
      var result2 = resultadooDia3.feeds.filter(
        (date) =>
          date.created_at > startDateDia7 && date.created_at < endDateDia7
      );

      let d201 = 0;
      let d202 = 0;
      let d203 = 0;
      let d204 = 0;

      var b20 = filtro2(result2, d201, d202, d203, d204);

      var result3 = resultadooDia4.feeds.filter(
        (date) =>
          date.created_at > startDateDia7 && date.created_at < endDateDia7
      );

      let d211 = 0;
      let d212 = 0;
      let d213 = 0;
      let d214 = 0;

      var b21 = filtro2(result3, d211, d212, d213, d214);

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
