const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.getElementById("title").textContent = "Text change";
});

const btnAdditems = document.getElementById("btnAdditems");
btnAdditems.addEventListener("click", () => {
    const li = document.createElement("li");    // criamos o elemento <li>
    li.classList.add("itemList");               // denominamos "itemList" como nome da classe
    li.textContent = "New item";                // nomeamos o item da lista
    ul.appendChild(li);                         // Adiciona o <li> a <ul>
})

const btnRemoveList = document.getElementById("btnRemoveList");
btnRemoveList.addEventListener("click", () => {
    ul.remove();
});

const btnRemoveItems = document.getElementById("btnRemoveItems");
btnRemoveItems.addEventListener("click", () => {
    const Items = document.querySelectorAll(".itemList");
    Items.forEach(item => item.remove());
})

// para selecionarmos todos os items com a mesma classe, devemos utilizar o .querySelectorAll(". (nome da classe)")