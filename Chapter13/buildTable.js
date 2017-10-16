/* Chapter 13 Exercise: Build A Table */

var buildTable = function(objects){

    //Create a table element
    //Create a tr element
    //Make tr child of the table element
    var table = document.createElement("table");
    var headRow = document.createElement("tr");
    table.appendChild(headRow);
    
    //We are assuming that every object in objectsArray all have the same properties so we can
    //So get the list of properties from any object in the array
    var properties = Object.keys(objects[0]);

    //For each property in an object, create a heading cell element (th)
    //Make each heading cell element (th) child of the tr element
    properties.forEach(function(propName){
        var headCell = document.createElement("th");
        headCell.innerHTML = propName;
        headRow.appendChild(headCell);
    });

    //Make a tr element
    //For each value of each object create a regular cell (td)
    ///Make each regular cell element td child of tr element
    objects.forEach(function(obj){
        var row = document.createElement("tr");
        properties.forEach(function(key){
            var cell = document.createElement("td");
            cell.innerHTML = obj[key];
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
    return table;
}