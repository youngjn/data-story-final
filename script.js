$(function() {
		  

		});


function twoth() {

	var current = $(".number").text();
	var currentInt = parseInt(current);


	countUp();

	function countUp() {
		var intervv=setInterval(add, 100);

		function add() {
			if (currentInt > 407) {
				currentInt-=1;
				if(currentInt < 407) {
					clearInterval(intervv);
				} else {
					$(".number").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#ffc3bf");
				        
				        $(".number").css("color", "#ffc3bf");

				}
			} else if(currentInt == 407) {
				clearInterval(intervv);
			} else {
				currentInt+=1;
				if (currentInt > 407) {
				        clearInterval(intervv);
				      } else {
				        $(".number").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#ffc3bf");
				        
				        $(".number").css("color", "#ffc3bf");
				      }
			}

			
		}
	}
	

	current = $(".number").text();
	currentInt = parseInt(current);
}



function twothtwo() {

	var current = $(".number").text();
	var currentInt = parseInt(current);


	countUp();

	function countUp() {
		var intervv=setInterval(add, 100);

		function add() {
			if (currentInt > 451) {
				currentInt-=1;
				if(currentInt < 451) {
					clearInterval(intervv);
				} else {
					$(".number").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#f09690");
				        
				        $(".number").css("color", "#f09690");

				}
			} else if(currentInt == 451) {
				clearInterval(intervv);
			} else {
				currentInt+=1;
				if (currentInt > 451) {
				        clearInterval(intervv);
				      } else {
				        $(".number").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#f09690");
				        
				        $(".number").css("color", "#f09690");
				      }
			}

			
		}
	}
	

	current = $(".number").text();
	currentInt = parseInt(current);
}

function twothfour() {

	var current = $(".number").text();
	var currentInt = parseInt(current);


	countUp();

	function countUp() {
		var intervv=setInterval(add, 100);

		function add() {
			if (currentInt > 510) {
				currentInt-=1;
				if(currentInt < 510) {
					clearInterval(intervv);
				} else {
					$(".number").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#e06d65");
				        
				        $(".number").css("color", "#e06d65");

				}
			} else if(currentInt == 510) {
				clearInterval(intervv);
			} else {
				currentInt+=1;
				if (currentInt > 510) {
				        clearInterval(intervv);
				      } else {
				        $(".number").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#e06d65");
				        
				        $(".number").css("color", "#e06d65");
				      }
			}

			
		}
	}
	

	current = $(".number").text();
	currentInt = parseInt(current);
}



function twothsix() {

	var current = $(".number").text();
	var currentInt = parseInt(current);


	countUp();

	function countUp() {
		var intervv=setInterval(add, 100);

		function add() {
			if (currentInt > 569) {
				currentInt-=1;
				if(currentInt < 569) {
					clearInterval(intervv);
				} else {
					$(".number").text(currentInt).toLocaleString('en-US');
				        $(".number").css("color", "#d45148");
				        $(".cows").css("color", "#d45148");

				}
			} else if(currentInt == 569) {
				clearInterval(intervv);
			} else {
				currentInt+=1;
				if (currentInt > 569) {
				        clearInterval(intervv);
				      } else {
				        $(".number").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#d45148");
				        $(".number").css("color", "#d45148");
				      }
			}

			
		}
	}
	

	current = $(".number").text();
	currentInt = parseInt(current);
}




function twotheight() {

	var current = $(".number").text();
	var currentInt = parseInt(current);


	countUp();

	function countUp() {
		var intervv=setInterval(add, 100);

		function add() {
			if (currentInt > 620) {
				currentInt-=1;
				if(currentInt < 620) {
					clearInterval(intervv);
				} else {
					$(".number").text(currentInt).toLocaleString('en-US');
					$(".number").css("color", "#bf3026");
				        $(".cows").css("color", "#bf3026");

				}
			} else if(currentInt == 620) {
				clearInterval(intervv);
			} else {
				currentInt+=1;
				if (currentInt > 620) {
				        clearInterval(intervv);
				      } else {
				        $(".number").text(currentInt).toLocaleString('en-US');
				        $(".number").css("color", "#bf3026");
				        $(".cows").css("color", "#bf3026");

				      }
			}

			
		}
	}
	

	current = $(".number").text();
	currentInt = parseInt(current);
}






// $(function() {
// 		  var cnt0 = 200000000;

// 		  counterFn();

// 		  function counterFn() {

// 		    id0 = setInterval(count0Fn, 100);

