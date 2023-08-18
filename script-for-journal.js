const noteInput = document.getElementById("noteInput");
const notesContainer = document.querySelector(".notes");

noteInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && noteInput.value.trim() !== "") {
    const noteText = noteInput.value;
    const noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.textContent = noteText;
    notesContainer.appendChild(noteElement);
    noteInput.value = "";
  }
});
