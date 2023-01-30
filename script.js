function criaMascara() {
    console.log("To aqui");
    const maximoInput = document.getElementById(`inputData`).maxLength;
    let valorInput = document.getElementById(`inputData`).value;
    let valorSemPonto = document.getElementById(`inputData`).value.replace(/([^0-9])+/g, "");
    const mascaras = valorInput.replace(/[^\d]/g, "").replace(/(\d{2})(\d{2})(\d{4})(\d{2})(\d{2})/, "$1/$2/$3-$4:$5")


    if(valorInput.length  === maximoInput -4)
        document.getElementById(`inputData`).value = mascaras;
  };
