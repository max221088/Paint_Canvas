let $area = document.querySelector('.area');
const $main = document.querySelector('.main');
let $color = document.querySelector('.color');
let $figure = document.querySelector('.figure');
let ctx = $area.getContext('2d');
let x = null;
let y = null;
let height = null;
let width = null;

$area.addEventListener('mousedown', function(event){
    x = event.pageX;
    y = event.pageY;
    console.log(x);
    console.log(y);
    let xx = $area.getBoundingClientRect();
    console.log(xx);
    console.log(xx.top);
    ctx.fillStyle = $color.setAttribute("type", "color");
    ctx.fillRect(x, y, 100, 100);
});


