var echarts = require('echarts');
const { createCanvas } = require('canvas');
const fs = require('fs');

// In versions ealier than 5.3.0, you had to register the canvas factory with setCanvasCreator.
// Not necessary since 5.3.0
echarts.setCanvasCreator(() => {
  return createCanvas();
});

const canvas = createCanvas(800, 600);
// ECharts can use the Canvas instance created by node-canvas as a container directly
const chart = echarts.init(canvas);
// setOption as normal

const value={"options":{"xAxis":{"data":["周一","周二","周三","周四","周五","周六","周日"],"type":"category","axisLabel":{"textStyle":{"color":"#fff"}},"axisLine":{"lineStyle":{"color":"#fff"}}},"legend":{"icon":"circle","textStyle":{"color":"#fff"}},"yAxis":{"type":"value","axisLabel":{"show":true,"textStyle":{"color":"#fff"}},"axisLine":{"lineStyle":{"color":"#fff"}}},"grid":{"bottom":"3%","right":"4%","top":"10%","left":"3%","containLabel":true},"series":[{"data":[332,193,511,249,207,87,163],"color":"#ffc107","type":"bar","name":"上周"},{"data":[422,193,429,270,0,0,0],"color":"#DD686E","type":"bar","name":"本周"}]},"title":"周产量"};


chart.setOption(


value.options


);

// Output the PNG image via Response
//res.writeHead(200, {
//  'Content-Type': 'image/png'
//});
//res.write(renderChart().toBuffer('image/png'));
//res.end();



//fs.writeFileSync("file.svg", canvas.toBuffer('image/svg'));
fs.writeFileSync("file.png", canvas.toBuffer('image/png'));




