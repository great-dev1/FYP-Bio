import worldMap from "@highcharts/map-collection/custom/world.geo.json";

import instagramIcon from 'assets/img/instagram-color.svg';
import snapChatIcon from 'assets/img/snapchat-color.svg';
import fanslyIcon from 'assets/img/fansly-color.svg';
import twitterIcon from 'assets/img/twitter-blue.svg';
import facebookIcon from 'assets/img/analytics/facebook.svg';
import tiktokIcon from 'assets/img/tiktok.svg';

export const topLinksLinkList: any[] = [
  {
    title: 'Facebook Link',
    clicks: 16029,
    progress: 30
  },
  {
    title: 'Snapchat Link',
    clicks: 20029,
    progress: 60
  },
  {
    title: 'Instagram Link',
    clicks: 18029,
    progress: 30
  },
  {
    title: 'Tiktok Link',
    clicks: 17029,
    progress: 50
  },
  {
    title: 'Google Link',
    clicks: 12349,
    progress: 30
  },
  {
    title: 'Youtube Link',
    clicks: 12349,
    progress: 30
  },
  {
    title: 'Twitter Link',
    clicks: 12349,
    progress: 50
  },
  {
    title: 'Linkedin Link',
    clicks: 12349,
    progress: 50
  }
];

export const topLinksIconList: any[] = [
  {
    title: 'Facebook Icon',
    clicks: 16029,
    progress: 30
  },
  {
    title: 'Snapchat Icon',
    clicks: 20029,
    progress: 60
  },
  {
    title: 'Instagram Icon',
    clicks: 18029,
    progress: 30
  },
  {
    title: 'Tiktok Icon',
    clicks: 17029,
    progress: 50
  },
  {
    title: 'Google Icon',
    clicks: 12349,
    progress: 30
  },
  {
    title: 'Youtube Icon',
    clicks: 12349,
    progress: 30
  },
  {
    title: 'Twitter Icon',
    clicks: 12349,
    progress: 50
  },
  {
    title: 'Linkedin Icon',
    clicks: 12349,
    progress: 50
  }
];

export const trafficList: any[] = [
  {
    title: 'Instagram',
    progress: 100,
    icon: instagramIcon,
    width: 30.5,
    height: 30.5,
    color: 'instagram'
  },
  {
    title: 'Snapchat',
    progress: 70,
    icon: snapChatIcon,
    width: 32.78,
    height: 30.5,
    color: 'snapchat'
  },
  {
    title: 'Onlyfans',
    progress: 40,
    icon: fanslyIcon,
    width: 30.9,
    height: 25.47,
    color: 'onlyfans'
  },
  {
    title: 'Twitter',
    progress: 30,
    icon: twitterIcon,
    width: 30.5,
    height: 25,
    color: 'twitter'
  },
  {
    title: 'Facebook',
    progress: 20,
    icon: facebookIcon,
    width: 15.85,
    height: 30.5,
    color: 'facebook'
  },
  {
    title: 'Tiktok',
    progress: 10,
    icon: tiktokIcon,
    width: 27.84,
    height: 31.75,
    color: 'tiktok'
  }
];

export const topChartOptions = {
  title: {
    text: ''
  },
  credits: {
    enabled: false
  },
  series: [
    {
      data: [10, 21, 15, 6, 19, 27, 23, 14, 11, 16, 9],
      color: '#54AAF5',
      name: 'Line 1',
      type: 'line',
      marker: {
        enabled: false
      }
    },
    {
      data: [12, 23, 17, 17, 15, 23, 16, 8, 3, 12, 23],
      color: '#54AAF5',
      name: 'Line 2',
      type: 'line',
      dashStyle: 'ShortDash',
      marker: {
        enabled: false
      }
    }
  ],
  xAxis: {
    categories: ['Jan 13th', 'Jan 14th', 'Jan 15th', 'Jan 16th', 'Jan 17th', 'Jan 18th', 'Jan 19th', 'Jan 20th', 'Jan 21th', 'Jan 22th', 'Jan 23th'],
    labels: {
      style: {
        color: '#7C828A',
        fontSize: '12px'
      }
    }
  },
  yAxis: {
    show: false,
    gridLineWidth: 1,
    gridLineColor: 'rgba(214, 217, 220, 0.4)',
    labels: {
      enabled: true,
      align: 'center',
      format: '{value}K'
    },
    title: {
      enabled: false
    },
    opposite: true
  },
  legend: {
    show: false,
    enabled: false
  },
  chart: {
    backgroundColor: 'transparent',
    type: 'line',
    padding: [0, 0, 0, 0],
    marginLeft: 0
  }
};

export const topReffersChartOptions = {
  colors: ['#4BB7DF', '#FFEEAB', '#E8EDA8', '#52D2CF', '#DFD25A', '#EC4AF8', '#F8F8F8'],
  credits: {
    enabled: false
  },
  chart: {
    type: 'pie',
    marginTop: 0,
    marginBottom: 0,
    spacing: 0,
    height: 280
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: false,
      cursor: 'pointer',
      dataLabels: {
        enabled: false,
      },
      showInLegend: false,
      size: '100%'
    }
  },
  series: [{
    name: 'Registrations',
    colorByPoint: true,
    innerSize: '75%',
    data: [
      {
        name: 'Facebook',
        y: 50
      },
      {
        name: 'Snapchat',
        y: 40
      },
      {
        name: 'Instagram',
        y: 30
      },
      {
        name: 'Twitter',
        y: 20
      },
      {
        name: 'Linktree',
        y: 10
      },
      {
        name: 'Google',
        y: 5
      }
    ]
  }] 
};

