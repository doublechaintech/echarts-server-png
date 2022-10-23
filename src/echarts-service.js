
const echarts = require('echarts');
const { createCanvas } = require('canvas');


 const EChartsServivce=({req,res,sampleData})=>{
    

    const canvas = createCanvas(sampleData.width, sampleData.height);
    // ECharts can use the Canvas instance created by node-canvas as a container directly
    const chart = echarts.init(canvas);
    // setOption as normal
    chart.setOption(sampleData.options);
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.write(canvas.toBuffer('image/png'));
    res.end();
}


module.exports={EChartsServivce}

