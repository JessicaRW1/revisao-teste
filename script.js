var dadosLista = [];

// EVENTO DO FORM (melhor que onclick)
document.getElementById("formGasto").addEventListener("submit", function(e){
    e.preventDefault();
    adicionarGasto();
});

function adicionarGasto(){
    let descricao = document.getElementById('descricaoGasto').value;
    let valor = parseFloat(document.getElementById('valorGasto').value);
    let categoria = document.getElementById('categoria').value;

    if(descricao && valor && categoria){
        dadosLista.push({ descricao, valor, categoria });
        criaLista();
        atualizarTotal();

        // limpar campos
        document.getElementById('descricaoGasto').value = "";
        document.getElementById('valorGasto').value = "";
        document.getElementById('categoria').value = "";
    } else {
        alert("Preencha todos os campos");
    }
}

function criaLista(){
    let tbody = document.querySelector("#tabela tbody");
    tbody.innerHTML = "";

    for(let i = 0; i < dadosLista.length; i++){

        let item = dadosLista[i];

        let classe = item.valor > 100 ? "alto" : "";

        tbody.innerHTML += `
            <tr class="${classe}">
                <td>${item.descricao}</td>
                <td>${item.categoria}</td>
                <td>R$ ${item.valor.toFixed(2)}</td>
                <td>
                    <button onclick="editar(${i})">Editar</button>
                    <button class="remover" onclick="excluir(${i})">Excluir</button>
                </td>
            </tr>
        `;
    }
}

function atualizarTotal(){
    let total = 0;

    for(let i = 0; i < dadosLista.length; i++){
        total += dadosLista[i].valor;
    }

    document.getElementById("total").innerText = total.toFixed(2);
}

function excluir(i){
    dadosLista.splice(i, 1);
    criaLista();
    atualizarTotal();
}

function editar(i){
    let item = dadosLista[i];

    document.getElementById('descricaoGasto').value = item.descricao;
    document.getElementById('valorGasto').value = item.valor;
    document.getElementById('categoria').value = item.categoria;

    dadosLista.splice(i, 1);
    criaLista();
    atualizarTotal();
}