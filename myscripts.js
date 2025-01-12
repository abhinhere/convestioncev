const firebaseConfig = {
  apiKey: "AIzaSyBDI5X3It0FQSz27rmZJYqgeXGgGHxXPA4",
  authDomain: "confessions-5e282.firebaseapp.com",
  databaseURL: "https://confessions-5e282-default-rtdb.firebaseio.com",
  projectId: "confessions-5e282",
  storageBucket: "confessions-5e282.firebasestorage.app",
  messagingSenderId: "480852008526",
  appId: "1:480852008526:web:19c7a2310d1bd0268b2d1f"
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