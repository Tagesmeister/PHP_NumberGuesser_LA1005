let currentUpdateId;

function Insert() {
  let title = document.getElementById("insert-title-Todo").value;
  let content = document.getElementById("insert-textarea-Todo").value;

  if (!title.trim() || !content.trim()) {
    alert("Bitte füllen Sie beide Felder aus.");
    return;
  }

  let formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);

  fetch("PHP/post.php", {
    method: "POST",
    body: formData,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function Read() {
  const url = "PHP\\get.php";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("table-body");
      tableBody.innerHTML = "";

      if (data && data.length > 0) {
        data.forEach((todo) => {
          const row = `<tr>
                                <td>${todo.id}</td>
                                <td>${todo.title}</td>
                                <td>${todo.content}</td>
                                <td>${todo.modificationDate}</td>
                                <td>
                                    <button onclick="ShowUpdateSection(${todo.id})">Bearbeiten</button>
                                    <button onclick="Delete(${todo.id})">Löschen</button>
                                </td>
                             </tr>`;
          tableBody.innerHTML += row;
        });
      } else {
        tableBody.innerHTML =
          '<tr><td colspan="5">Keine Daten gefunden.</td></tr>';
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("table-body").innerHTML =
        '<tr><td colspan="5">Fehler beim Laden der Daten.</td></tr>';
    });
}

function Delete(id) {
  const data = new URLSearchParams();
  data.append("id", id);

  const options = {
    method: "DELETE",
    body: data,
  };

  fetch("PHP/delete.php", options)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function ShowUpdateSection(id) {
  currentUpdateId = id;
  document.getElementById("update-section").style.display = "block";
}

function HideUpdateSection() {
  document.getElementById("update-section").style.display = "none";
}

function Update() {
  let title = document.getElementById("update-title-todo").value;
  let content = document.getElementById("update-content-todo").value;

  let data = new URLSearchParams();
  data.append("id", currentUpdateId);
  data.append("title", title);
  data.append("content", content);

  fetch("PHP/update.php", {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
