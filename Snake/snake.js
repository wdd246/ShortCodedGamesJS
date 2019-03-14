const SIZE = 500, GRID_S = SIZE / 50;
var box = document.getElementById('box'), context = box.getContext('2d'); box.height = box.width = SIZE;
var snake = [{x: SIZE / 2, y: SIZE / 2}] , snakeLen = 2, candy = null,end = false, dir = newdir = Math.floor(-2 + Math.random() * 5);
setInterval(function () {
        if (Math.abs(dir) !== Math.abs(newdir)) dir = newdir;
        var ax = Math.abs(dir) === 1 ? 'x' : 'y', newH = {x: snake[0].x, y: snake[0].y}, snakeObj = {};
        newH[ax] = ((dir < 0) ? newH[ax] -= GRID_S : newH[ax] += GRID_S)
        if (candy && candy.x === newH.x && candy.y === newH.y)snakeLen += 1;
        context.fillStyle = '#000'; context.fillRect(0, 0, SIZE, SIZE);
        if(!end)snake = snake.slice(0, snakeLen); !end && snake.unshift(newH);
        if (newH.x < 0 || newH.x >= SIZE || newH.y < 0 || newH.y >= SIZE)end = true;
        context.fillStyle = '#fff';
        for (var i = 0; i < snake.length; i++) {
            context.fillRect(snake[i].x, snake[i].y, GRID_S, GRID_S);if(i>0)snakeObj[[snake[i].x, snake[i].y].join(',')]=true;
        }
        if(snakeObj[[newH.x, newH.y].join(',')])end=true;
        while (!candy || snakeObj[[candy.x, candy.y].join(',')]) 
            candy = {x: Math.floor(Math.random() * SIZE / GRID_S) * GRID_S,y: Math.floor(Math.random() * SIZE / GRID_S) * GRID_S}
        context.fillStyle = '#f00';context.fillRect(candy.x, candy.y, GRID_S, GRID_S);}, 75);
window.onkeydown = function (e){newdir = {37: -1, 38: -2, 39: 1, 40: 2}[e.keyCode] || newdir;};