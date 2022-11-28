document.getElementById("frm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);

  document.getElementById("output").innerHTML =
    "Name : " +
    e.srcElement[1].value +
    "<br> Account number:" +
    e.srcElement[0].value;
});
