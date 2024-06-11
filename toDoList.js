const itemInput = document.getElementById('input');
const addItemButton = document.getElementById('button');
const itemList = document.getElementById('output');
const selectAllContainer = document.getElementById('selectAllContainer');
const selectAllCheckbox = document.getElementById('selectAll');

// Function to add item to the list
function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText !== '') {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'itemCheckbox';
        checkbox.addEventListener('change', updateSelectAllCheckbox);

        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(' ' + itemText));
        itemList.appendChild(listItem);
        itemInput.value = '';

        // Display the select all checkbox container if there are items in the list
        updateSelectAllVisibility();
    }
}

// Function to toggle select all checkboxes
function toggleSelectAll() {
    const checkboxes = document.querySelectorAll('.itemCheckbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

// Function to update select all checkbox based on individual checkbox state
function updateSelectAllCheckbox() {
    const checkboxes = document.querySelectorAll('.itemCheckbox');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    selectAllCheckbox.checked = allChecked;

    // Hide the select all checkbox container if there are no items in the list
    updateSelectAllVisibility();
}

// Function to update visibility of select all checkbox
function updateSelectAllVisibility() {
    if (itemList.children.length > 0) {
        selectAllContainer.style.display = 'block';
    } else {
        selectAllContainer.style.display = 'none';
    }
}

// Event listeners
addItemButton.addEventListener('click', addItem);
selectAllCheckbox.addEventListener('click', toggleSelectAll);