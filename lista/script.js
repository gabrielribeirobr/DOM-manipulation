const addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", () => {

    const li = document.createElement('li');
    li.classList.add('liItem');
    ul.appendChild(li);
    li.textContent = document.getElementById('txt').value;

});