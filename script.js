const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.getElementById("title").textContent = "Text change";
});

const btnAdditems = document.getElementById("btnAdditems");
btnAdditems.addEventListener("click", () => {
    const li = document.createElement("li");    // criamos o elemento <li>
    li.textContent = "New item";                // nomeamos o item da lista
    ul.appendChild(li);                         // Adiciona o <li> a <ul>
})