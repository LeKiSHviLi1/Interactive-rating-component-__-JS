var prev;
function clickedBtn(el) {
  if (prev != undefined) prev.className = 'btn';
  el.className = 'btn_selected';
  prev = el;
}

function sub() {
  if (prev != null) {
    var rating = prev.innerHTML;
    sessionStorage.setItem('rating', rating);
    document.location = 'submited.html';
  }
}