// 		    function count0Fn() {
// 		      cnt0++;
// 		      if (cnt0 > 99) {
// 		        clearInterval(id0);
// 		      } else {
// 		        $(".number").text(cnt0);
// 		      }
// 		    }
// 		  }
// 		});





// var ctx2 = document.getElementById("secondChart").getContext("2d");

// var secondChart = new Chart(ctx2, {
// 	type: 'line',
// 	data: {
// 		labels: [
// 		"1998",
// 		"1999",
// 		"2000",
// 		"2001",
// 		"2002",
// 		"2003",
// 		"2004",
// 		"2005",
// 		"2006",
// 		"2007",
// 		"2008",
// 		"2009",
// 		"2010",
// 		"2011",
// 		"2012",
// 		"2013",
// 		"2014",
// 		"2015",
// 		"2016",
// 		"2017",
// 		"2018"
// 		],
// 		datasets: [{
// 			label: 'South Korea Meat Production',
// 			data: [1.70, 1.78, 1.65, 1.59, 1.66, 1.78, 1.59, 1.64, 1.77, 1.84, 1.87, 1.97, 2.02, 1.81, 2.10, 2.31, 2.33, 2.42, 2.44, 2.41, 2.50],
// 			fill: false,
// 			borderColor: '#bf3026',
// 			backgroundColor: '#bf3026',
// 			borderWidth: 1
// 		}]
// 	},
// 	options: {
// 		responsive: true,
// 		maintainAspectRatio: true,
// 		plugins: {
// 			title: {
// 				display: true,
// 				text: 'South Korea Meat Production From 1998 to 2018',
// 				color: 'white',
// 				font: {
// 					family: "'DM Serif Display', serif",
// 					size: 20
// 				}
// 			},
// 			legend: {
// 				display: true,
// 				position: 'top',
// 				labels: {
// 					color: 'white',
// 					font: {
// 						family: "'Cormorant Garamond', serif",
// 						size: 14
// 					}
// 				}
// 			}
// 		},
// 		scales: {
// 			y: {
// 				ticks: {
// 					beginAtZero: true,
// 					color: 'white',
// 					font: {
// 						family: "'Cormorant Garamond', serif",
// 						size: 16
// 					}
// 				},
// 				title: {
// 					display: true,
// 					text: 'Production Amount in Million Tons (mt)',
// 					color: 'white',
// 					font: {
// 						family: "'Cormorant Garamond', serif",
// 						size: 18,
// 						lineHeight: 4
// 					}
// 				},
// 				min: 0
// 			},
// 			x: {
// 				ticks: {
// 					color: 'white',
// 					font: {
// 						family: "'Cormorant Garamond', serif",
// 						size: 16
// 					}
// 				}
// 			}
// 		}
// 	}

// });

var myChart = echarts.init(document.getElementById('pieChart'));

