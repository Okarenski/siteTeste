function Item(nomeItem, quantidade, preco) {
  this.nomeItem = nomeItem;
  this.quantidade = quantidade;
  this.preco = preco;
}

var itens = [];

function adicionarItem() {
  var nomeItemNovo = $("#nomeItemId").val();
  var quantidadeNovo = $("#quantidadeId").val();
  var precoNovo = $("#precoId").val();
  var novoItem = new Item(nomeItemNovo, quantidadeNovo, precoNovo);
  itens.push(novoItem);

  atualizaTabela(novoItem);

  console.log(itens);
}

function atualizaTabela(item) {
  var htmlFinal = "<tr>";
  htmlFinal += "<td>" + item.nomeItem + "</td>";
  htmlFinal += "<td>" + item.quantidade + "</td>";
  htmlFinal += "<td>" + item.preco + "</td>";
  htmlFinal += "</tr>";
  $("#tabelaItensId").append(htmlFinal);
}

function fecharCompra() {
  var htmlFinal = "Você comprou: ";

  var soma = 0;

  for (var i = 0; i < itens.length; i++) {
    htmlFinal += itens[i].quantidade + " " + itens[i].nomeItem + " - ";

    soma += itens[i].quantidade * itens[i].preco;
  }

  htmlFinal += " Total: R$ " + soma;

  $("#fechamentoLabelId").text(htmlFinal);
}
