document.getElementById("butao").onclick = function () {
  let n = Number(document.getElementById("numero").value);

  document.getElementById("antecessor").value = n - 1;
  document.getElementById("sucessor").value = n + 1;
};
