document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://localhost:8080/api/items/all';

function fetchDataAndDisplay() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            createTable(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function createTable(data) {
    const tableContainer = document.getElementById('data-table-container');
    if (!tableContainer) return;

    const table = document.createElement('table');
    table.className = 'data-table';

    const headers = ['Name', 'Type', 'Movement Speed', 'Damage On Hit', 'Action Movement Speed'];
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        const cellName = document.createElement('td');
        cellName.textContent = item.name;
        row.appendChild(cellName);

        const cellType = document.createElement('td');
        cellType.textContent = item.type;
        row.appendChild(cellType);

        const cellMovementSpeed = document.createElement('td');
        cellMovementSpeed.textContent = item.movementSpeed;
        row.appendChild(cellMovementSpeed);

        const cellDamageOnHit = document.createElement('td');
        cellDamageOnHit.textContent = item.damageOnHit;
        row.appendChild(cellDamageOnHit);

        const cellActionMovementSpeed = document.createElement('td');
        cellActionMovementSpeed.textContent = item.actionMovementSpeed;
        row.appendChild(cellActionMovementSpeed);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    tableContainer.appendChild(table);
}

fetchDataAndDisplay();
});
