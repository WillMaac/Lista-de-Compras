const input = document.getElementById("input-text");
const lista = document.querySelector("ul");
const btn = document.querySelector(".btn");
const btnDelete = document.querySelector("#delete")
const alertBox = document.querySelector(".alert");
const closeAlert = document.querySelector(".close-alert");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const valor = input.value.trim();
    if (valor === "") return;

    // Criar o elemento LI
    const li = document.createElement("li");
    li.classList.add("item");

    // Estrutura do item igual à do HTML
    li.innerHTML = `
        <div class="item-content">
            <input type="checkbox">
            <span>${valor}</span>
        </div>
        <i class="fa-solid fa-trash delete-icon"></i>
    `;

    // Adicionar na lista
    lista.appendChild(li);

    // limpar o input
    input.value = "";
});

lista.addEventListener("click", (e)=>{
    if (e.target.classList.contains("delete-icon")) {
        const li = e.target.closest("li");
        li.remove();
         alertBox.classList.add("show");

         setTimeout(() => {
            alertBox.classList.remove("show");
        }, 3000);
    }
})

closeAlert.addEventListener("click", () => {
    alertBox.classList.remove("show");
});