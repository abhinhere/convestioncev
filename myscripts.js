const firebaseConfig = {
    apiKey: "AIzaSyA7JfEDmsDkc5mgWJju2464Hpjf2J3RS38",
    authDomain: "contactform-6c5ed.firebaseapp.com",
    databaseURL: "https://contactform-6c5ed-default-rtdb.firebaseio.com",
    projectId: "contactform-6c5ed",
    storageBucket: "contactform-6c5ed.firebasestorage.app",
    messagingSenderId: "801934617088",
    appId: "1:801934617088:web:0ab6386802c5de91cac6e5"
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