const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.getElementById("title").textContent = "Text change";
});

const btnAdditems = document.getElementById("btnAdditems");
btnAdditems.addEventListener("click", () => {
    document.createElement("li");
})