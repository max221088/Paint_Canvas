// Vars section

const $area = document.querySelector('.area');
const $main = document.querySelector('.main');
const $color = document.querySelector('.color');
const $linecolor = document.querySelector('.linecolor');
const $figure = document.querySelector('.figure');
const $WidthLine = document.querySelector('.width_line');
const ctx = $area.getContext('2d');
let color = 'black';
let lineColor = 'black';
let figure = 'Line';
let WidtgLine = '1';
let begin = false;
let coords = [x = 0, y = 0];
let size = [w = 0, h = 0];
let ScreenHeight = window.screen.availHeight - 50;
let ScreenWidth = window.screen.availWidth;

// Init section

$area.width = ScreenWidth;
$area.height = ScreenHeight;

$color.addEventListener("input", function(e){
    color = e.target.value;
});

$linecolor.addEventListener("input", function(e){
    lineColor = e.target.value;
});

$figure.addEventListener("change", function(e){
    figure = e.target.value;
});

$WidthLine.addEventListener("change", function(e){
    WidtgLine = e.target.value;
});

// Action section

$area.addEventListener('mousedown', function(e){
    coords.x = e.pageX - this.offsetLeft;
    coords.y = e.pageY - this.offsetTop;
    ctx.fillStyle = color;
    if (figure === 'square') {
        begin = 'square';
    }
    if (figure === 'Line') {
        begin = 'Line';
        ctx.beginPath();
        ctx.lineWidth = WidtgLine;
        ctx.strokeStyle = lineColor;
        ctx.moveTo(coords.x, coords.y);
    }
    if (figure === 'circle') {
        begin = 'circle';
        ctx.beginPath();
        
    }
    
});

$area.addEventListener('mousemove', function(e){
    if ((figure === 'square') && (begin === 'square')) {
        size.w = e.pageX - coords.x - this.offsetLeft;
        size.h = e.pageY - coords.y - this.offsetTop;
        console.log(size);
        ctx.fillRect(coords.x, coords.y, size.w, size.h);
    }
    if ((figure === 'Line') && (begin === 'Line')) {
        ctx.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        ctx.stroke();
    }
    if ((figure === 'circle') && (begin === 'circle')) {
        size.w = e.pageX - coords.x - this.offsetLeft;
        size.h = e.pageY - coords.y - this.offsetTop;
        ctx.arc(coords.x, coords.y ,Math.abs(size.w) ,0,Math.PI*2,true);
        ctx.strokeStyle = lineColor;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = lineColor;
        ctx.stroke();
    }
});

$area.addEventListener('mouseup', function(e){
    if (begin) {
        begin = false;
        ctx.closePath();
    }
});

