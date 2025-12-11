const input = document.getElementById("input-text");
const lista = document.querySelector("ul");
const btn = document.querySelector(".btn");
const alertBox = document.querySelector(".alert");
const closeAlert = document.querySelector(".close-alert");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const valor = input.value.trim();
    if (valor === "") return;

    // Criar o LI
    const li = document.createElement("li");
    li.classList.add("item");

    li.innerHTML = `
        <div class="item-content">
            <input type="checkbox" class="check-item">
            <span>${valor}</span>
        </div>
        <i class="fa-solid fa-trash delete-icon"></i>
    `;

    lista.appendChild(li);
    input.value = "";
});


// ---------- EVENTO ÚNICO: deletar + marcar concluído ----------
lista.addEventListener("click", (e) => {

    // --- Remover item ---
    if (e.target.classList.contains("delete-icon")) {
        const li = e.target.closest("li");
        li.remove();

        alertBox.classList.add("show");

        setTimeout(() => {
            alertBox.classList.remove("show");
        }, 3000);

        return;
    }

    // --- Marcar / desmarcar concluído ---
    if (e.target.type === "checkbox") {
        const span = e.target.closest("li").querySelector("span");
        span.classList.toggle("concluido");
    }
});


// --- Fechar alerta ---
closeAlert.addEventListener("click", () => {
    alertBox.classList.remove("show");
});
