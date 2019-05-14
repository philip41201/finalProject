// source https://stackoverflow.com/questions/35955504/add-table-row-button-on-click
function addField(table){
    
    var tableRef = document.getElementById(table);
    var newRow   = tableRef.insertRow(-1);
    
    var newCell  = newRow.insertCell(0);
    var newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Date");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    newElem.style.textAlign = "center";
    
              
    newCell = newRow.insertCell(1);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Quantity");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    newElem.style.textAlign = "center";
    
    newCell = newRow.insertCell(2);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Cost per Ticket");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    newElem.style.textAlign = "center";

    newCell = newRow.insertCell(3);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Artist");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    newElem.style.textAlign = "center";

    newCell = newRow.insertCell(4);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Venue");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    newCell.style.textAlign = "right";

    newCell = newRow.insertCell(5);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Section");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    newElem.style.textAlign = "center";

    newCell = newRow.insertCell(6);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Row");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    newElem.style.textAlign = "center";

    newCell = newRow.insertCell(7);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Seat");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    newElem.style.textAlign = "center";

}

$('#table tr').each(function(row, tr){
    TableData = TableData 
        + $(tr).find('td:eq(0)').text() + ' '  // Task No.
        + $(tr).find('td:eq(1)').text() + ' '  // Date
        + $(tr).find('td:eq(2)').text() + ' '  // Description
        + $(tr).find('td:eq(3)').text() + ' '  // Task
        + $(tr).find('td:eq(4)').text() + ' '  // Task
        + $(tr).find('td:eq(5)').text() + ' '  // Task
        + $(tr).find('td:eq(6)').text() + ' '  // Task
        + $(tr).find('td:eq(7)').text() + ' '  // Task
        + '\n';
});
var TableData = new Array();
    
$('#table tr').each(function(row, tr){
    TableData[row]={
        "Date" : $(tr).find('td:eq(0)').text()
        , "Quantity" :$(tr).find('td:eq(1)').text()
        , "Cost per ticket" : $(tr).find('td:eq(2)').text()
        , "Artist" : $(tr).find('td:eq(3)').text()
        , "Venue" : $(tr).find('td:eq(4)').text()
        , "Section" : $(tr).find('td:eq(5)').text()
        , "Row" : $(tr).find('td:eq(6)').text()
        , "Seat" : $(tr).find('td:eq(7)').text()
    }
}); 
TableData.shift();  // first row is the table header - so remove

console.log("Hello world")