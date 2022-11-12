const input = document.getElementById("input").value
const output = document.getElementById("output");
const button = document.getElementById("lol")

button.addEventListener("click", myFunction);
  
function myFunction() {
    $.ajax({
        url: input,
        method: 'HEAD',
        start_time: new Date().getTime(),
        success: function(data) {
            output.innerHTML = 'This request took ' + (new Date().getTime() - this.start_time) / 1000 +' seconds ' + '(Ping will be here)' 
        }
    });

}