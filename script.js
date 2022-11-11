var input = document.getElementById("input").value
var output = document.getElementById("output").value
/*
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
*/

var p = new Ping();

// Using callback
p.ping("https://github.com", function(err, data) {
  // Also display error if err is returned.
  if (err) {
    console.log("error loading resource")
    data = data + " " + err;
  }
  document.getElementById("ping-github").innerHTML = data;
});
