console.log("OpenZap");
function OpenZap() {
  const url = `https://wa.me/${phoneNumber.value.replace(/[^0-9]/g, '')}`;
  console.log(url);
  window.open(url, '_blank');
}