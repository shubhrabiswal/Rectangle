function updateTable(width, height, box) {
    console.log(width, height, box)
    // var linegap = Math.floor((Math.sqrt(Math.pow(width, 2) + Math.pow(height,2)))/box)
    var linegap = 20
    var x = "", i;
    var xcor = linegap;
    var ycor = linegap;
    
    var ctx = document.getElementById('DemoCanvas').getContext('2d');
    for (i = 1; i <= box; i++) {
        ctx.fillStyle = 'rgba(128, 0, 128, ' + (i + 1) / box + ')';
        ctx.fillRect(xcor, ycor, height, width);
        width = width - linegap;
        height = height - linegap;
        xcor = xcor + linegap/2  
        ycor = ycor + linegap/2 
    }
}

function draw() {
    var width = document.getElementById("wid").value;
    var height = document.getElementById("hgt").value;
    var box = document.getElementById("boxSize").value;
    updateTable(width, height, box);
}


