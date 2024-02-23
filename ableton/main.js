const boxMoreInfo = window.document.getElementById("more-info-box");
const btnMoreInfo = window.document.getElementById("btn-more-info");

boxMoreInfo.setAttribute("hidden", true);

btnMoreInfo.addEventListener("click", showMoreInfo);

function showMoreInfo() {
  window.console.log("showMoreInfo");
  var isHidden = boxMoreInfo.getAttribute("hidden");
  if (isHidden) {
    boxMoreInfo.removeAttribute("hidden");
    btnMoreInfo.textContent = "More -";
  } else {
    boxMoreInfo.setAttribute("hidden", true);
    btnMoreInfo.textContent = "More +";
  }
}
