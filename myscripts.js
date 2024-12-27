
function myFunction() {
  var x = document.getElementById("message");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var firebaseConfig = {
  apiKey: "AIzaSyAYsqKfyQOOLaraJfrye2bKaw_-KxtrBb4",
  authDomain: "cevconfessions-8e1e0.firebaseapp.com",
  databaseURL: "https://cevconfessions-8e1e0-default-rtdb.firebaseio.com",
  projectId: "cevconfessions-8e1e0",
  storageBucket: "cevconfessions-8e1e0.firebasestorage.app",
  messagingSenderId: "366382082433",
  appId: "1:366382082433:web:bd7e8505e31d2a43512080"
};

firebase.initializeApp(firebaseConfig);

