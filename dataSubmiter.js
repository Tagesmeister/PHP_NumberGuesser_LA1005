function Insert(){

    let titel = document.getElementById('insert-title-Todo').value;
    let todo = document.getElementById('insert-textarea-Todo').value;

    if (!titel.trim() || !todo.trim()) {
        alert("Bitte füllen Sie beide Felder aus.");
        return;
    }

    let formData = new FormData();
    formData.append('titel', titel);
    formData.append('todo', todo);

    fetch('path/to/your/insert_script.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("To-Do erfolgreich hinzugefügt!");

        document.getElementById('insert-title-Todo').value = '';
        document.getElementById('insert-textarea-Todo').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Fehler beim Hinzufügen des To-Do.");
    });
}

function Read(){

    const url = 'path/to/your/php_script.php';
    
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';

        if (data && data.length > 0) {
            data.forEach(todo => {
                const row = `<tr>
                                <td>${todo.title}</td>
                                <td>${todo.todo}</td>
                             </tr>`;
                tableBody.innerHTML += row;
            });
        } else {
            tableBody.innerHTML = '<tr><td colspan="2">Keine Daten gefunden.</td></tr>';
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('table-body').innerHTML = '<tr><td colspan="2">Fehler beim Laden der Daten.</td></tr>';
    });


}

function Update(){

    let titel = document.getElementById('update-title-Todo').value;
    let input = document.getElementById('update-textarea-Todo').value;

}

function Delete(){
    let titel = document.getElementById('delete-title-Todo').value;
    let input = document.getElementById('delete-textarea-Todo').value;
}