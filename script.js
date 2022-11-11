const input = document.getElementById("input").value
const output = document.getElementById("output");
const button = document.getElementById("lol")

button.addEventListener("click", myFunction);

function myFunction() {
  $.ajax({
    url: input,
    success: function(result){
      alert('reply');
    },    
      error: function(result){
        alert('timeout/error');
      }
  });
};