import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import ReactEcharts from 'echarts-for-react'

const container = document.getElementById('container');

let tmpdata = '{"idcs":[{"name":"TC","description":"土城机房 北京市朝阳区裕民中路乙3号A座  7层","net_area":"beijing","region":"华北","available":false,"key":"TC","type":"idc"},{"name":"JX","description":"酒仙桥机房 北京市朝阳区酒仙桥路14号兆维工业园D区1楼2门三层北京电信数据中心3层","net_area":"beijing","region":"华北","available":false,"key":"JX","type":"idc"},{"name":"DB","description":"数字北京 北京市朝阳区北辰西路12号数字北京大厦C座6层","net_area":"beijing","region":"华北","available":false,"key":"DB","type":"idc"},{"name":"BB","description":"百度大厦 北京市海淀区上地十街10号百度大厦北门","net_area":"beijing","region":"华北","available":false,"key":"BB","type":"idc"},{"name":"YF","description":"永丰机房 北京市海淀区永丰路北清路交口北400米，丰秀东路中国电信大楼","net_area":"beijing","region":"华北","available":false,"key":"YF","type":"idc"},{"name":"DBL","description":"北京移动大白楼 北京市大兴区团河路8号北京移动大白楼机房","net_area":"beijing","region":"华北","available":false,"key":"DBL","type":"idc"},{"name":"M1","description":"百度酒仙桥自建机房 北京市朝阳区酒仙桥北路九号","net_area":"beijing","region":"华北","available":false,"key":"M1","type":"idc"},{"name":"CQ01","description":"北京次渠电信机房101、102、103、204 北京市通州区光电一体化基地星光二街甲2号","net_area":"beijing","region":"华北","available":false,"key":"CQ01","type":"idc"},{"name":"CQ02","description":"北京市通州区光电一体化基地兴光二街甲2号2号楼，联通次渠机房","net_area":"beijing","region":"华北","available":false,"key":"CQ02","type":"idc"},{"name":"ST01","description":"运营机房_华北北京_移动_三台机房:北京市朝阳区北京无线短波通信局7B楼2层","net_area":"beijing","region":"华北","available":false,"key":"ST01","type":"idc"},{"name":"QD01","description":"联通_山东_青岛（青岛市崂山区株洲路168号）","net_area":"beijing","region":"华北","available":false,"key":"QD01","type":"idc"},{"name":"NMG01","description":"中国电信内蒙古云计算中心，内蒙古呼和浩特市和林格尔县金盛路33公里处","net_area":"beijing","region":"华北","available":false,"key":"NMG01","type":"idc"},{"name":"CP01","description":"电信昌平未来科技城","net_area":"beijing","region":"华北","available":false,"key":"CP01","type":"idc"},{"name":"YQ01","description":"山西省阳泉市开发区义白路百度云计算中心","net_area":"beijing","region":"华北","available":true,"key":"YQ01","type":"idc"},{"name":"NMG02","description":"呼和浩特市新城区鸿盛工业园区联通西北基地","net_area":"beijing","region":"华北","available":false,"key":"NMG02","type":"idc"},{"name":"CSDT01","description":"山西省大同市南郊区福盛园小区内","net_area":"beijing","region":"华北","available":false,"key":"CSDT01","type":"idc"},{"name":"CSGBD01","description":"河北省高碑店市团结西路高碑店电视台","net_area":"beijing","region":"华北","available":false,"key":"CSGBD01","type":"idc"},{"name":"CSBD01","description":"河北省保定市","net_area":"beijing","region":"华北","available":false,"key":"CSBD01","type":"idc"},{"name":"CSDZ01","description":"河北省定州市","net_area":"beijing","region":"华北","available":false,"key":"CSDZ01","type":"idc"},{"name":"CSSJZ01","description":"河北省石家庄市","net_area":"beijing","region":"华北","available":false,"key":"CSSJZ01","type":"idc"},{"name":"CSSY01","description":"山西省寿阳县新阳上城2号楼2单元101","net_area":"beijing","region":"华北","available":false,"key":"CSSY01","type":"idc"},{"name":"CSTY01","description":"山西省太原市旭然园小区内15-2-102","net_area":"beijing","region":"华北","available":false,"key":"CSTY01","type":"idc"},{"name":"CSPD01","description":"山西省平定县","net_area":"beijing","region":"华北","available":false,"key":"CSPD01","type":"idc"},{"name":"CSXZ01","description":"山西省忻州市G55高速忻州高速旁村子","net_area":"beijing","region":"华北","available":false,"key":"CSXZ01","type":"idc"},{"name":"CSYY01","description":"河北省阳原县老皮草城内25楼19号门脸房","net_area":"beijing","region":"华北","available":false,"key":"CSYY01","type":"idc"},{"name":"CSSJ01","description":"河北省宣化县深井镇深井收费站出口与112国道之间","net_area":"beijing","region":"华北","available":false,"key":"CSSJ01","type":"idc"},{"name":"CSHL01","description":"河北省怀来县百合水晶城4号楼","net_area":"beijing","region":"华北","available":false,"key":"CSHL01","type":"idc"},{"name":"CSCP01","description":"北京市昌平区八达岭高速出京百葛桥服务区内","net_area":"beijing","region":"华北","available":false,"key":"CSCP01","type":"idc"},{"name":"CSFZ01","description":"内蒙古自治区丰镇市饮马河大桥路西200米处门脸房","net_area":"beijing","region":"华北","available":false,"key":"CSFZ01","type":"idc"},{"name":"CSJN01","description":"内蒙古自治区集宁市北华彩印厂旁边民宅","net_area":"beijing","region":"华北","available":false,"key":"CSJN01","type":"idc"},{"name":"CSZZ01","description":"内蒙古自治区卓资县公路局西侧院墙外自建民房","net_area":"beijing","region":"华北","available":false,"key":"CSZZ01","type":"idc"},{"name":"CSXGW01","description":"山西省山阴县新广武收费站","net_area":"beijing","region":"华北","available":false,"key":"CSXGW01","type":"idc"},{"name":"BJKJY","description":"海淀区西北旺东路10号院百度科技园1号楼","net_area":"beijing","region":"华北","available":false,"key":"BJKJY","type":"idc"},{"name":"BJYZ","description":"北京市南六环太和桥南","net_area":"beijing","region":"华北","available":false,"key":"BJYZ","type":"idc"}],"superCores":[{"country":"China","updated":1481759826771,"type":"super_core","name":"M1_S","district":"HB"},{"country":"China","updated":1481759826799,"type":"super_core","name":"BB_S","district":"HB"}],"idcFlows":[{"name":"CP01","total":460000000000,"timestamp":1481878560,"out":225385336184,"detail":[{"total":240000000000,"out":114056654312,"in":120860184164,"type":"super_core","name":"M1_S"},{"total":220000000000,"out":111328681872,"in":118694545580,"type":"super_core","name":"BB_S"}],"in":239554729744},{"name":"NMG02","total":1600000000000,"timestamp":1481878560,"out":29494710680,"detail":[{"total":400000000000,"out":12351716056,"in":1937391848,"type":"idc","name":"NMG01"},{"total":400000000000,"out":8137761280,"in":17735791520,"type":"super_core","name":"M1_S"},{"total":400000000000,"out":1621387120,"in":3179237496,"type":"idc","name":"YQ01"},{"total":400000000000,"out":7383846224,"in":11173125200,"type":"super_core","name":"BB_S"}],"in":34025546064},{"name":"BB","total":40000000000,"timestamp":1481878560,"out":2229703916,"detail":[{"total":40000000000,"out":2229703916,"in":3523094072,"type":"super_core","name":"BB_S"}],"in":3523094072},{"name":"BJKJY","total":40000000000,"timestamp":1481878560,"out":4343136,"detail":[{"total":40000000000,"out":4343136,"in":2353752,"type":"super_core","name":"BB_S"}],"in":2353752},{"name":"YF","total":630000000000,"timestamp":1481878560,"out":297788537540,"detail":[{"total":320000000000,"out":150355082172,"in":150642003612,"type":"super_core","name":"M1_S"},{"total":310000000000,"out":147433455368,"in":151813694688,"type":"super_core","name":"BB_S"}],"in":302455698300},{"name":"ST01","total":800000000000,"timestamp":1481878560,"out":446633576336,"detail":[{"total":400000000000,"out":228279664964,"in":233274517144,"type":"super_core","name":"M1_S"},{"total":400000000000,"out":218353911372,"in":228077061036,"type":"super_core","name":"BB_S"}],"in":461351578180},{"name":"CQ01","total":560000000000,"timestamp":1481878560,"out":445890916352,"detail":[{"total":280000000000,"out":226875630296,"in":145611308760,"type":"super_core","name":"M1_S"},{"total":280000000000,"out":219015286056,"in":139810597232,"type":"super_core","name":"BB_S"}],"in":285421905992},{"name":"M1","total":960000000000,"timestamp":1481878560,"out":510731686216,"detail":[{"total":480000000000,"out":252276685032,"in":244626742988,"type":"super_core","name":"M1_S"},{"total":480000000000,"out":258455001184,"in":237339673648,"type":"super_core","name":"BB_S"}],"in":481966416636},{"name":"BJYZ","total":1600000000000,"timestamp":1481878560,"out":563413376080,"detail":[{"total":800000000000,"out":280037080104,"in":354492977440,"type":"super_core","name":"M1_S"},{"total":800000000000,"out":283376295976,"in":350581104616,"type":"super_core","name":"BB_S"}],"in":705074082056},{"name":"NMG01","total":1200000000000,"timestamp":1481878560,"out":192702777168,"detail":[{"total":400000000000,"out":1884092672,"in":11748813904,"type":"idc","name":"NMG02"},{"total":200000000000,"out":71626327608,"in":53338459760,"type":"super_core","name":"M1_S"},{"total":400000000000,"out":50247294856,"in":85822155328,"type":"idc","name":"YQ01"},{"total":200000000000,"out":68945062032,"in":55163669744,"type":"super_core","name":"BB_S"}],"in":206073098736},{"name":"YQ01","total":2400000000000,"timestamp":1481878560,"out":811993296732,"detail":[{"total":800000000000,"out":362741185252,"in":412775072136,"type":"super_core","name":"M1_S"},{"total":400000000000,"out":3177100328,"in":1528648504,"type":"idc","name":"NMG02"},{"total":400000000000,"out":82968944408,"in":49557345392,"type":"idc","name":"NMG01"},{"total":800000000000,"out":363106066744,"in":417554712408,"type":"super_core","name":"BB_S"}],"in":881415778440},{"name":"TC","total":1280000000000,"timestamp":1481878560,"out":392574018904,"detail":[{"total":640000000000,"out":195682115044,"in":176936547040,"type":"super_core","name":"M1_S"},{"total":640000000000,"out":196891903860,"in":175722141600,"type":"super_core","name":"BB_S"}],"in":352658688640},{"name":"CQ02","total":960000000000,"timestamp":1481878560,"out":483838478144,"detail":[{"total":480000000000,"out":242625054232,"in":218692137136,"type":"super_core","name":"M1_S"},{"total":480000000000,"out":241213423912,"in":218864637688,"type":"super_core","name":"BB_S"}],"in":437556774824},{"name":"DBL","total":140000000000,"timestamp":1481878560,"out":58461833112,"detail":[{"total":80000000000,"out":33392240368,"in":34615346056,"type":"super_core","name":"M1_S"},{"total":60000000000,"out":25069592744,"in":24768238480,"type":"super_core","name":"BB_S"}],"in":59383584536}]}';


