
async function ping(url) {
  const startTime = performance.now();
  try {
    await fetch(url, { mode: "no-cors" });
    const endTime = performance.now();
    return `Response time: ${endTime - startTime}ms`;
  } catch (error) {
    return `Error: ${error}`;
  }
}

async function myFunction() {
  const output = await ping(document.getElementById("input").value);
  document.getElementById("output").innerHTML = output;
}