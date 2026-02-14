async function generate() {
  const fileInput = document.getElementById("templateFile");
  const cases = document.getElementById("cases").value;
  const output = document.getElementById("output").value;
  const status = document.getElementById("status");

  if (!fileInput.files.length || !cases || !output) {
    status.innerText = "Please fill all fields";
    status.style.color = "red";
    return;
  }

  const filePath = fileInput.files[0].path || fileInput.files[0].name;

  status.innerText = "Generating checklist...";
  status.style.color = "#111";

  const response = await fetch("/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      template: filePath,
      cases: cases,
      output: output
    })
  });

  const result = await response.json();

  if (result.success) {
    status.innerText = "Checklist generated successfully!";
    status.style.color = "green";
  } else {
    status.innerText = "Error: " + result.error;
    status.style.color = "red";
  }
}