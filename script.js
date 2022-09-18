// const createFunc = () => {
//   myDiv = `<a href=""></a>`;
// };
let hi1234 = document.getElementById("1234");
let createButton = document.getElementById("createbtn");

function NewCreateTab2() {
  window.open("create.html", "_self");
  return console.log("hi2");
}

createButton.addEventListener("click", NewCreateTab2());

hi1234.innerText = "shdjb";
console.log("hi");
// createButton.onclick = () =>
//   function NewCreateTab() {
//     window.open("https://www.google.com", "_blank");
//   };
