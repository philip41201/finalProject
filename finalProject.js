function addField( table ){

    var tableRef = document.getElementById(table);
    var newRow   = tableRef.insertRow(-1);
    
    var newCell  = newRow.insertCell(0);
    var newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Date");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
              
    newCell = newRow.insertCell(1);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Quantity");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    
    newCell = newRow.insertCell(2);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Cost per Ticket");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    
    newCell = newRow.insertCell(3);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Artist");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    
    newCell = newRow.insertCell(4);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Venue");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    
    newCell = newRow.insertCell(5);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Section");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    
    newCell = newRow.insertCell(6);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Row");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    
    newCell = newRow.insertCell(7);
    newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Seat");
    newElem.setAttribute("type", "text");
    newCell.appendChild(newElem);
    newElem.style.width = "206px";
    
}