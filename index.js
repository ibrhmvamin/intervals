// Автоматическая прокрутка слайдов - Создайте слайд-шоу на веб-странице,
// который автоматически прокручивает слайды с картинками через определенные
// промежутки времени, используя `setInterval`.

// let slideIndex = 0;
// const slides = document.querySelectorAll(".slides");
// const totalSlides = slides.length;

// function showSlides() {
//   slides.forEach((slide) => {
//     slide.style.display = "none";
//     slide.classList.remove("active");
//   });
//   slideIndex = (slideIndex + 1) % totalSlides;
//   slides[slideIndex].style.display = "block";
//   slides[slideIndex].classList.add("active");
// }

// setInterval(showSlides, 3000);

// Показ случайных цитат - Напишите программу, которая показывает случайную
// цитату через определенные интервалы времени, используя setInterval. Также добавьте
// смены стилей при смене цитаты ( цвет заднего фона,текста и тд )

// const quotes = [
//   "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
//   "The way to get started is to quit talking and begin doing. - Walt Disney",
//   "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
//   "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
//   "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
// ];

// function getRandomQuote() {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   return quotes[randomIndex];
// }

// function changeQuote() {
//   const quoteContainer = document.querySelector(".quote-container");
//   const quoteText = document.querySelector(".quote");

//   quoteText.textContent = getRandomQuote();

//   const colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5"];
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];

//   quoteContainer.style.backgroundColor = randomColor;
//   quoteContainer.style.color = "#fff";
// }

// setInterval(changeQuote, 3000);

// Таймер обратного отсчета - Создайте таймер обратного отсчета, который
// отображает сколько времени осталось до определенного события. Также добавьте
// поля ввода времени для начала отсчета

let countdown;

const button = document.querySelector("button");

button.addEventListener("click", startTimer);

function startTimer() {
  const hours = document.getElementById("hours").value || 0;
  const minutes = document.getElementById("minutes").value || 0;
  const seconds = document.getElementById("seconds").value || 0;

  const endTime = Date.now() + (hours * 3600 + minutes * 60 + seconds) * 1000;
  updateTimerDisplay(endTime);

  if (countdown) {
    clearInterval(countdown);
  }

  countdown = setInterval(() => {
    updateTimerDisplay(endTime);
  }, 1000);
}

function updateTimerDisplay(endTime) {
  const now = Date.now();
  const timeLeft = endTime - now;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById("timerDisplay").textContent = "00:00:00";
    alert("Time is up!");
    return;
  }

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("timerDisplay").textContent = formatTime(
    hours,
    minutes,
    seconds
  );
}

function formatTime(hours, minutes, seconds) {
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
