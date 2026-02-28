const input = document.getElementById("input-text");
const lista = document.getElementById("lista");
const btn = document.querySelector(".btn");
const alertBox = document.querySelector(".alert");
const closeAlert = document.querySelector(".close-alert");

/* =========================
   ARRAY = ESTADO DA APLICAÇÃO
========================= */
let tarefas = [
    { id: 1, texto: "Pão de forma", concluida: false },
    { id: 2, texto: "Café preto", concluida: false },
    { id: 3, texto: "Suco de laranja", concluida: false },
    { id: 4, texto: "Bolacha", concluida: false }
];

/* =========================
   RENDERIZAÇÃO
========================= */
function renderizarLista() {
    lista.innerHTML = "";

    tarefas.forEach(tarefa => {
        const li = document.createElement("li");
        li.classList.add("item");
        li.dataset.id = tarefa.id;

        li.innerHTML = `
            <div class="item-content">
                <input 
                    type="checkbox" 
                    class="check-item"
                    ${tarefa.concluida ? "checked" : ""}
                >
                <span class="${tarefa.concluida ? "concluido" : ""}">
                    ${tarefa.texto}
                </span>
            </div>
            <i class="fa-solid fa-trash delete-icon"></i>
        `;

        lista.appendChild(li);
    });
}

/* =========================
   ADICIONAR ITEM
========================= */
btn.addEventListener("click", () => {
    const valor = input.value.trim();
    if (valor === "") return;

    tarefas.push({
        id: Date.now(),
        texto: valor,
        concluida: false
    });

    input.value = "";
    renderizarLista();
});

/* =========================
   EVENTOS DA LISTA
========================= */
lista.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    const id = Number(li.dataset.id);

    // Remover
    if (e.target.classList.contains("delete-icon")) {
        tarefas = tarefas.filter(tarefa => tarefa.id !== id);
        renderizarLista();

        alertBox.classList.add("show");
        setTimeout(() => {
            alertBox.classList.remove("show");
        }, 3000);
        return;
    }

    // Concluir
    if (e.target.type === "checkbox") {
        tarefas = tarefas.map(tarefa =>
            tarefa.id === id
                ? { ...tarefa, concluida: !tarefa.concluida }
                : tarefa
        );
        renderizarLista();
    }
});

/* =========================
   FECHAR ALERTA
========================= */
closeAlert.addEventListener("click", () => {
    alertBox.classList.remove("show");
});

/* =========================
   INICIALIZAÇÃO
========================= */
renderizarLista();
