$(document ).ready(function() {
	create_component('images/\server.png', 'component-server');
    create_component('images/\database-icon.png', 'component-database');
    create_component('images/\process-icon.png', 'component-process');
    create_component('images/\cloud-icon.png', 'component-cloud');
    var qtdLinha = 6;
    var qtdColuna = 10;
    for(i=0; i<qtdLinha; i++) {
    	$("#table-area").append("<tr>");
    	for(j=0; j<qtdColuna; j++) {
    		$("#table-area tr:last").append("<td><div id='div" + i +"_" + j + "' ondrop='drop(event)' ondragover='allowDrop(event)'></div></td>");
    	}
    }
});