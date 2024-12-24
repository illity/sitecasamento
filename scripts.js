// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Dados dos presentes (exemplo)
    const presentes = [
        {
            nome: "Hotwheels",
            preco: "128.54",
            imagem: "presentes/hotwheels.jpg"
        },
    ];

    const grid = document.querySelector('.presentes-grid');

    // Adiciona cada presente à grid
    presentes.forEach(presente => {
        const item = document.createElement('div');
        item.classList.add('presente');
        
        item.innerHTML = `
            <img src="${presente.imagem}" alt="${presente.nome}">
            <h3>${presente.nome}</h3>
            <p>R$ ${presente.preco}</p>
        `;
        
        grid.appendChild(item);
    });
});
