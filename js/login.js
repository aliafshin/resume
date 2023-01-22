const form = Document.getElementById("loginform");
const submit = document.getElementById("sign-in");
const error = document.getElementById("error");

submit.addEventListener("click",()=>{
    fetch("user api")
  .then((form) => data.json())
  .then((res) => console.log("login was sucssesful"))
  .catch((err) => { error.innerText = "incorect password / username please try again"} );
})