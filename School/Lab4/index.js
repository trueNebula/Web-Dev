// wait for window to load
window.onload = () => {
    // get the table
    const table = document.getElementById("sorting");

    // get the headers
    const headers = table.querySelectorAll('th');

    // Track sort directions
    const directions = Array.from(headers).map(function (header) {
        return '';
    });

    [].forEach.call(headers, function(header, index) {
        header.addEventListener('click', function() {
            sortColumn(index, directions);
        });
    });
};

function sortColumn(index, directions) {
    const table = document.getElementById("sorting");
    // Query all rows
    const tableBody = table.querySelector('tbody');
    const rows = tableBody.querySelectorAll('tr');

    // Clone the rows
    const newRows = Array.from(rows);
    const cellsToSort = [];

    // Get the current direction
    const direction = directions[index] || 'asc';


    for (var row in newRows) {
        const cells = newRows[row].querySelectorAll('td');
        cellsToSort.push(cells[index].innerHTML);

    }

    cellsToSort.sort((a, b) => {
        return a.localeCompare(b, 'en', { sensitivity: 'base' });
    });

    if (direction === 'desc')
        cellsToSort.reverse();

    // Modify newRows to match the sorted cells
    console.log(cellsToSort);

    for (var row in newRows){
        var cells = newRows[row].querySelectorAll('td');
        cells[index].innerHTML = cellsToSort[row];
        console.log(cells[index]);
    }

    // Remove old rows
    [].forEach.call(rows, (row) => {
        tableBody.removeChild(row);
    });

    // Append new rows
    newRows.forEach((newRow) => {
        tableBody.appendChild(newRow);
    });

    // Reverse the direction
    directions[index] = direction === 'asc' ? 'desc' : 'asc';

} 