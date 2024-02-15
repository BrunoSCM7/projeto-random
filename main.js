function generateNumber() {

  const min = Math.ceil(document.querySelector("#input-min").value)
  const max = Math.floor(document.querySelector("#input-max").value)
  const number = document.querySelector("#number")


  // verficando se os campos estão preenchidos
  if (document.querySelector("#input-min").value.trim() === "" || document.querySelector("#input-max").value.trim() === "") {
    alert("Preencha os campos!")
  }

  // verificando se o primeiro número é maior
  else if (min >= max) {
    alert("Operação inválida. Coloque um número menor primeiro!")
  }

  // se tudo estiver ok
  else {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    number.textContent = result
    number.style.color = "white"
  }
}