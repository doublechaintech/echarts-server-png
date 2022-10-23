
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
    ctx.fillText(text, x, 300);
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.write(canvas.toBuffer('image/png'));
    res.end();


}

//fs.writeFileSync("file.png", canvas.toBuffer('image/png'));


module.exports={ErrorImage}