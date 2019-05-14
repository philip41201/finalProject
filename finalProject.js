// source https://stackoverflow.com/questions/35955504/add-table-row-button-on-click
function addField(table){
    // create a table reference
    var tableRef = document.getElementById(table);
    // insert row into table
    var newRow   = tableRef.insertRow(-1);
    
    //insert cell into row
    var newCell  = newRow.insertCell(0);
    var newElem = document.createElement( 'input' );
    newElem.setAttribute("name", "Date");
    newElem.setAttribute("type", "text");
    //allows user to input text into cells
    newCell.appendChild(newElem);
    //sets width of text input box
    newElem.style.width = "206px";
    //centers text inside the cell
    newElem.style.textAlign = "center";
    
    // repeat for each column          
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