const options = {
	title: {
		text: 'UMP数据中心',
		left: 'center'
	},
	backgroundColor: '#fff',
	// tooltip : {
	// 	trigger: 'item',
	// 	formatter: "{a} <br/>{b}: {c} ({d}%)"
	// },
	animationDurationUpdate: 1500,
	animationEasingUpdate: 'quinticInOut',
	grid: {
		show: false,
	},
	tooltip: {
		show: true,
		trigger: 'item',
		position: 'inside',
		confine: true,
		formatter(params) {
			switch (params.seriesType) {
				case 'lines':
					return `direction: ${params.data.direction} <br/>flow: ${params.data.flow}`
					break;
				case 'scatter':
					return `name: ${params.data.name} <br/>position: ${params.data.description}`
					break;
				default:
					return null
			}
		}
	},
	xAxis: {
		type: 'value',
		scale: false,
		axisLine: {
			show: false
		},
		axisLabel: {
			show: false
		},
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		}
	},
	yAxis: {
		type: 'value',
		scale: false,
		axisLine: {
			show: false
		},
		axisLabel: {
			show: false
		},
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		}
	},
	series: []
};

class MyChart extends Component {
	constructor (props) {
		super(props)
	}
	componentWillMount () {
		this.getData()
	}
	componentWillUnmount () {
		clearInterval(this.interval)
	}
	ready(echart) {
		let self = this;
		let tmp = {};
		echart.setOption({
			series: [
				{
					type: 'scatter',
					coordinateSystem: 'cartesian2d',
					symbol: 'circle',
					symbolSize: 30,
					zlevel: 3,
					label: {
						normal: {
							show: true,
							position: 'top',
							formatter(param) {
								console.log(param.data.name)
								return param.data.name
							}
						}
					},
					data: Object.keys(self.idcsAll).map((el) => {
						let idc = self.idcsAll[el];
						return {
							value: [idc.position[0], idc.position[1]],
							description: idc.description,
							name: idc.name,
							type: idc.type,
							size: idc.value
						}
					})
				},
				{
					type: 'lines',
					coordinateSystem: 'cartesian2d',
					zlevel: 2,
					effect: {
						show: true,
						period: 3,
						symbol: 'rect',
						trailLength: .1,
						color: '#000000',
						symbolSize: [1.5, 10]
					},
					label: {
						normal: {
							show: false
						}
					},
					lineStyle: {
						normal: {
							color: '#b1db6b',
							width: 2,
							curveness: 0.4
						},
						emphasis: {
							color: 'red',
							width: 4,
							curveness: 0.4
						}
					},
					large: true,
					data: function(){
						let result = [];
						Object.keys(self.idcsAll).forEach((el) => {
							let idcsAll = self.idcsAll;
							let idc = idcsAll[el];
							let flows = idc.flows;
							if(!flows) return;
							flows.map((child, index, arr) => {
								let source = idc.position;
								let destination = idcsAll[child.target].position;
								let direction = child.direction;
								let flow = child.flowout;
								result.push({
									coords: [source, destination],
									direction,
									flow
								});
								if(child.flowin !== null) {
									let source = idcsAll[child.target].position;
									let destination = idc.position;
									let direction = child.target + '=>' + idc.name;
									let flow = child.flowin;
									result.push({
										coords: [source, destination],
										direction,
										flow
									})
								}
							})
						});
						tmp.lines = result;
						return result
					}()
				},
				// {
				// 	type: 'lines',
				// 	coordinateSystem: 'cartesian2d',
				// 	zlevel: 1,
				// 	label: {
				// 		normal: {
				// 			show: false
				// 		}
				// 	},
				// 	lineStyle: {
				// 		normal: {
				// 			color: '#b1db6b',
				// 			width: 2,
				// 			curveness: 0.4
				// 		},
				// 		emphasis: {
				// 			color: 'red',
				// 			width: 4,
				// 			curveness: 0.4
				// 		}
				// 	},
				// 	data: tmp.lines
				// }
			]
		})
	}
	polarToCartesian(radius, angle) {
		let x = radius*Math.cos(angle);
		let y = radius*Math.sin(angle);
		return [Math.round(x), Math.round(y)]
	}
	getData() {
		// this.interval = setInterval($.get('http://cp01-sys-idp-dev04.epc.baidu.com:8888/api/visual/getAreaIDC?key=%E5%8D%8E%E5%8C%97', (data) => {
		// 	this.handleData(data)
		// }), 10000)
		this.handleData(tmpdata)
	}
	handleData(data){
		const { Mx, My } = this.props;
		this.idcsAll = {};
		data = JSON.parse(data);
		let hyper = data.superCores.map((el) => {
			return {
				name: el.name
			}
		});
		let idcs = data.idcs;
		let idcFlows = data.idcFlows;
		hyper.forEach((el, index, arr) => {
			let value = 100;
			let type = 'super_core';
			let name = el.name;
			let position = [+Mx + (index - (arr.length - 1) / 2) * 100, +My];
			let description =  name;
			this.idcsAll[name] = {
				name,
				value,
				position,
				type,
				description
			}
		});
		idcs.forEach((el, index, arr) => {
			let name = el.name;
			let description = el.description;
			let key = el.key;
			let type = 'idc';
			let position = this.polarToCartesian(...[400, 2 / arr.length * index * Math.PI]);
			this.idcsAll[key] = {
				name,
				description,
				position,
				type
			}
		});
		idcFlows.forEach((el, index, arr) => {
			let name = el.name;
			let value = el.total/20000000000;
			let flows = el.detail.map((child) => {
				let target = child.name;
				let direction = el.name + '=>' + target;
				let flowout = child.out;
				let flowin = child.type == 'super_core' ? child.in : null;
				return {
					target,
					direction,
					flowout,
					flowin
				}
			});
			Object.assign(this.idcsAll[name], {
				value,
				flows
			})
		})
	}
	render() {
		return (
			<ReactEcharts option={this.props.options} onChartReady={this.ready.bind(this)} style={{height: '100%', width: '100%'}}/>
		)
	}
}

ReactDOM.render(<MyChart options={options} Mx="0" My="0" />, container);