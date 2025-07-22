const events = [
  { id: 1, title: "Tech Conference 2025", date: "Aug 10", image: "images/event1.jpg" },
  { id: 2, title: "AI Workshop", date: "Sept 2", image: "images/event2.jpg" },
  { id: 3, title: "Dev Hackathon", date: "Oct 18", image: "images/event3.jpg" }
];

const eventList = document.getElementById("events");
const bookingForm = document.getElementById("booking-form");
const form = document.getElementById("form");
const bookingMsg = document.getElementById("booking-msg");

let selectedEvent = null;

function renderEvents() {
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}" />
      <h3>${event.title}</h3>
      <p>Date: ${event.date}</p>
      <button onclick="openBooking(${event.id})">Book Now</button>
    `;
    eventList.appendChild(card);
  });
}

function openBooking(eventId) {
  selectedEvent = events.find(e => e.id === eventId);
  bookingForm.classList.remove("hidden");
  bookingMsg.textContent = "";
  form.reset();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tickets = document.getElementById("tickets").value;

  bookingMsg.textContent = `🎉 Thank you, ${name}! You've booked ${tickets} ticket(s) for "${selectedEvent.title}". A confirmation has been sent to ${email}.`;

  form.reset();
  setTimeout(() => bookingForm.classList.add("hidden"), 4000);
});

renderEvents();
