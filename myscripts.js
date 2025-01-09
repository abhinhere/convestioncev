const firebaseConfig = {
  apiKey: "AIzaSyDofW0HJRrJkCU3wKuxMovWviQ4Z8bkoLc",
  authDomain: "confession-47323.firebaseapp.com",
  databaseURL: "https://confession-47323-default-rtdb.firebaseio.com",
  projectId: "confession-47323",
  storageBucket: "confession-47323.firebasestorage.app",
  messagingSenderId: "442730912635",
  appId: "1:442730912635:web:bc70e77f0364ad8bdffbde"
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