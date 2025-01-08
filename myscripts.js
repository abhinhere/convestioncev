const firebaseConfig = {
  apiKey: "AIzaSyCFr-Muxp7txskinMYD4hs9QqZuxxteI2U",
  authDomain: "cevx-5d408.firebaseapp.com",
  databaseURL: "https://cevx-5d408-default-rtdb.firebaseio.com",
  projectId: "cevx-5d408",
  storageBucket: "cevx-5d408.firebasestorage.app",
  messagingSenderId: "503927584170",
  appId: "1:503927584170:web:59a2d65698757cfeb467d3"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  
  var msgContent = getElementVal("msgContent");

  saveMessages(msgContent);
  window.location.href="./done.html";
  

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
   
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};


// whatsapp share
document.getElementById('shareBtn').addEventListener('click', function () {
  const message = encodeURIComponent("Check out this cevconfession website!");
  const url = encodeURIComponent("https://cevconfessions.vercel.app/");
  const whatsappUrl = `https://wa.me/?text=${message} ${url}`;

  window.open(whatsappUrl, '_blank');
});