function createTable() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    const rows = parseInt(prompt("Enter the number of rows:"));
    const cols = parseInt(prompt("Enter the number of columns:"));
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }
    const table = document.createElement('table');
    for (let i = 1; i <= rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 1; j <= cols; j++) {
            const td = document.createElement('td');
            td.textContent = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
}