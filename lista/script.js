const addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", () => {

    const li = document.createElement('li');
    li.classList.add('liItem');
    ul.appendChild(li);
    li.textContent = document.getElementById('txt').value;

    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remover';
    li.appendChild(btnRemove);

    btnRemove.onclick = function () {
        li.remove();
    };

});