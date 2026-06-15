const button = document.getElementById("dark-mode");
button.addEventListener("click", function() {
  document.body.style.backgroundColor = "#2160f3";

    if (document.body.style.backgroundColor === "rgb(0, 0, 0)" || document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "ffffff";
  } else {
    document.body.style.backgroundColor = "black";
  };
});



