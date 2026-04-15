var listaGastos = [];

function adicionarGasto(){

    let desc = document.getElementById('descricao').value;
    let val = document.getElementById('valor').value;
    let cat = document.getElementById('categoria').value;

    if(desc == "" || val == "" || cat == "categoria"){
        alert("Preencha todos os campos");
        return;
    }

    listaGastos.push({
        descricao: desc,
        valor: parseFloat(val),
        categoria: cat
    });

    atualizar();

    document.getElementById('descricao').value = "";
    document.getElementById('valor').value = "";
    document.getElementById('categoria').value = "categoria";
}

function atualizar(){

    let ul = document.getElementById('lista');
    ul.innerHTML = "";

    let total = 0;

    for(let i = 0; i < listaGastos.length; i++){

        total += listaGastos[i].valor;

        let li = document.createElement('li');

        li.innerHTML = listaGastos[i].descricao + " ( " +
                       listaGastos[i].categoria + " ) R$ " +
                       listaGastos[i].valor.toFixed(2);

        if(listaGastos[i].valor > 100){
            li.classList.add('alto');
        }

        li.innerHTML += " <button onclick='editar("+i+")'>Editar</button>";
        li.innerHTML += " <button class='remover' onclick='excluir("+i+")'>Excluir</button>";

        ul.appendChild(li);
    }

    document.getElementById('total').innerHTML = total.toFixed(2);
}

function excluir(i){
    listaGastos.splice(i,1);
    atualizar();
}

function editar(i){
    document.getElementById('descricao').value = listaGastos[i].descricao;
    document.getElementById('valor').value = listaGastos[i].valor;
    document.getElementById('categoria').value = listaGastos[i].categoria;

    listaGastos.splice(i,1);
    atualizar();
}