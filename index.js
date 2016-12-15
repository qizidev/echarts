import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from 'rc-echarts'

const container = document.getElementById('container');

const tmpData = '{"idcs":[{"name":"TC","description":"土城机房 北京市朝阳区裕民中路乙3号A座  7层","net_area":"beijing","region":"华北","available":false,"key":"TC","type":"idc"},{"name":"JX","description":"酒仙桥机房 北京市朝阳区酒仙桥路14号兆维工业园D区1楼2门三层北京电信数据中心3层","net_area":"beijing","region":"华北","available":false,"key":"JX","type":"idc"},{"name":"DB","description":"数字北京 北京市朝阳区北辰西路12号数字北京大厦C座6层","net_area":"beijing","region":"华北","available":false,"key":"DB","type":"idc"},{"name":"BB","description":"百度大厦 北京市海淀区上地十街10号百度大厦北门","net_area":"beijing","region":"华北","available":false,"key":"BB","type":"idc"},{"name":"YF","description":"永丰机房 北京市海淀区永丰路北清路交口北400米，丰秀东路中国电信大楼","net_area":"beijing","region":"华北","available":false,"key":"YF","type":"idc"},{"name":"DBL","description":"北京移动大白楼 北京市大兴区团河路8号北京移动大白楼机房","net_area":"beijing","region":"华北","available":false,"key":"DBL","type":"idc"},{"name":"M1","description":"百度酒仙桥自建机房 北京市朝阳区酒仙桥北路九号","net_area":"beijing","region":"华北","available":false,"key":"M1","type":"idc"},{"name":"CQ01","description":"北京次渠电信机房101、102、103、204 北京市通州区光电一体化基地星光二街甲2号","net_area":"beijing","region":"华北","available":false,"key":"CQ01","type":"idc"},{"name":"CQ02","description":"北京市通州区光电一体化基地兴光二街甲2号2号楼，联通次渠机房","net_area":"beijing","region":"华北","available":false,"key":"CQ02","type":"idc"},{"name":"ST01","description":"运营机房_华北北京_移动_三台机房:北京市朝阳区北京无线短波通信局7B楼2层","net_area":"beijing","region":"华北","available":false,"key":"ST01","type":"idc"},{"name":"QD01","description":"联通_山东_青岛（青岛市崂山区株洲路168号）","net_area":"beijing","region":"华北","available":false,"key":"QD01","type":"idc"},{"name":"NMG01","description":"中国电信内蒙古云计算中心，内蒙古呼和浩特市和林格尔县金盛路33公里处","net_area":"beijing","region":"华北","available":false,"key":"NMG01","type":"idc"},{"name":"CP01","description":"电信昌平未来科技城","net_area":"beijing","region":"华北","available":false,"key":"CP01","type":"idc"},{"name":"YQ01","description":"山西省阳泉市开发区义白路百度云计算中心","net_area":"beijing","region":"华北","available":true,"key":"YQ01","type":"idc"},{"name":"NMG02","description":"呼和浩特市新城区鸿盛工业园区联通西北基地","net_area":"beijing","region":"华北","available":false,"key":"NMG02","type":"idc"},{"name":"CSDT01","description":"山西省大同市南郊区福盛园小区内","net_area":"beijing","region":"华北","available":false,"key":"CSDT01","type":"idc"},{"name":"CSGBD01","description":"河北省高碑店市团结西路高碑店电视台","net_area":"beijing","region":"华北","available":false,"key":"CSGBD01","type":"idc"},{"name":"CSBD01","description":"河北省保定市","net_area":"beijing","region":"华北","available":false,"key":"CSBD01","type":"idc"},{"name":"CSDZ01","description":"河北省定州市","net_area":"beijing","region":"华北","available":false,"key":"CSDZ01","type":"idc"},{"name":"CSSJZ01","description":"河北省石家庄市","net_area":"beijing","region":"华北","available":false,"key":"CSSJZ01","type":"idc"},{"name":"CSSY01","description":"山西省寿阳县新阳上城2号楼2单元101","net_area":"beijing","region":"华北","available":false,"key":"CSSY01","type":"idc"},{"name":"CSTY01","description":"山西省太原市旭然园小区内15-2-102","net_area":"beijing","region":"华北","available":false,"key":"CSTY01","type":"idc"},{"name":"CSPD01","description":"山西省平定县","net_area":"beijing","region":"华北","available":false,"key":"CSPD01","type":"idc"},{"name":"CSXZ01","description":"山西省忻州市G55高速忻州高速旁村子","net_area":"beijing","region":"华北","available":false,"key":"CSXZ01","type":"idc"},{"name":"CSYY01","description":"河北省阳原县老皮草城内25楼19号门脸房","net_area":"beijing","region":"华北","available":false,"key":"CSYY01","type":"idc"},{"name":"CSSJ01","description":"河北省宣化县深井镇深井收费站出口与112国道之间","net_area":"beijing","region":"华北","available":false,"key":"CSSJ01","type":"idc"},{"name":"CSHL01","description":"河北省怀来县百合水晶城4号楼","net_area":"beijing","region":"华北","available":false,"key":"CSHL01","type":"idc"},{"name":"CSCP01","description":"北京市昌平区八达岭高速出京百葛桥服务区内","net_area":"beijing","region":"华北","available":false,"key":"CSCP01","type":"idc"},{"name":"CSFZ01","description":"内蒙古自治区丰镇市饮马河大桥路西200米处门脸房","net_area":"beijing","region":"华北","available":false,"key":"CSFZ01","type":"idc"},{"name":"CSJN01","description":"内蒙古自治区集宁市北华彩印厂旁边民宅","net_area":"beijing","region":"华北","available":false,"key":"CSJN01","type":"idc"},{"name":"CSZZ01","description":"内蒙古自治区卓资县公路局西侧院墙外自建民房","net_area":"beijing","region":"华北","available":false,"key":"CSZZ01","type":"idc"},{"name":"CSXGW01","description":"山西省山阴县新广武收费站","net_area":"beijing","region":"华北","available":false,"key":"CSXGW01","type":"idc"},{"name":"BJKJY","description":"海淀区西北旺东路10号院百度科技园1号楼","net_area":"beijing","region":"华北","available":false,"key":"BJKJY","type":"idc"},{"name":"BJYZ","description":"北京市南六环太和桥南","net_area":"beijing","region":"华北","available":false,"key":"BJYZ","type":"idc"}],"idcFlows":[{"name":"CP01","total":480000000000,"timestamp":1481786700,"out":231311143576,"detail":[{"total":240000000000,"out":115321964260,"in":126205984756,"name":"M1","target":"hyper"},{"total":240000000000,"out":115989179316,"in":127858380124,"name":"BB","target":"hyper"}],"in":254064364880},{"name":"NMG02","total":1600000000000,"timestamp":1481786700,"out":35848878216,"detail":[{"total":400000000000,"out":13697986472,"in":2279244716,"name":"NMG01"},{"total":400000000000,"out":10262831016,"in":16003737912,"name":"M1","target":"hyper"},{"total":400000000000,"out":3765306112,"in":3893865056,"name":"YQ01"},{"total":400000000000,"out":8122754616,"in":15857313288,"name":"BB","target":"hyper"}],"in":38034160972},{"name":"BB","total":40000000000,"timestamp":1481786700,"out":3000826200,"detail":[{"total":40000000000,"out":3000826200,"in":3514583472,"name":"BB","target":"hyper"}],"in":3514583472},{"name":"BJKJY","total":40000000000,"timestamp":1481786700,"out":7612864,"detail":[{"total":40000000000,"out":7612864,"in":2669848,"name":"BB","target":"hyper"}],"in":2669848},{"name":"YF","total":630000000000,"timestamp":1481786700,"out":296642977896,"detail":[{"total":320000000000,"out":150572564216,"in":154056377552,"name":"M1","target":"hyper"},{"total":310000000000,"out":146070413680,"in":153050238432,"name":"BB","target":"hyper"}],"in":307106615984},{"name":"ST01","total":800000000000,"timestamp":1481786700,"out":470548100608,"detail":[{"total":400000000000,"out":241323626328,"in":253465817504,"name":"M1","target":"hyper"},{"total":400000000000,"out":229224474280,"in":248728375592,"name":"BB","target":"hyper"}],"in":502194193096},{"name":"CQ01","total":550000000000,"timestamp":1481786700,"out":423644644516,"detail":[{"total":280000000000,"out":214708582984,"in":145957290648,"name":"M1","target":"hyper"},{"total":270000000000,"out":208936061532,"in":140271342656,"name":"BB","target":"hyper"}],"in":286228633304},{"name":"M1","total":930000000000,"timestamp":1481786700,"out":523463830940,"detail":[{"total":480000000000,"out":265767209556,"in":253088232324,"name":"M1","target":"hyper"},{"total":450000000000,"out":257696621384,"in":228150194600,"name":"BB","target":"hyper"}],"in":481238426924},{"name":"BJYZ","total":800000000000,"timestamp":1481786700,"out":270222300464,"detail":[{"total":400000000000,"out":134017866456,"in":173708386112,"name":"M1","target":"hyper"},{"total":400000000000,"out":136204434008,"in":173841045304,"name":"BB","target":"hyper"}],"in":347549431416},{"name":"NMG01","total":1200000000000,"timestamp":1481786700,"out":138363140668,"detail":[{"total":400000000000,"out":2134815448,"in":13407581760,"name":"NMG02"},{"total":200000000000,"out":61789279812,"in":46033933652,"name":"M1","target":"hyper"},{"total":400000000000,"out":13522554232,"in":76269914976,"name":"YQ01"},{"total":200000000000,"out":60916491176,"in":49833474620,"name":"BB","target":"hyper"}],"in":185544905008},{"name":"YQ01","total":2400000000000,"timestamp":1481786700,"out":658372114248,"detail":[{"total":800000000000,"out":289742165792,"in":318129765928,"name":"M1","target":"hyper"},{"total":400000000000,"out":4276383592,"in":4369469212,"name":"NMG02"},{"total":400000000000,"out":72505564720,"in":12605286008,"name":"NMG01"},{"total":800000000000,"out":291848000144,"in":326029956592,"name":"BB","target":"hyper"}],"in":661134477740},{"name":"TC","total":1280000000000,"timestamp":1481786700,"out":397580411812,"detail":[{"total":640000000000,"out":199294747500,"in":169893676072,"name":"M1","target":"hyper"},{"total":640000000000,"out":198285664312,"in":168499297744,"name":"BB","target":"hyper"}],"in":338392973816},{"name":"CQ02","total":960000000000,"timestamp":1481786700,"out":480281587672,"detail":[{"total":480000000000,"out":240311287840,"in":208053131856,"name":"M1","target":"hyper"},{"total":480000000000,"out":239970299832,"in":206043133616,"name":"BB","target":"hyper"}],"in":414096265472},{"name":"DBL","total":140000000000,"timestamp":1481786700,"out":58140507064,"detail":[{"total":80000000000,"out":32818309600,"in":35469884512,"name":"M1","target":"hyper"},{"total":60000000000,"out":25322197464,"in":25963185760,"name":"BB","target":"hyper"}],"in":61433070272}],"hyper":[{"name":"BB"},{"name":"M1"}]}';

