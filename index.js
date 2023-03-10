javascript: (function () {
  var menu = document.createElement("div");
  menu.style.position = "fixed";
  menu.style.top = "10px";
  menu.style.left = "10px";
  menu.style.backgroundColor = "rgba(0,0,0,0.7)";
  menu.style.padding = "10px";
  menu.style.borderRadius = "10px";
  menu.style.zIndex = "9999";
  menu.style.boxShadow = "0 0 5px rgba(0,0,0,0.5)";
  var logo = document.createElement("img");
  logo.src =
    "https://biggie-the-cat.s3.amazonaws.com/media/branding-internal/logo/dieCutSmall.svg";
  logo.style.display = "block";
  logo.style.marginBottom = "10px";
  logo.style.width = "200px";

  menu.appendChild(logo);
  var links = [
    { text: "Skip Video", url: "https://www.flocabulary.com/" },
    { text: "Quiz Skipper", url: "https://www.flocabulary.com/library/" },
    {
      text: "Read and Respond Skipper",
      url: "https://www.flocabulary.com/units/",
    },
    {
      text: "Made by Lenn106",
      url: "https://github.com/Lenn106/Flocabulary-Hacks",
    },
    { text: "Discord", url: "https://discord.gg/mc96eYQ2Rg" },
  ];
  for (var i = 0; i < links.length; i++) {
    var link = document.createElement("a");
    link.href = links[i].url;
    link.textContent = links[i].text;
    link.style.display = "block";
    link.style.color = "#fff";
    link.style.marginBottom = "5px";
    menu.appendChild(link);
  }
  document.body.appendChild(menu);
  var isMenuVisible = true;
  document.addEventListener("keydown", function (event) {
    if (event.key === "f") {
      isMenuVisible = !isMenuVisible;
      menu.style.display = isMenuVisible ? "block" : "none";
    }
  });
  var isDragging = false;
  var mouseOffset = { x: 0, y: 0 };
  menu.addEventListener("mousedown", function (event) {
    isDragging = true;
    mouseOffset.x = event.clientX - menu.offsetLeft;
    mouseOffset.y = event.clientY - menu.offsetTop;
  });
  document.addEventListener("mousemove", function (event) {
    if (isDragging) {
      menu.style.left = event.clientX - mouseOffset.x + "px";
      menu.style.top = event.clientY - mouseOffset.y + "px";
    }
  });
  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
})();
