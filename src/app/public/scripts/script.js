function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

var avatarInput = document.getElementById("avatar");
var img = document.querySelector("label[for=avatar] img");

let state = 1;

window.onload = function () {
  return addDefault();
};

var text = document.querySelector(".lbltext").textContent;
var letter = document.querySelector("#namecontent .lblname").textContent;
var divButton = document.querySelector("#contentbutton div");
var li = document.querySelectorAll(".lblitem");
var litext = [];

divButton.onclick = function () {
  if (state === 1) {
    //remove large class css in the element
    removeLarge();
    // document.getElementById("space").classList.remove("space");

    // add small class css in the element
    addSmall();

    //rederizando a list
    for (let i = 0; i < li.length; i++) {
      litext[i] = document.querySelectorAll(".lblitem")[i].textContent;
      document.querySelectorAll("#space")[i].classList.remove("space");
      document.querySelectorAll("#space")[i].classList.add("spaceSmall");
      // console.log(document.querySelectorAll("ul .space")[i].classList.remove);
      document.querySelectorAll(".lblitem")[i].textContent = "";
    }

    state -= 1;
  } else {
    //remove small class css in the element
    removeSmall();

    // add large class css in the element
    addDefault();

    for (let i = 0; i < li.length; i++) {
      document.querySelectorAll(".lblitem")[i].textContent = litext[i];
    }
    state += 1;
  }
  return state;
};
function addDefault() {
  document.getElementById("navlateral").classList.add("navlateral");
  document.getElementById("contentsection").classList.add("contentsection");
  document.getElementById("namecontent").classList.add("namecontent");
  document.getElementById("imgcontent").classList.add("imgcontent");
  document.getElementById("contentbutton").classList.add("contentbutton");
  document.getElementById("optionscontent").classList.add("optionscontent");

  document.querySelector(".lbltext").textContent = text;
  document.querySelector(".lblname").textContent = letter;
}
function addSmall() {
  document.getElementById("navlateral").classList.add("navlateralsmall");
  document
    .getElementById("contentsection")
    .classList.add("contentsectionlarge");
  document.getElementById("namecontent").classList.add("namecontentsmall");
  document.getElementById("imgcontent").classList.add("imgcontentsmall");
  document.getElementById("contentbutton").classList.add("contentbuttonsmall");
  document
    .getElementById("optionscontent")
    .classList.add("optionscontentsmall");

  document.querySelector(".lblname").textContent = "";
  document.querySelector(".lbltext").textContent = "";
}

function removeSmall() {
  document.getElementById("navlateral").classList.remove("navlateralsmall");
  document
    .getElementById("contentsection")
    .classList.remove("contentsectionlarge");
  document.getElementById("namecontent").classList.remove("namecontentsmall");
  document.getElementById("imgcontent").classList.remove("imgcontentsmall");
  document
    .getElementById("contentbutton")
    .classList.remove("contentbuttonsmall");
  document
    .getElementById("optionscontent")
    .classList.remove("optionscontentsmall");
}

function removeLarge() {
  document.getElementById("navlateral").classList.remove("navlateral");
  document.getElementById("contentsection").classList.remove("contentsection");
  document.getElementById("namecontent").classList.remove("namecontent");
  document.getElementById("imgcontent").classList.remove("imgcontent");
  document.getElementById("contentbutton").classList.remove("contentbutton");
  document.getElementById("optionscontent").classList.remove("optionscontent");
}
