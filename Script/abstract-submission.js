var button = document.getElementById("Button");
var clickBtn = document.getElementsByClassName('click')[0];

button.disabled = true; Button.style.color = "white";

clickBtn.addEventListener('click', function(event) { button.disabled = false; Button.style.color = "green"; });

const openInNewTab = (url) => { window.open(url, "_blank"); }

button.addEventListener('click', () => { openInNewTab("https://owncloud.tuwien.ac.at/index.php/s/n1XxaHiLfeFPvAU"); });
