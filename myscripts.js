// whatsapp share
document.getElementById('shareBtn').addEventListener('click', function () {
  const message = encodeURIComponent("Check out this cevconfession website!");
  const url = encodeURIComponent("https://cevconfessions.vercel.app/");
  const whatsappUrl = `https://wa.me/?text=${message} ${url}`;
  window.open(whatsappUrl, '_blank');
});