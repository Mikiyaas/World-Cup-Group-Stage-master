// Allocate Teams Randomly to a 4 Chunks of Group Stage

function randomAllocate() {
  const france = document.getElementById("card1").textContent;
  const brazil = document.getElementById("card2").textContent;
  const germany = document.getElementById("card3").textContent;
  const croatia = document.getElementById("card4").textContent;
  const moroco = document.getElementById("card5").textContent;
  const japan = document.getElementById("card6").textContent;
  const southKorea = document.getElementById("card7").textContent;
  const argentina = document.getElementById("card8").textContent;
  const saudiArabia = document.getElementById("card9").textContent;
  const qatar = document.getElementById("card10").textContent;
  const poland = document.getElementById("card11").textContent;
  const portugal = document.getElementById("card12").textContent;
  const swith = document.getElementById("card13").textContent;
  const ghana = document.getElementById("card14").textContent;
  const senegal = document.getElementById("card15").textContent;
  const dutch = document.getElementById("card16").textContent;

  let group1 = document.getElementById("group1");
  let group2 = document.getElementById("group2");
  let group3 = document.getElementById("group3");
  let group4 = document.getElementById("group4");
  let group5 = document.getElementById("group5");
  let group6 = document.getElementById("group6");
  let group7 = document.getElementById("group7");
  let group8 = document.getElementById("group8");
  let group9 = document.getElementById("group9");
  let group10 = document.getElementById("group10");
  let group11 = document.getElementById("group11");
  let group12 = document.getElementById("group12");
  let group13 = document.getElementById("group13");
  let group14 = document.getElementById("group14");
  let group15 = document.getElementById("group15");
  let group16 = document.getElementById("group16");

  array = [
    france,
    brazil,
    germany,
    croatia,
    moroco,
    japan,
    southKorea,
    argentina,
    saudiArabia,
    qatar,
    poland,
    portugal,
    swith,
    ghana,
    senegal,
    dutch,
  ];
  array2 = [
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
    group11,
    group12,
    group13,
    group14,
    group15,
    group16,
  ];

  for (let i = 0; i < array.length; i++) {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    function randomTeam() {
      shuffleArray(array);

      let flag = false;
      for (let i = 0; i < array.length; i++) {
        if (array[i] !== null) {
          array2[i].innerHTML = array[i];
          array[i] = null;
          flag = true;
        }
      }
    }
    shuffleArray(array);
    randomTeam();
  }
}

// Display Charts

function displayData() {
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  let value3 = document.getElementById("value3").value;
  let value4 = document.getElementById("value4").value;
  let value5 = document.getElementById("value5").value;
  let value6 = document.getElementById("value6").value;
  let value7 = document.getElementById("value7").value;
  let value8 = document.getElementById("value8").value;
  let value9 = document.getElementById("value9").value;
  let value10 = document.getElementById("value10").value;
  let value11 = document.getElementById("value11").value;
  let value12 = document.getElementById("value12").value;
  let value13 = document.getElementById("value13").value;
  let value14 = document.getElementById("value14").value;
  let value15 = document.getElementById("value15").value;
  let value16 = document.getElementById("value16").value;

  array2 = [
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
    group11,
    group12,
    group13,
    group14,
    group15,
    group16,
  ];

  array3 = [
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    value16,
  ];
  //

  Highcharts.chart("container", {
    chart: {
      type: "variablepie",
    },
    title: {
      text: `<h1 class="text-center">Pie Chart`,
      align: "left",
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Points: <b>{point.y}</b><br/>",
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "15%",
        zMin: 0,
        name: "Points",
        data: [
          {
            name: array2[0].textContent,
            y: Number(array3[0]),
            z: 92,
          },
          {
            name: array2[1].textContent,
            y: Number(array3[1]),
            z: 92,
          },
          {
            name: array2[2].textContent,
            y: Number(array3[2]),
            z: 92,
          },
          {
            name: array2[3].textContent,
            y: Number(array3[3]),
            z: 92,
          },
        ],
      },
    ],
  });

  Highcharts.chart("container2", {
    chart: {
      type: "column",
    },
    title: {
      align: "left",
      text: "Bar Chart",
    },
    subtitle: {
      align: "left",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Points",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{y} Points",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span> <b>{y}</b><br/>',
    },

    series: [
      {
        name: "Team",
        colorByPoint: true,
        data: [
          {
            name: array2[0].textContent,
            y: Number(array3[0]),
            drilldown: array2[0].textContent,
          },
          {
            name: array2[1].textContent,
            y: Number(array3[1]),
            drilldown: array2[1].textContent,
          },
          {
            name: array2[2].textContent,
            y: Number(array3[2]),
            drilldown: array2[2].textContent,
          },
          {
            name: array2[3].textContent,
            y: Number(array3[3]),
            drilldown: array2[3].textContent,
          },
        ],
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
    },
  });
}

