document.getElementById("lol").addEventListener("click", myFunction);

function myFunction() {
  $.ajax({
    url: document.getElementById("input").value,
    success: function(result){
      alert('reply');
    },    
      error: function(result){
        alert('timeout/error');
      }
  });
};