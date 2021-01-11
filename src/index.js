function updateCartNumber(total) {
    const cartNumberEl = document.getElementById('numero-carrinho')
    cartNumberEl.textContent = total;
}
console.log("HOME");

localStorage.setItem("list_cart", "Carrinho bem legal");

const cart = [];
const movies = [
    {
        id: 1,
        name:'De volta para o fututo',
        price: '13,50'
    },
    {
        id: 2,
        name: 'Dragon ball Z',
        price: '10,20'
    },
    {
        id: 3,
        name: 'A Cabana',
        price: '14,65'
    },
    {
        id: 4,
        name: 'Pokemon 2000',
        price: '5,90'
    }
];

const tableMoviesEl = document.querySelector('#table-movies-body');

const movieElements = movies.map((item) => {
    const tr = document.createElement("tr");

    const colName = document.createElement("td");
    colName.textContent = item.name;            // o conteudo de texto será item.name

    const colPrice = document.createElement("td");
    colPrice.textContent = item.price;

    const colAction = document.createElement("td");
    const buttonAction = document.createElement("button");
    buttonAction.textContent = 'Adicionar ao carrinho'
    colAction.appendChild(buttonAction)             // acrescentado botao no 'td'
    buttonAction.onclick = function () {
        cart.push(item);
        updateCartNumber(cart.length)  // conta quantos obj
        alert("Item adicionado com sucesso");

    }

    
    tr.appendChild(colName);     //dentro do 'tr' um 'td' com NAME
    tr.appendChild(colPrice);
    tr.appendChild(colAction);

    return tr;
});

movieElements.forEach((createTr) => {
    tableMoviesEl.appendChild(createTr);
});


