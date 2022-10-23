const { createCanvas } = require('canvas');
const canvas = createCanvas(800, 600);
const fs = require('fs');



const ctx = canvas.getContext('2d');
const x = canvas.width / 2;
/*
ctx.beginPath();
ctx.moveTo(x, 0);
ctx.lineTo(x, canvas.height);
ctx.stroke();
*/

ctx.font = '30px serif';
ctx.textAlign = 'center';
ctx.fillText('发生错误', x, 300);

fs.writeFileSync("file.png", canvas.toBuffer('image/png'));
