var sidebar = document.getElementById("sidebar"); 
var article = document.getElementById("article"); 
var btnAside = document.getElementById("toggle-aside"); 
var btnHL = document.getElementById("toggle-highlight"); 
var pw1 = document.getElementById("pw1"); 
var pw2 = document.getElementById("pw2");
function toggleSidebar() { 
if (sidebar.style.display == "none") { 
sidebar.style.display = ""; 
} else { 
sidebar.style.display = "none"; 
} 
}
var size = 100; // % default font size 
function incFont() { 
size += 10; 
article.style.fontSize = size + "%"; 
} 
function decFont() { 
size -= 10; 
article.style.fontSize = size + "%"; 
}
function toggleHighlight() { 
var highlights = document.getElementsByClassName("highlight"); 
for (var i = 0; i < highlights.length; i++) { 
var el = highlights[i]; 
if (el.style.backgroundColor == "yellow") { 
el.style.backgroundColor = ""; 
} else { 
el.style.backgroundColor = "yellow"; 
} 
} 
}
function changeTitleColor() { 
var h1 = document.querySelector("h1"); 
if (h1.style.color == "black") { 
h1.style.color = ""; 
} else { 
h1.style.color = "black"; 
} 
}
function chkPasswords() { 
if (pw1.value == "") { 
alert("Please enter a password."); 
pw1.focus(); 
return false;// stay on the page 
} 
if (pw1.value !== pw2.value) { 
alert("Passwords do not match. Please re-enter."); 
pw1.focus(); 
pw1.select(); 
return false;// stay on the page 
} 
alert("Great! Passwords match." );
// Clean up fields (and stay on the page) 
pw1.value = ""; 
pw2.value = ""; 
}