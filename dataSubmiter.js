let currentUpdateId; 

function Insert() {
    let title = document.getElementById('insert-title-Todo').value;
    let content = document.getElementById('insert-textarea-Todo').value;

    if (!title.trim() || !content.trim()) {
        alert("Bitte füllen Sie beide Felder aus.");
        return;
    }

    let formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    fetch('PHP\\post.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("To-Do erfolgreich hinzugefügt!");
        document.getElementById('insert-title-Todo').value = '';
        document.getElementById('insert-textarea-Todo').value = '';
        Read(); // Aktualisiert die Tabelle nach dem Hinzufügen
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Fehler beim Hinzufügen des To-Do.");
    });
}

function Read() {
    const url = 'PHP\\get.php';
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';

        if (data && data.length > 0) {
            data.forEach(todo => {
                const row = `<tr>
                                <td>${todo.id}</td>
                                <td>${todo.title}</td>
                                <td>${todo.content}</td>
                                <td>${todo.modificationDate}</td>
                                <td>
                                    <button onclick="selectTodoForUpdate(${todo.id})">Bearbeiten</button>
                                    <button onclick="selectTodoForDelete(${todo.id})">Löschen</button>
                                </td>
                             </tr>`;
                tableBody.innerHTML += row;
            });
        } else {
            tableBody.innerHTML = '<tr><td colspan="5">Keine Daten gefunden.</td></tr>';
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('table-body').innerHTML = '<tr><td colspan="5">Fehler beim Laden der Daten.</td></tr>';
    });
}

function selectTodoForUpdate(id) {
    currentUpdateId = id; 
    fetch(`PHP\\get.php?id=${id}`) 
    .then(response => response.json())
    .then(data => {
        document.getElementById('update-title-Todo').value = data.title;
        document.getElementById('update-textarea-Todo').value = data.content;
    })
    .catch(error => {
        console.error('Error fetching todo:', error);
        alert("Fehler beim Laden des To-Do zur Bearbeitung.");
    });
}

function selectTodoForDelete(id) {
    currentUpdateId = id; // Speichert die ID für das Löschen
}

function Delete() {
    let id = currentUpdateId;

    if (!id) {
        alert("Bitte wählen Sie ein To-Do zum Löschen aus.");
        return;
    }

    let formData = new FormData();
    formData.append('id', id);
    formData.append('action', 'delete');

    fetch('PHP\\delete.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("To-Do erfolgreich gelöscht!");
        Read(); // Aktualisiert die Tabelle nach dem Löschen
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Fehler beim Löschen des To-Do.");
    });
}

function Update() {
    let id = currentUpdateId;
    let content = document.getElementById('update-textarea-Todo').value;

    if (!id || !content.trim()) {
        alert("Bitte füllen Sie das Feld aus.");
        return;
    }

    let formData = new FormData();
    formData.append('id', id);
    formData.append('content', content);
    formData.append('action', 'update');

    fetch('PHP\\update.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("To-Do erfolgreich aktualisiert!");
        Read(); 
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Fehler beim Aktualisieren des To-Do.");
    });
}
