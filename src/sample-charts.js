
const echarts = require('echarts');
const { createCanvas } = require('canvas');


const sampleData = {
  width: 800,
  height: 600,
  options: {
    "xAxis": {
      "data": ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      "type": "category", "axisLabel": { "textStyle": { "color": "#fff" } },
      "axisLine": { "lineStyle": { "color": "#fff" } }
    }, 
    "legend": { "icon": "circle", "axisLabel": { "color": "#fff" } }, 
    "yAxis": { "type": "value", "axisLabel": { "show": true, "textStyle": { "color": "#fff" } }, "axisLine": { "lineStyle": { "color": "#fff" } } }, "grid": { "bottom": "3%", "right": "4%", "top": "10%", "left": "3%", "containLabel": true }, "series": [{ "data": [332, 193, 511, 249, 207, 87, 163], "color": "#ffc107", "type": "bar", "name": "上周" }, { "data": [422, 193, 429, 270, 0, 0, 0], "color": "#DD686E", "type": "bar", "name": "本周" }]
  }
}


 const SampleChartServivce=({req,res})=>{


    const canvas = createCanvas(sampleData.width, sampleData.height);
    // ECharts can use the Canvas instance created by node-canvas as a container directly
    const chart = echarts.init(canvas);
    // setOption as normal
    chart.setOption(sampleData.options);
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.write(canvas.toBuffer('image/png'));
    res.end();
}
module.exports={SampleChartServivce}

