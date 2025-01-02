let users = [];
let currentId = 1;

const form = document.getElementById("userForm");
const tableBody = document.getElementById("userTableBody");

// Thêm user mới
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    users.push({ id: currentId++, name, email });
    renderTable();
    form.reset();
});

// Hiển thị danh sách users
function renderTable() {
    tableBody.innerHTML = "";
    users.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Xóa user
function deleteUser(id) {
    users = users.filter((user) => user.id !== id);
    renderTable();
}

// Sửa user
function editUser(id) {
    const user = users.find((user) => user.id === id);
    if (user) {
        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;

        // Xóa user cũ
        users = users.filter((u) => u.id !== id);

        // Cập nhật lại bảng
        renderTable();
    }
}
