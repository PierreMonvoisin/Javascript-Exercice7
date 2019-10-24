document.getElementById("submit").onclick = function() {message()};

function message() {
  let size = document.getElementById("size").value;
  let bd = document.getElementById("birthday").value;
  let total = (((((size*2)+5)*50)-bd)+1766);

  alert('total : '+ total);
}