function displayData2() {
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  let value3 = document.getElementById("value3").value;
  let value4 = document.getElementById("value4").value;
  let value5 = document.getElementById("value5").value;
  let value6 = document.getElementById("value6").value;
  let value7 = document.getElementById("value7").value;
  let value8 = document.getElementById("value8").value;
  let value9 = document.getElementById("value9").value;
  let value10 = document.getElementById("value10").value;
  let value11 = document.getElementById("value11").value;
  let value12 = document.getElementById("value12").value;
  let value13 = document.getElementById("value13").value;
  let value14 = document.getElementById("value14").value;
  let value15 = document.getElementById("value15").value;
  let value16 = document.getElementById("value16").value;

  array2 = [
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
    group11,
    group12,
    group13,
    group14,
    group15,
    group16,
  ];

  array3 = [
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    value16,
  ];
  //

  Highcharts.chart("container", {
    chart: {
      type: "variablepie",
    },
    title: {
      text: `<h1 class="text-center">Pie Chart`,
      align: "left",
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Points: <b>{point.y}</b><br/>",
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "15%",
        zMin: 0,
        name: "Points",
        data: [
          {
            name: array2[4].textContent,
            y: Number(array3[4]),
            z: 92,
          },
          {
            name: array2[5].textContent,
            y: Number(array3[5]),
            z: 92,
          },
          {
            name: array2[6].textContent,
            y: Number(array3[6]),
            z: 92,
          },
          {
            name: array2[7].textContent,
            y: Number(array3[7]),
            z: 92,
          },
        ],
      },
    ],
  });

  Highcharts.chart("container2", {
    chart: {
      type: "column",
    },
    title: {
      align: "left",
      text: "Bar Chart",
    },
    subtitle: {
      align: "left",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Points",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{y} Points",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span> <b>{y}</b><br/>',
    },

    series: [
      {
        name: "Team",
        colorByPoint: true,
        data: [
          {
            name: array2[4].textContent,
            y: Number(array3[4]),
            drilldown: array2[4].textContent,
          },
          {
            name: array2[5].textContent,
            y: Number(array3[5]),
            drilldown: array2[5].textContent,
          },
          {
            name: array2[6].textContent,
            y: Number(array3[6]),
            drilldown: array2[6].textContent,
          },
          {
            name: array2[7].textContent,
            y: Number(array3[7]),
            drilldown: array2[7].textContent,
          },
        ],
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
    },
  });
}

