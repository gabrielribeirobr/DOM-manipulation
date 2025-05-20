const addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", () => {

    const wrapper = document.createElement('div');
    wrapper.classList.add('itemWrapper');

    const li = document.createElement('li');
    li.classList.add('liItem');
    ul.appendChild(li);
    li.textContent = document.getElementById('txt').value;

    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remover';
    li.appendChild(btnRemove);

    btnRemove.onclick = function () {
        wrapper.remove();
    };

    document.getElementById('txt').value = "";
    li.appendChild(btnRemove);
    wrapper.appendChild(li);
    document.getElementById('ul').appendChild(wrapper);
});

