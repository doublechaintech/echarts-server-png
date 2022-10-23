
const { createCanvas } = require('canvas');

/*
ctx.beginPath();
ctx.moveTo(x, 0);
ctx.lineTo(x, canvas.height);
ctx.stroke();
*/




const ErrorImage=({req,res,text})=>{

    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext('2d');
    const x = canvas.width / 2;

    ctx.font = '30px serif';
    ctx.textAlign = 'center';
    ctx.fillText(text, x, 280);
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.lineTo(800, 500);
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.font = '10px serif';
    ctx.fillText("成都双链科技 图片服务@2022", 20, 550);

    res.writeHead(200, {'Content-Type': 'image/png'});
    res.write(canvas.toBuffer('image/png'));
    res.end();


}

//fs.writeFileSync("file.png", canvas.toBuffer('image/png'));


module.exports={ErrorImage}