const echarts = require('echarts');
const { createCanvas } = require('canvas');
const fs = require('fs');

// In versions ealier than 5.3.0, you had to register the canvas factory with setCanvasCreator.
// Not necessary since 5.3.0

// You can use only the renderers you need
//echarts.use([SVGRenderer, CanvasRenderer]);

const canvas = createCanvas(800, 600);
// ECharts can use the Canvas instance created by node-canvas as a container directly
const chart = echarts.init(canvas,null,{renderer:'png'}); //svg DOES NOT WORK
const option=
{
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar"
      }
    ]
  }
// setOption as normal
chart.setOption(option);

// Output the PNG image via Response
//res.writeHead(200, {
//  'Content-Type': 'image/png'
//});
//res.write(renderChart().toBuffer('image/png'));
//res.end();



//fs.writeFileSync("file.svg", canvas.toBuffer('image/svg'));
fs.writeFileSync("file.png", canvas.toBuffer('image/png'));




