$(document ).ready(function() {
	create_component('images/\server.png', 'component-server');
    create_component('images/\database-icon.png', 'component-database');
    create_component('images/\process-icon.png', 'component-process');
    create_component('images/\cloud-icon.png', 'component-cloud');
    var qtdLinha = 4;
    var qtdColuna = 6;
    for(i=0; i<qtdLinha; i++) {
    	$("#table-area").append("<tr>");
    	for(j=0; j<qtdColuna; j++) {
    		$("#table-area tr:last").append("<td><div id='div" + i +"_" + j + "' ondrop='drop(event)' ondragover='allowDrop(event)'></div></td>");
    	}
    }
    $("#table-area tr:first").append("<td rowspan='" + qtdLinha + "'><div id='trash' ondrop='drop(event)' ondragover='allowDrop(event)'></div></td>");
});