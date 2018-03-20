function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var element = document.getElementById(data);
    console.log(element);
    console.log(element.name);
    var nameImage = element.name;
    if (nameImage = 'images/server.png') {
    	create_component('images/\server.png', 'component-server');
    }
    if (nameImage = 'images/database-icon.png') {
    	create_component('images/\database-icon.png', 'component-database');
    } 
    if (nameImage = 'images/process-icon.png') {
    	create_component('images/\process-icon.png', 'component-process');
    }
}

function create_component(srcImage, div) {
    var idImage = new Date().getTime();
    document.getElementById(div).innerHTML = "<img src=" + srcImage + " id=" + idImage + " name=" + srcImage + " draggable='true' ondragstart='drag(event)' width='50' height='50'></img>"
}