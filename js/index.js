$(document ).ready(function() {
	create_component('images/\server.png', 'component-server');
    create_component('images/\database-icon.png', 'component-database');
    create_component('images/\process-icon.png', 'component-process');
    create_component('images/\cloud-icon.png', 'component-cloud');
    create_component('images/\arrow-down.png', 'component-arrow-down');
    create_component('images/\arrow-down-right.png', 'component-arrow-down-right');
    create_component('images/\arrow-right.png', 'component-arrow-right');
    var qtdLinha = 6;
    var qtdColuna = 6;

    for(i=0; i<qtdLinha; i++) {
        $("#div-area").append("<div class='row'>");
        for(j=0; j<qtdColuna; j++) {
            $("#div-area div.row:last").append("<div id='div" + i +"_" + j + "' ondrop='drop(event)' ondragover='allowDrop(event)' class='col-sm'>&nbsp;</div>");
        }
    }
});