//variables
const inputFields = document.querySelectorAll(".form-input input");
const submitButton = document.querySelector("#submit-btn");
const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const checkError = () => {
  Array.from(inputFields).forEach((input) => {
    const fieldParent = input.parentElement;
    if (input.value == "") {
      fieldParent.getElementsByClassName("empty")[0].style.display = "block";
      fieldParent.getElementsByTagName("img")[0].style.display = "block";
    }
    if (input.getAttribute("data-name") == "Email Address") {
      if (input.value == "") {
        fieldParent.getElementsByClassName("empty")[0].style.display = "block";
        fieldParent.getElementsByTagName("img")[0].style.display = "block";
        fieldParent.getElementsByClassName("format")[0].style.display = "none";
      } else if (!regex.test(input.value)) {
        fieldParent.getElementsByClassName("empty")[0].style.display = "none";
        fieldParent.getElementsByTagName("img")[0].style.display = "block";
        fieldParent.getElementsByClassName("format")[0].style.display = "block";
      } else {
        fieldParent.getElementsByClassName("empty")[0].style.display = "none";
        fieldParent.getElementsByTagName("img")[0].style.display = "none";
        fieldParent.getElementsByClassName("format")[0].style.display = "none";
      }
    } else if (input.value !== "") {
      fieldParent.getElementsByClassName("empty")[0].style.display = "none";
      fieldParent.getElementsByTagName("img")[0].style.display = "none";
      return true;
    }
  });
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  checkError();
});

