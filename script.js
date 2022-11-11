const input = document.getElementById("input").value
const output = document.getElementById("output")
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
p.ping(input, function(err, data) {
  // Also display error if err is returned.
  if (err) {
    console.log("error loading resource")
    data = data + " " + err;
  }
  output.innerHTML = data;
});
