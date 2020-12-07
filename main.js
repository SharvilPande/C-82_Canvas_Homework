var mouseEvent = "empty";
var last_x_position, last_y_position;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color = "red"
line_width = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent="mousedown";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent=="mousedown") {
        ctx.beginPath()
        ctx.lineWidth = line_width;
        ctx.strokeStyle = color;
        ctx.arc(last_x_position,last_y_position,20,0,2*Math.PI);

        console.log("Last X position and Last Y position - ");
        console.log("X - ", last_x_position, "Y - ", last_y_position);
        
        console.log("New X position and New Y position - ");
        console.log("X - ", current_position_of_x, "Y - ", current_position_of_y);
        

        ctx.stroke()
    }
    last_x_position = current_position_of_x;
    last_y_position = current_position_of_y;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent="mouseup";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent="mouseleave";
    console.log(mouseEvent);
}