export const deviceChartOptions = {
  colors: ['#8AD2FC', '#9F83EB', '#D39DDF'],
  credits: {
    enabled: false
  },
  chart: {
    type: 'pie',
    marginTop: 0,
    marginBottom: 0,
    spacing: 0,
    height: 280
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: false,
      cursor: 'pointer',
      dataLabels: {
        enabled: false,
      },
      showInLegend: false
    }
  },
  series: [{
    name: 'Registrations',
    colorByPoint: true,
    innerSize: '75%',
    data: [
      {
        name: 'Mobile',
        y: 25
      },
      {
        name: 'Tablet',
        y: 35
      },
      {
        name: 'Desktop',
        y: 55
      }
    ]
  }]
};

export const retentionChartOptions = {
  chart: {
    type: 'column',
    backgroundColor: 'transparent',
    // marginLeft: 0
    // marginBottom: 35,
    // marginLeft: 0,
    spacingLeft: 40
    // spacingBottom: 15
  },
  credits: {
    enabled: false
  },
  colors: ['#fff'],
  title: {
    text: ''
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category',
    labels: {     
      style: {
        color: '#fff',
        fontSize: '12px'
      }
    }
  },
  yAxis: {
    title: {
      enabled: false
    },
    gridLineWidth: 1,
    gridLineColor: 'rgba(214, 217, 220, 0.4)',
    labels: {
      enabled: true,
      x: -40,
      align: 'left',
      format: '{value} min',
      style: {
        color: '#fff',
        fontSize: '12px'      
      }
    },
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: false,
        format: '{point.y:.1f}min'
      }
    },
    column: {
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, '#439ADB'],
          [1, '#AF53D6']
        ]
      },
      borderRadius: 3.5,
      pointWidth: 7
    }
  },

  // tooltip: {
  //     headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
  //     pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  // },

  series: [
    {
      name: "Retention Time",
      colorByPoint: false,
      data: [
        {
          name: "Jan 13th",
          y: 9
        },
        {
          name: "Jan 14th",
          y: 17
        },
        {
          name: "Jan 15th",
          y: 4
        },
        {
          name: "Jan 16th",
          y: 8
        },
        {
          name: "Jan 17th",
          y: 4
        }
      ]
    }
  ]
};

export const emailSmsChartOptions = {
  chart: {
    type: 'column',
    backgroundColor: 'transparent',
  },
  credits: {
    enabled: false
  },
  colors: ['#fff'],
  title: {
    text: ''
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category',
    labels: {
      style: {
        color: '#7C828A',
        fontSize: '12px'
      }
    }
  },
  yAxis: {
    title: {
      enabled: false
    },
    gridLineWidth: 1,
    gridLineColor: 'rgba(214, 217, 220, 0.4)',
    labels: {
      enabled: true,
      align: 'center',
      style: {
        color: '#7C828A',
        fontSize: '12px'
      }
    },
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: false,
        format: '{point.y:.1f}min'
      }
    },
    column: {
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, '#439ADB'],
          [1, '#AF53D6']
        ]
      },
      borderRadius: 5,
      pointWidth: 32
    }
  },
  series: [
    {
      name: "Email & SMS Analytics",
      colorByPoint: false,
      data: [
        {
          name: "Jan 13th",
          y: 400
        },
        {
          name: "Jan 14th",
          y: 250
        },
        {
          name: "Jan 15th",
          y: 150
        },
        {
          name: "Jan 16th",
          y: 360
        },
        {
          name: "Jan 17th",
          y: 230
        },
        {
          name: "Jan 18th",
          y: 160
        },
        {
          name: "Jan 19th",
          y: 360
        },
        {
          name: "Jan 20th",
          y: 450
        },
        {
          name: "Jan 21th",
          y: 170
        },
        {
          name: "Jan 22th",
          y: 330
        },
        {
          name: "Jan 23th",
          y: 290
        },
      ]
    }
  ],
  responsive: {
    rules: [
      {
        chartOptions: {
          plotOptions: {
            column: {
              pointWidth: 8.5
            }
          }
        },
        condition: {
          maxWidth: 600
        }
      }
    ]
  }
};

export const geographicalChartOptions = {
  credits: {
    enabled: false
  },
  chart: {
    map: worldMap,
    borderWidth: 0,
    margin: 0,
    height: 245,
    resetZoomButton: {
      theme: {
        display: 'none'
      }
    }
  }, 
  accessibility: {
    series: {
      descriptionFormat: '{series.name}, map with {series.points.length} areas.',
      pointDescriptionEnabledThreshold: 50
    }
  },
  title: {
    text: null
  },
  mapNavigation: {
    enabled: false,
    enableDoubleClickZoomTo: false
  },
  colorAxis: {   
    dataClasses: [
      {
        to: 10,
        color: '#f5f5f5'
      },
      {
        from: 10,
        to: 100,
        color: '#F1E5F4'
      },
      {
        from: 100,
        to: 1000,
        color: '#E8C3F1'
      },
      {
        from: 1000,
        color: '#BB14E2'
      }
    ]
  },
  legend: {
    enabled: false   
  },
  tooltip: {
    enabled: true,
    padding: 12,
    useHTML: true,
    backgroundColor: '#fff',
    style: {
      fontSize: '15px'      
    }
  },
  plotOptions: {
    threshold: 0
  },
  series: [
    {
      name: "Visitors",
      states: {
        hover: {
          color: "#BADA55"
        }
      },
      dataLabels: {
        enabled: false,
        format: "{point.name}"
      },
      data: []
    }
  ],
  responsive: {
    rules: [
      {
        chartOptions: {
          chart: {
            height: 200
          }
        },
        condition: {
          maxWidth: 400
        }
      }
    ]
  }
};