const options = {
	title: {
		text: 'UMP数据中心',
		left: 'center'
	},
	tooltip: {},
	animationDurationUpdate: 1500,
	animationEasingUpdate: 'quinticInOut',
	series: []
};

class MyChart extends Component {
	constructor (props) {
		super(props)
	}
	componentWillMount () {
		this.getData()
	}
	ready(echart) {
		var self = this;
		echart.setOption({
			series: [
				{
					type: 'effectScatter',
					coordinateSystem: 'cartesian2d',
					symbol: 'circle',
					zlevel: 1,
					label: {
						emphasis: {
							show: true,
							position: 'left',
							formatter(param) {
								return param.description
							},
							data: Object.keys(self.idcsAll).map((el) => {
								let idc = self.idcsAll[el];
								return {
									x: idc.position[0],
									y: idc.position[1],
									value: idc.value,
									description: idc.description,
									name: idc.name,
									type: idc.type
								}
							})
						}
					}
				},
				{
					type: 'lines',
					coordinateSystem: 'cartesian2d',
					zlevel: 2,
					label: {
						emphasis: {
							show: true,
							position: 'left',
							formatter(param) {
								return param.direction
							},
							effect: {
								show: true,
								period: 4,
								trailLength: 4
							},
							data: function(){
								let arr = [];
								Object.keys(self.idcsAll).forEach((el) => {
									let idcsAll = self.idcsAll;
									let idc = idcsAll[el];
									let flows = idc.flows;
									if(!flows) return;
									flows.map((child, index, arr) => {
										let source = idc.position;
										let destination = idcsAll[child.target].position;
										let direction = child.direction;
										let flow = child.out;
										arr.push({
											coords: [source, destination],
											direction,
											flow
										});
										if(child.in !== null) {
											let source = idcsAll['hyper' + '-' + child.target].position;
											let destination = idc.position;
											let direction = child.name + '=>' + idc.name;
											let flow = child.in;
											arr.push({
												coords: [source, destination],
												direction,
												flow
											})
										}
									})
								})
							}()
						}
					}
				}
			]
		})
	}
	polarToCartesian(radius, angle) {
		return [radius*Math.cos(angle) + this.props.width, radius*Math.sin(angle) + this.props.height]
	}
	getData() {
		// $.get('http://cp01-sys-idp-dev04.epc.baidu.com:8888/api/visual/getAreaIDC?key=%E5%8D%8E%E5%8C%97', (data) => {
		// 	this.handleData(data)
		// })
		this.handleData(tmpData)
	}
	handleData(data){
		const { width, height } = this.props;
		this.idcsAll = {};
		data = JSON.parse(data);
		let hyper = data.hyper.map((el) => {
			return {
				name: el.name
			}
		});
		let idcs = data.idcs;
		let idcFlows = data.idcFlows;
		hyper.forEach((el, index, arr) => {
			let value = 300;
			let type = 'hyper';
			let name = 'hyper' + '-' + el.name;
			let position = [width/2 + (index - (arr.length - 1) / 2) * 100, height/2];
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
			let position = this.polarToCartesian(...[400, 180 / arr.length * index * Math.PI]);
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
				return {
					target: child.name,
					direction: el.name + '=>' + child.name,
					out: child.out,
					in: child.target == 'hyper' ? child.in : null
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
			<Chart options={this.props.options} onReady={this.ready.bind(this)} />
		)
	}
}

ReactDOM.render(<MyChart options={options} width="600" height="600" />, container);