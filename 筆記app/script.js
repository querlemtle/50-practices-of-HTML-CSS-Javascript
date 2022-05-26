const addBtn = document.getElementById("add");
const notesInLS = JSON.parse(localStorage.getItem("notes"));

if (notesInLS) {
  notesInLS.forEach(note => addNewNote(DOMPurify.sanitize(note)));
}

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `<div class="tools">
    <button class="tools-btn edit-note" id="edit">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="tools-btn delete-note" id="delete">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  </div>
  <div class="rendered-text ${text ? "" : "hidden"}"></div>
  <textarea class="note-textarea ${text ? "hidden" : ""}"></textarea>`;

  const editBtn = note.querySelector("#edit");
  const deleteBtn = note.querySelector("#delete");
  const renderedTextEl = note.querySelector(".rendered-text");
  const textArea = note.querySelector(".note-textarea");

  editBtn.classList[renderedTextEl.classList.contains("hidden") ? "add" : "remove"]("btn-active");

  textArea.value = text;
  renderedTextEl.innerHTML = marked.parse(text);

  editBtn.addEventListener("click", () => {
    editBtn.classList.toggle("btn-active");
    renderedTextEl.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLS();
  });

  textArea.addEventListener("input", (event) => {
    const inputValue = event.target.value;
    renderedTextEl.innerHTML = DOMPurify.sanitize(marked.parse(inputValue));
    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
  const notes = [];
  const noteTexts = document.querySelectorAll("textarea");
  noteTexts.forEach(note => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
}
