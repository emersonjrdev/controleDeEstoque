const idProduct = document.querySelector("#codprod");
const nameProduct = document.querySelector("#nome");
const estoqueG = document.querySelector("#estoqueg");
const estoqueD = document.querySelector("#estoqued");
const idValor = document.querySelector("#valor");
const btnSubmit = document.querySelector("#btn");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const produto = {
    codigoProduto: idProduct.value,
    nomeProduto: nameProduct.value,
    estoqueG: estoqueG.value,
    estoqueD: estoqueD.value,
    idValor: idValor.value,
  };

  idProduct.value = "";
  nameProduct.value = "";
  estoqueG.value = "";
  estoqueD.value = "";
  idValor.value = "";

  console.log(produto);
});
