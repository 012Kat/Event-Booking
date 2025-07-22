const form = document.getElementById("bookingForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const event = document.getElementById("event").value;
  const tickets = document.getElementById("tickets").value;

  if (!name || !event || !tickets) return;

  confirmation.textContent = `🎉 Thank you ${name}! You've booked ${tickets} ticket(s) for "${event}".`;
  form.reset();
});