var option = {
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 0,
    max: 800,
    inRange: {
      colorLightness: [0.2, 1]
    }
  },
  series: [
    {
      name: 'Gas Type',
      type: 'pie',
      radius: '65%',
      center: ['50%', '50%'],
      data: [
        { value: 76, name: 'Carbon Dioxide (CO2)' },
        { value: 16, name: 'Methane' },
        { value: 6, name: 'Nitrous Oxide (N2O)ㄹ' },
        { value: 2, name: 'HFC, PFC, SF6' }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      label: {
        color: 'rgba(255, 255, 255, 1)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 1)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#bf3026',
        shadowBlur: 60,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
};

myChart.setOption(option);




var gaugeChart1 = echarts.init(document.getElementById('gaugeChart1'));
var gaugeChart2 = echarts.init(document.getElementById('gaugeChart2'));
var gaugeChart3 = echarts.init(document.getElementById('gaugeChart3'));


const gaugeData1 = [
  {
    value: 9.87,
    name: 'Poultry',
    title: {
      offsetCenter: ['0%', '50%']
    },
    detail: {
      offsetCenter: ['0%', '70%']
    }
  }

];

const gaugeData2 = [
	{
		value: 12.31,
	    name: 'Pork',
	    title: {
	      offsetCenter: ['0%', '50%']
	    },
	    detail: {
	      offsetCenter: ['0%', '70%']
	    }
	}
];

const gaugeData3 = [
	{
		value: 99.48,
	    name: 'Beef',
	    title: {
	      offsetCenter: ['0%', '50%']
	    },
	    detail: {
	      offsetCenter: ['0%', '70%']
	    }
	}
];

var option2 = {
	// colorBy: 'series',
	color: ['#f0ada8', '#fc746a', '#bf3026'],
  series: [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 15,
        itemStyle: {
          color: '#f0ada8'
        }
      },
      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      // label: {
      // 	color: 'rgb(255,255,255)'
      // },
      data: gaugeData1,
      title: {
        fontSize: 17,
        color: '#ffffff',
        fontFamily: "'DM Serif Display', serif"
      },
      splitLine: {
      	lineStyle: {
      		color: '#fff'
      	}
      },
      axisLabel: {
      	color: '#ffffff'
      },
      radius: '80%',
      axisLabel: {
      	fontSize: 13,
      	fontFamily: "'Cormorant Garamond', serif",
      	color: 'white'
      },
      startAngle: 135,
      endAngle: 45,
      detail: {
        width: 60,
        height: 20,
        fontSize: 17,
        color: '#fff',
        backgroundColor: 'auto',
        fontFamily: "'DM Serif Display', serif",
        borderRadius: 3,
        formatter: '{value}kg'
      }
    }
  ]
};

var option3 = {
	// colorBy: 'series',
	color: ['#fc746a', '#fc746a', '#bf3026'],
  series: [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 15,
        itemStyle: {
          color: '#fc746a'
        }
      },
      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      // label: {
      // 	color: 'rgb(255,255,255)'
      // },
      data: gaugeData2,
      title: {
        fontSize: 17,
        color: '#ffffff',
        fontFamily: "'DM Serif Display', serif"
      },
      splitLine: {
      	lineStyle: {
      		color: '#fff'
      	}
      },
      axisLabel: {
      	color: '#ffffff'
      },
      radius: '80%',
      axisLabel: {
      	fontSize: 13,
      	fontFamily: "'Cormorant Garamond', serif",
      	color: 'white'
      },
      startAngle: 135,
      endAngle: 45,
      detail: {
        width: 60,
        height: 20,
        fontSize: 17,
        color: '#fff',
        backgroundColor: 'auto',
        fontFamily: "'DM Serif Display', serif",
        borderRadius: 3,
        formatter: '{value}kg'
      }
    }
  ]
};

var option4 = {
	// colorBy: 'series',
	color: ['#bf3026', '#fc746a', '#bf3026'],
  series: [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 15,
        itemStyle: {
          color: '#bf3026'
        }
      },
      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      // label: {
      // 	color: 'rgb(255,255,255)'
      // },
      data: gaugeData3,
      title: {
        fontSize: 17,
        color: '#ffffff',
        fontFamily: "'DM Serif Display', serif"

      },
      splitLine: {
      	lineStyle: {
      		color: '#fff'
      	}
      },
      radius: '80%',
      axisLabel: {
      	fontSize: 13,
      	fontFamily: "'Cormorant Garamond', serif",
      	color: 'white'
      },
      startAngle: 135,
      endAngle: 45,
      detail: {
        width: 60,
        height: 20,
        fontSize: 17,
        color: '#fff',
        backgroundColor: 'auto',
        fontFamily: "'DM Serif Display', serif",
        borderRadius: 3,
        formatter: '{value}kg'
      }
    }
  ]
};

function poultryGauge() {
	option2 && gaugeChart1.setOption(option2);

}

function porkGauge() {
	option3 && gaugeChart2.setOption(option3);
	// console.log('clicked');

}

function beefGauge() {
	option4 && gaugeChart3.setOption(option4);

}


var barChart = echarts.init(document.getElementById('barChart'));

var barOption = {
	roundCap: true,
	textStyle: {
		fontFamily: "'DM Serif Display', serif"
	},
  dataset: {
    source: [
      ['score', 'amount', 'country'],
      [8.19, 14.900000, 'Germany'],
      [10.63, 19.350000, 'Russia'],
      [29.34, 53.350000, 'Brazil'],
      [46.83, 85.150000, 'U.S.A'],
      [88.16, 160.300000, 'China'],
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'in Million Cows',
  					nameTextStyle: {
  						color: '#fff',
  						fontSize: 15
  					},
  					nameGap: 30,
  					axisLabel: {
  						color: '#fff'
  					}
},
  yAxis: { type: 'category',
  				axisLabel:  {
  					fontFamily: "'Cormorant Garamond', serif",
  					color: '#fff',
  					fontSize: 16
  				}
},
  visualMap: {
  	show: false,
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    text: ['High Production', 'Low Production'],
    // Map the score column to color
    dimension: 0,
    textStyle: {
    	color: '#fff'
    },
    inRange: {
      color: ['#f0ada8', '#bf3026']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'country'
      }
    }
  ]
};

barOption && barChart.setOption(barOption);








