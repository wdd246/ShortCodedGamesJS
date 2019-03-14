n=urpx=>(Number(urpx.replace("px", "")));
var r=document.getElementById('r'),l=document.getElementById('l'),b=document.getElementById('b'),map=[];
onkeydown=onkeyup=function(e) {
    e=e || event;
    map[e.keyCode]=e.type=='keydown';}
setInterval(function() {
    if (map[40])n(r.style.top)+15>window.innerHeight-200 ? r.style.top=window.innerHeight-200+"px" : r.style.top=n(r.style.top)+15+"px";
    else if (map[38])n(r.style.top)-15<0 ? r.style.top=0+"px" : r.style.top=n(r.style.top)-15+"px";
    if (map[83])n(l.style.top)+15 > window.innerHeight-200 ? l.style.top=window.innerHeight-200+"px" : l.style.top=n(l.style.top)+15+"px";
    else if (map[87])n(l.style.top)-15<0 ? l.style.top=0+"px" : l.style.top=n(l.style.top)-15+"px";
}, 10);
var speedx=3,speedy=1;
b.style.left=window.innerWidth/2+"px";
function moveb() {
    b.style.left=n(b.style.left)+speedx+"px";
    b.style.top=n(b.style.top)+speedy+"px";
    if (window.innerHeight<n(b.style.top)+20 || n(b.style.top)<0)speedy*=-1;
    if (n(b.style.left)>=window.innerWidth-50) {
        if (n(r.style.top)<=n(b.style.top)+20 && n(r.style.top)+200>=n(b.style.top))speedx*=-1;
        else if (n(b.style.left)>=window.innerWidth-20)goal('l');
    }
    if (n(b.style.left)<=30) {
        if (n(l.style.top)<=n(b.style.top)+20 && n(l.style.top)+200>=n(b.style.top))speedx*=-1;
        else if (n(b.style.left)<=0)goal('r');
    }
    setTimeout(()=>moveb(),1);}
moveb();
function goal(pos) {
    pos=="l" ? document.getElementById('sl').innerHTML=Number(document.getElementById('sl').innerHTML)+1 : document.getElementById('sr').innerHTML=Number(document.getElementById('sr').innerHTML)+1;
    speedx*=-1;b.style.left=window.innerWidth/2+"px";}