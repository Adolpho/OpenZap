console.log("OpenZap");
function OpenZap() {
  if (phoneNumber.value.length !== 11 || phoneNumber.value.match(/\D+/)) {
    phoneNumber.value = `Número inválido: ${phoneNumber.value}`;
    return;
  }
  const url = `https://wa.me/${phoneNumber.value}`;
  console.log(url);
  window.open(url, '_blank');
}