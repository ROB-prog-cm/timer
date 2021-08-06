const year = document.querySelector('#year')
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const second = document.querySelector('#seconds')
const countdown = document.querySelector('#countdown')
const preloader = document.querySelector('#preloader')

const currentYear = new Date().getFullYear()
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)

year.innerText = currentYear + 1

function updateCounter() {
  const currentTime = new Date()
  const diff = nextYear - currentTime
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24)
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60
  const secondLeft = Math.floor(diff / 1000) % 60

  days.innerText = daysLeft
  hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft
  minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft
  second.innerText = secondLeft < 10 ? '0' + secondLeft : secondLeft
}

updateCounter()

setInterval(updateCounter, 1000)
setInterval(function () {
  preloader.remove();
  countdown.style.display = 'flex'
}, 1000)



