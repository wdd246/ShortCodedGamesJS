var canvas=document.getElementById("canvas"), ctx=canvas.getContext("2d");
var x=Math.floor(canvas.width/10), y=canvas.height/10, go, tmp;
setInterval(function(){
    for(var xv=0; xv<=x+2;xv++){
    tmp[xv]=new Array();
        for(var yv=0; yv<=y+2; yv++){
            tmp[xv][yv]=0;}}	
    ctx.fillStyle="#000";ctx.fillRect(0,0,canvas.width,canvas.height);
    for(var xv=1; xv<=x+1;xv++){for(var yv=1; yv<=y+1; yv++){
            var sum=go[xv-1][yv]+go[xv-1][yv-1]+go[xv-1][yv+1]+go[xv][yv-1]+go[xv][yv+1]+go[xv+1][yv]+go[xv+1][yv+1]+go[xv+1][yv-1];
            if(go[xv][yv] == 1){if(sum == 2 || sum == 3){
                    tmp[xv][yv]=1;ctx.fillStyle="#fff";ctx.fillRect(10*(xv-1),10*(yv-1),10,10);}
            } else {if(sum == 3) {tmp[xv][yv]=1;ctx.fillStyle="#aaa";ctx.fillRect(10*(xv-1),10*(yv-1),10,10);}}}}
    go=tmp.slice();},50);
go=new Array();tmp=new Array();
for(var xv=0; xv<=x+2;xv++){
    go[xv]=new Array();tmp[xv]=new Array();
    for(var yv=0; yv<=y+2; yv++){
        tmp[xv][yv]=0;go[xv][yv]=rv;var rv=Math.floor((Math.random()*2));
        rv == 1 ? ctx.fillRect(10*(xv),10*(yv),10,10):0;}}