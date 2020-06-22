import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from './../services/dynamic-script-loader.service';
import { AuthService } from "./../services/auth.service";
declare var $: any;
declare var Chart: any;
declare var ApexCharts: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',


  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	constructor(private dynamicScriptLoader: DynamicScriptLoaderService, private auth: AuthService) { }


	// area chart start
	public areaChartOptions = {
		responsive: true,
		tooltips: {
			mode: 'index',
			titleFontSize: 12,
			titleFontColor: '#000',
			bodyFontColor: '#000',
			backgroundColor: '#fff',
			titleFontFamily: 'Poppins',
			bodyFontFamily: 'Poppins',
			cornerRadius: 3,
			intersect: false,
		},
		legend: {
			display: false,
			labels: {
				usePointStyle: true,
				fontFamily: 'Poppins',
			},
		},
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					display: false,
					drawBorder: false
				},
				scaleLabel: {
					display: false,
					labelString: 'Month'
				},
				ticks: {
					fontFamily: "Poppins",
					fontColor: "#9aa0ac", // Font Color
				}

			}],
			yAxes: [{
				display: true,
				gridLines: {
					display: false,
					drawBorder: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Value',
					fontFamily: "Poppins"

				},
				ticks: {
					fontFamily: "Poppins",
					fontColor: "#9aa0ac", // Font Color
				}
			}]
		},
		title: {
			display: false,
			text: 'Normal Legend'
		}
	};
	areaChartData = [
		{
			label: "Foods",
			data: [0, 105, 190, 140, 270],
			borderWidth: 2,
			pointStyle: 'circle',
			pointRadius: 3,
			pointBorderColor: 'transparent',
		},
		{
			label: "Electronics",
			data: [0, 152, 80, 250, 190],
			borderWidth: 2,
			pointStyle: 'circle',
			pointRadius: 3,
			pointBorderColor: 'transparent',
		}
	];

	areaChartLabels = ['January', 'February', 'March', 'April', 'May'];
	// area chart end

	// barChart
	public barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true,
		scales: {
			xAxes: [{
				ticks: {
					fontFamily: "Poppins",
					fontColor: "#9aa0ac", // Font Color

				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true,
					fontFamily: "Poppins",
					fontColor: "#9aa0ac", // Font Color
				}
			}]
		}
	};
	public barChartLabels: string[] = ['2001', '2002', '2003', '2004', '2005', '2006', '2007'];
	public barChartType = 'bar';
	public barChartLegend = true;

	public barChartData: any[] = [
		{ data: [58, 60, 74, 78, 55, 64, 42], label: 'Series A' },
		{ data: [30, 45, 51, 22, 79, 35, 82], label: 'Series B' }
	];

	public barChartColors: Array<any> = [
		{

			backgroundColor: 'rgba(109, 144, 232, 0.8)',
			borderColor: 'rgba(109, 144, 232,1)',
			pointBackgroundColor: 'rgba(109, 144, 232,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(109, 144, 232,0.8)'
		},
		{

			backgroundColor: 'rgba(255, 140, 96, 0.8)',
			borderColor: 'rgba(255, 140, 96,1)',
			pointBackgroundColor: 'rgba(255, 140, 96,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255, 140, 96,0.8)'
		},

	];
	// end bar chart

	ngOnInit() {

    //this.auth.isValidUser();

		'use strict';
		$('#new-orders').slimscroll({
			height: '500px',
			size: '5px'
		});

		this.chart1();
		this.chart2();
		this.desktopCalendar();
	}

	// Chart 1
	private chart1() {
		var lastDate = 0;
		var data = []
		function getDayWiseTimeSeries(baseval: number, count: number, yrange: { min: any; max: any; }) {
			var i = 0;
			while (i < count) {
				var x = baseval;
				var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

				data.push({
					x, y
				});
				lastDate = baseval
				baseval += 86400000;
				i++;
			}
		}

		getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
			min: 10,
			max: 90
		})

		function getNewSeries(baseval: number, yrange: { min: any; max: any; }) {
			var newDate = baseval + 86400000;
			lastDate = newDate
			data.push({
				x: newDate,
				y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
			})
		}

		function resetData() {
			data = data.slice(data.length - 10, data.length);
		}

		var options = {
			chart: {
				height: 200,
				type: 'line',
				animations: {
					enabled: true,
					easing: 'linear',
					dynamicAnimation: {
						speed: 2000
					}
				},
				toolbar: {
					show: false
				},
				zoom: {
					enabled: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth'
			},
			series: [{
				data: data
			}],
			markers: {
				size: 0
			},
			xaxis: {
				type: 'datetime',
				range: 777600000,
				labels: {
					style: {
						colors: '#9aa0ac',
					}
				}
			},
			yaxis: {
				max: 100,
				labels: {
					style: {
						color: '#9aa0ac',
					}
				}
			},
			legend: {
				show: false
			},
		}

		var chart = new ApexCharts(
			document.querySelector("#chart1"),
			options
		);

		chart.render();

		var dataPointsLength = 10;

		window.setInterval(function () {
			getNewSeries(lastDate, {
				min: 10,
				max: 90
			})

			chart.updateSeries([{
				data: data
			}])
		}, 2000)

		// every 60 seconds, we reset the data
		window.setInterval(function () {
			resetData()
			chart.updateSeries([{
				data
			}], false, true)
		}, 60000)

	}

	// Chart 2
	private chart2() {
		var options = {
			chart: {
				height: 200,
				type: 'bar',
				toolbar: {
					show: false
				},


			},
			plotOptions: {
				bar: {
					columnWidth: '50%',
					endingShape: 'rounded'
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: 2
			},
			series: [{
				name: 'Servings',
				data: [44, 55, 41, 67, 22, 43],
			}],
			grid: {
				row: {
					colors: ['transparent', 'transparent']
				}
			},
			xaxis: {
				labels: {
					rotate: -45,
					style: {
						colors: '#9aa0ac',
					}
				},

				categories: ['jan', 'feb', 'march', 'april', 'may', 'june'
				],
			},
			yaxis: {
				title: {
					text: 'Servings',
				},
				labels: {
					style: {
						color: '#9aa0ac',
					}
				}

			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'light',
					type: "horizontal",
					shadeIntensity: 0.25,
					gradientToColors: undefined,
					inverseColors: true,
					opacityFrom: 0.85,
					opacityTo: 0.85,
					stops: [50, 0, 100]
				},
			},

		}

		var chart = new ApexCharts(
			document.querySelector("#chart2"),
			options
		);

		chart.render();
	}

	private desktopCalendar() {
		var startdate: any;
		var enddate: any;
		var today = new Date();
		var year = today.getFullYear();
		var month = today.getMonth();
		var day = today.getDate();
		$('#desktopCal').fullCalendar({
			defaultDate: today,
			defaultView: 'month',
			navLinks: true,
			selectable: true,
			selectHelper: true,
			editable: true,
			header: {
				right: 'prev,today,next'
			},
			events: [{
				title: "Holiday",
				start: new Date(year, month, day - 10),
				end: new Date(year, month, day - 8),
				backgroundColor: "#00bcd4"
			}, {
				title: "Priya Sarma",
				start: new Date(year, month, day - 3, 13, 30),
				end: new Date(year, month, day - 3, 14, 10),
				backgroundColor: "#fe9701"
			}, {
				title: "Meeting",
				start: new Date(year, month, day - 6, 17, 30),
				end: new Date(year, month, day - 6, 18, 10),
				backgroundColor: "#F3565D"
			}, {
				title: "Sarah Smith",
				start: new Date(year, month, day, 19, 10),
				end: new Date(year, month, day, 19, 30),
				backgroundColor: "#1bbc9b"
			}, {
				title: "Airi Satou",
				start: new Date(year, month, day + 1, 19, 10),
				end: new Date(year, month, day + 1, 19, 30),
				backgroundColor: "#DC35A9",
			}, {
				title: "Angelica Ramos",
				start: new Date(year, month, day + 3, 21, 10),
				end: new Date(year, month, day + 3, 21, 30),
				backgroundColor: "#fe9701",
			}, {
				title: "Palak Jani",
				start: new Date(year, month, day + 10, 11, 30),
				end: new Date(year, month, day + 10, 12, 10),
				backgroundColor: "#00bcd4"
			}, {
				title: "Priya Sarma",
				start: new Date(year, month, day + 5, 2, 30),
				end: new Date(year, month, day + 7, 3, 10),
				backgroundColor: "#9b59b6"
			},
			{
				title: "Jay Soni",
				start: new Date(year, month, day + 17, 2, 30),
				end: new Date(year, month, day + 19, 3, 10),
				backgroundColor: "#1bbc9b"
			}]

		});
	}
}

