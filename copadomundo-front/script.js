const tabela = document.getElementById("tabela-copas");
const btnBuscar = document.getElementById("btnBuscar");
const btnLimpar = document.getElementById("btnLimpar");

const campoAno = document.getElementById("ano");
const campoCampeao = document.getElementById("campeao");

const totalCopas = document.getElementById("totalCopas");

carregarCopas();

async function carregarCopas(url = "http://127.0.0.1:9000/copas") {

    const resposta = await fetch(url);

    const copas = await resposta.json();

    document.getElementById("descricao").textContent =
        "Consulte todos os campeões da Copa do Mundo desde 1930.";

    if (copas.length > 0) {

    totalCopas.style.display = "inline-flex";

    totalCopas.innerHTML =
        `📊 ${copas.length} campeonato(s) encontrado(s).`;

} else {

    totalCopas.style.display = "none";

}

    tabela.innerHTML = "";

    if (copas.length === 0) {

        tabela.innerHTML = `
        <tr>
            <td colspan="3" class="sem-resultados">
                ❌ Nenhum campeonato encontrado.
            </td>
        </tr>
    `;

        return;
    }

    copas.forEach(copa => {

        tabela.innerHTML += `
        <tr>
            <td>${copa.ano}</td>
            <td>${copa.campeao}</td>
            <td>${copa.vice}</td>
        </tr>
    `;

    });

}

btnBuscar.addEventListener("click", () => {

    const ano = campoAno.value.trim();

    const campeao = campoCampeao.value.trim();

    if (ano !== "") {

        carregarCopas(`http://127.0.0.1:9000/copas?ano=${ano}`);

    } else if (campeao !== "") {

        carregarCopas(`http://127.0.0.1:9000/copas?time=${campeao}`);

    } else {

        carregarCopas();

    }

});

btnLimpar.addEventListener("click", () => {

    campoAno.value = "";

    campoCampeao.value = "";

    carregarCopas();

    campoAno.focus();

});

campoAno.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        btnBuscar.click();
    }

});

campoCampeao.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        btnBuscar.click();
    }

});