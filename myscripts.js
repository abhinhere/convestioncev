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

const content ='This is content to share';

document.getElementById("share").addEventListener("click",()=>{
  let whatsappUrl = "whatsapp://send?text="+encodeURIComponent(content)
})