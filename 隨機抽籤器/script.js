const tagsGroup = document.getElementById("tags");
const choiceTextArea = document.getElementById("choice-textarea");

choiceTextArea.focus();

choiceTextArea.addEventListener("keyup", (e) => {
  if (e.key !== "Enter") return;
  e.preventDefault();
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  if (input.trim() === "") return;
  const tags = input.trim().split(" ");
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.textContent = tag;
    tagsGroup.append(tagEl);
  });
}

function randomSelect() {
  const times = 30;
  const highlightInterval = 150;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    toggleHighlightTag("add", randomTag);
    setTimeout(() => {
      toggleHighlightTag("remove", randomTag);
    }, highlightInterval);
  }, highlightInterval);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const finalRandomTag = pickRandomTag();
      toggleHighlightTag("add", finalRandomTag);
      renderResult(finalRandomTag.textContent);
    }, highlightInterval);
  }, times * highlightInterval);

}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function toggleHighlightTag(status, tag) {
  if (status === "add") {
    tag.classList.add("highlight");
  } else if (status === "remove") {
    tag.classList.remove("highlight");
  }
}

function renderResult(tag) {
  const result = document.createElement("div");
  result.textContent = `結果：${tag}`;
  tagsGroup.append(result);
  const reset = document.createElement("div");
  reset.setAttribute("id", "reset");
  setTimeout(() => {
    tagsGroup.appendChild(reset);
    const resetEl = document.getElementById("reset");
    resetEl.addEventListener("click", removeTags);
  }, 800);

}

function removeTags() {
  while (tagsGroup.lastChild) {
    tagsGroup.removeChild(tagsGroup.lastChild);
  }
}