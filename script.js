var http = require('http')
const input = document.getElementById("input").value
const output = document.getElementById("output");
const button = document.getElementById("lol")

button.addEventListener("click", myFunction);


var options = {
  host: input,
  port: 80,
  path: '/index.html'
};

http.get(options, function(res) {
  if (res.statusCode == 200) {
    console.log("success");
  }
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

function myFunction() {
  $.ajax({
    url: input,
    method: 'HEAD',
    start_time: new Date().getTime(),
    success: function(data) {
      output.innerHTML = 'Ping = ' + (new Date().getTime() - this.start_time) + 'ms'
    }
  });
}