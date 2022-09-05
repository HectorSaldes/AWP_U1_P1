let page = 1;

document.addEventListener('DOMContentLoaded', () => {
    requestPetition();
})


function fillDataTable(data) {
    let table = document.querySelector('#employee')
    data.forEach(e => {
        table.innerHTML += ` 
        <tr>
            <th scope="row">${e.id}</th>
            <td>${e.email}</td>
            <td>${e.first_name}</td>
            <td>${e.last_name}</td>
            <td> <img src="${e.avatar}" /> </td>
        </tr>`;
    });
}

function requestPetition(c_page = 1) {
    fetch(`https://reqres.in/api/users?page=${c_page}`)
        .then(data => data.json())
        .then(data => fillDataTable(data.data))
        .catch(err => console.error(err))
}