function displayData3() {
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  let value3 = document.getElementById("value3").value;
  let value4 = document.getElementById("value4").value;
  let value5 = document.getElementById("value5").value;
  let value6 = document.getElementById("value6").value;
  let value7 = document.getElementById("value7").value;
  let value8 = document.getElementById("value8").value;
  let value9 = document.getElementById("value9").value;
  let value10 = document.getElementById("value10").value;
  let value11 = document.getElementById("value11").value;
  let value12 = document.getElementById("value12").value;
  let value13 = document.getElementById("value13").value;
  let value14 = document.getElementById("value14").value;
  let value15 = document.getElementById("value15").value;
  let value16 = document.getElementById("value16").value;

  array2 = [
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
    group11,
    group12,
    group13,
    group14,
    group15,
    group16,
  ];

  array3 = [
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    value16,
  ];
  //

  Highcharts.chart("container", {
    chart: {
      type: "variablepie",
    },
    title: {
      text: `<h1 class="text-center">Pie Chart`,
      align: "left",
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Points: <b>{point.y}</b><br/>",
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "15%",
        zMin: 0,
        name: "Points",
        data: [
          {
            name: array2[8].textContent,
            y: Number(array3[8]),
            z: 92,
          },
          {
            name: array2[9].textContent,
            y: Number(array3[9]),
            z: 92,
          },
          {
            name: array2[10].textContent,
            y: Number(array3[10]),
            z: 92,
          },
          {
            name: array2[11].textContent,
            y: Number(array3[11]),
            z: 92,
          },
        ],
      },
    ],
  });

  Highcharts.chart("container2", {
    chart: {
      type: "column",
    },
    title: {
      align: "left",
      text: "Bar Chart",
    },
    subtitle: {
      align: "left",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Points",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{y} Points",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span> <b>{y}</b><br/>',
    },

    series: [
      {
        name: "Team",
        colorByPoint: true,
        data: [
          {
            name: array2[8].textContent,
            y: Number(array3[8]),
            drilldown: array2[8].textContent,
          },
          {
            name: array2[9].textContent,
            y: Number(array3[9]),
            drilldown: array2[9].textContent,
          },
          {
            name: array2[10].textContent,
            y: Number(array3[10]),
            drilldown: array2[10].textContent,
          },
          {
            name: array2[11].textContent,
            y: Number(array3[11]),
            drilldown: array2[11].textContent,
          },
        ],
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
    },
  });
}

function displayData4() {
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  let value3 = document.getElementById("value3").value;
  let value4 = document.getElementById("value4").value;
  let value5 = document.getElementById("value5").value;
  let value6 = document.getElementById("value6").value;
  let value7 = document.getElementById("value7").value;
  let value8 = document.getElementById("value8").value;
  let value9 = document.getElementById("value9").value;
  let value10 = document.getElementById("value10").value;
  let value11 = document.getElementById("value11").value;
  let value12 = document.getElementById("value12").value;
  let value13 = document.getElementById("value13").value;
  let value14 = document.getElementById("value14").value;
  let value15 = document.getElementById("value15").value;
  let value16 = document.getElementById("value16").value;

  array2 = [
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
    group11,
    group12,
    group13,
    group14,
    group15,
    group16,
  ];

  array3 = [
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
    value14,
    value15,
    value16,
  ];
  //

  Highcharts.chart("container", {
    chart: {
      type: "variablepie",
    },
    title: {
      text: `<h1 class="text-center">Pie Chart`,
      align: "left",
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Points: <b>{point.y}</b><br/>",
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "15%",
        zMin: 0,
        name: "Points",
        data: [
          {
            name: array2[12].textContent,
            y: Number(array3[12]),
            z: 92,
          },
          {
            name: array2[13].textContent,
            y: Number(array3[13]),
            z: 92,
          },
          {
            name: array2[14].textContent,
            y: Number(array3[14]),
            z: 92,
          },
          {
            name: array2[15].textContent,
            y: Number(array3[15]),
            z: 92,
          },
        ],
      },
    ],
  });

  Highcharts.chart("container2", {
    chart: {
      type: "column",
    },
    title: {
      align: "left",
      text: "Bar Chart",
    },
    subtitle: {
      align: "left",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Points",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{y} Points",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span> <b>{y}</b><br/>',
    },

    series: [
      {
        name: "Team",
        colorByPoint: true,
        data: [
          {
            name: array2[12].textContent,
            y: Number(array3[12]),
            drilldown: array2[12].textContent,
          },
          {
            name: array2[13].textContent,
            y: Number(array3[13]),
            drilldown: array2[13].textContent,
          },
          {
            name: array2[14].textContent,
            y: Number(array3[14]),
            drilldown: array2[14].textContent,
          },
          {
            name: array2[15].textContent,
            y: Number(array3[15]),
            drilldown: array2[15].textContent,
          },
        ],
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
    },
  });
}
