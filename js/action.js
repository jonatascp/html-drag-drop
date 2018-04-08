function action() {
    console.log('>>action');
    $('#table-area div>img').each(function () {
        printElement($(this)); 
    });
}

function printElement(element) {
    var positionElement = element[0].parentElement.id.split('div')[1].split('_');
    $("#resultado").append('<br /><br />Linha: ' + positionElement[0]);
    $("#resultado").append('<br />Coluna: ' + positionElement[1]);
    $("#resultado").append("<br />Elemento: <img src='" + element[0].name + "' style='height: 50px'/>");
}