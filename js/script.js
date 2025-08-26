// Current Date & Time
function updateDateTime() {
  const current_date = new Date();
  document.getElementById("current_date").textContent = current_date.toLocaleDateString();
  document.getElementById("current_time").textContent = current_date.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);
updateDateTime();


// Confirmation Popup on Contact Form
function confirmSubmit(event) {
  event.preventDefault();
  if (confirm("Do you want to submit the form?")) {
    alert("Form Submitted Successfully!");
    event.target.submit();
  }
}