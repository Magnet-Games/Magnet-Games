/*
DynaScript

Developer: MelonPultVR
Publisher: Magnet Games
Version: 1.0

This Program is designed to simplify JS Canvas and Events  
so anyone can make JS games and interactive software. It 
contains functions for Canvas Drawing, Event Listeners, 
and HTML DOM 
*/


// Here is the functions added in Version 1.0

//This is the Graphics part of DynaScript. 

// Alias for document.getElementById("myCanvas").getContext("2d"). ALWAYS USE myCanvas FOR YOUR CANVAS
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Changes Fill Color
function fColor(color){
	ctx.fillStyle = color
}

// Changes Line Color
function lColor(color){
	ctx.strokeStyle = color
}

// Changes Line Color
function clip(){
    ctx.clip();
}

// Draws Lines
function line(x1,y1,x2,y2){
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
    ctx.stroke();
}

// Fills Object
function fill(){
	ctx.fill();
}

// Outlines Object
function outline(){
	ctx.stroke();
}

// Draws Circles
function circle(xpos,ypos,radius,sectionSize){
	ctx.beginPath();
	ctx.arc(xpos,ypos,radius,0,2*Math.PI);
}
// Draws Rectangles and Squares
function rect(xpos,ypos,length,width){
	ctx.rect(xpos, ypos, length, width);
}

// Erases part of the screen
function erase(x,y,l,w){
    ctx.clearRect(x,y,l,w);
}

// Creates Quadratic Curves
function curve(xs,ys,xc,yc,xe,ye){
    ctx.beginPath();
    ctx.moveTo(xs, ys);
    ctx.quadraticCurveTo(xc, yc, xe, ye);
    ctx.stroke();
}

// Creates Bezier Curves
function bezier(xs,ys,xc1,yc1,xc2,yc2,xe,ye){
    ctx.beginPath();
    ctx.moveTo(xs, ys);
    ctx.bezierCurveTo(xc1, yc1, xc2, yc2, xe, ye);
    ctx.stroke();
}

// Creates Text on the Canvas
function text(x,y,txt,font){
    ctx.font = font;
    ctx.fillText(txt,x,y);
}

// Creates Text on the Canvas
function strokeText(x,y,txt,font){
    ctx.font = font;
    ctx.strokeText(txt,x,y);
}

// Creates Lighting
function lighting2D(x,y,color,blur){
    ctx.shadowColor = color;
    ctx.shadowBlur = blur;
    ctx.shadowOffsetX = x;
    ctx.shadowOffsetY = y;
}

// Draws images on the Canvas
function image(xpos,ypos,width,height,image){
    const img = new Image();
    img.src = image; 
    img.onload = function() {
        ctx.drawImage(img, xpos, ypos, width, height); 
    };
}

// Draws images on the Canvas (Advanced)
function advImage(xClip,yClip,wClip,hClip,xpos,ypos,width,height,image){
    const img = new Image();
    img.src = image; 
    img.onload = function() {
        ctx.drawImage(img,xClip,yClip,wClip,hClip,xpos,ypos,width,height); 
    };
}

// Translates x/y Pos
function translate(x,y){
    ctx.translate(x,y);
}

// Rotates Screen
function rotate(d){
    ctx.rotate((Math.PI/180)*d);
}

// Scales Objects
function scale(x,y){
   ctx.scale(x,y);
}

// Transforms Objects
function matrix(xsc,xsk,ysc,ysk,moveX,moveY){
   ctx.transform(xsc,xsk,ysc,ysk,moveX,moveY);
}

// This is the DOM Part of DynaScript

// Changes Inner HTML
function changeHtml(x,y){
    let z = document.getElementById(x)
    z.innerHTML = y
}

// Changes SRC Location
function changeSrc(x,y){
    let z = document.getElementById(x)
    z.src = y
}

// Changes HREF Location
function changeHref(x,y){
    let z = document.getElementById(x)
    z.href = y
}

// Changes Text Color
function changeColor(x,y){
    let z = document.getElementById(x)
    z.style.color = y
}

// Lets you create functions/custom tags for HTML 
function render(tagName,tagContent){
  class tagClass extends HTMLElement {
    connectedCallback() {
      this.innerHTML = tagContent;
    }
  }
  customElements.define('r-' + tagName, tagClass);
}

// Gets Elements by their ID
function $i(value){
    return document.getElementById(value);
}

// Gets Elements by their HTML Tag
function $t(value){
    return document.getElementByTagName(value);
}

// Gets Elements by their HTML/CSS Class
function $c(value){
    return document.getElementByClassName(value);
}

// Gets the first Element using CSS Selectors
function $q(value){
    return document.querySelector(value);
}

// Gets all Elements using CSS Selectors
function $a(value){
    return document.querySelectorAll(value);
}

// Adds Events
function evnt(select,eventType,action){
	document.getElementById(select).addEventListener(eventType,action);
}

// Removes Events
function delEvnt(select,eventType,action){
	document.getElementById(select).removeEventListener(eventType,action);
}

// Creates objects on the canvas (Inspired by Unity)
function gameObject(x, y, width, height, photo) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = photo;
    this.update = function(){
        image(this.x,this.y,this.width,this.height,this.image);
    }
    this.update();
}

// Runs Code every frame, at 50 FPS
function frame(code){
    setInterval(code,20);
};

// Here is  the functions added in Version 2.0, Which focuses on SOM (Style Object Model) and CSS manipulation
