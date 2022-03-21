let formatSwtichBtn = document.querySelector('.format-swtich-btn');
formatSwtichBtn.addEventListener('click', () => {
	formatSwtichBtn.classList.toggle('active');

	let formatValue = formatSwtichBtn.getAttribute('data-format');

	if (formatValue === '12') {
		formatSwtichBtn.setAttribute('data-format', '24');
	}

	else {
		formatSwtichBtn.setAttribute('data-format', '12');
	}
	clock();
});

// function to get current system time and append it to html
let clock = () => {
	let today = new Date();
	let hours = today.getHours();
	let minutes = today.getMinutes();
	let seconds = today.getSeconds();
	let period = 'AM';

	// set the time period
	if (hours >= 12) {
		period = 'PM';
	}

	// set the 12-hour clock format
	let formatValue = formatSwtichBtn.getAttribute("data-format");
	if (formatValue === '12') {
		hours = hours > 12 ? hours % 12 : hours;
	}

	// add 0 for values lower than 10
	if (hours < 10) {
		hours = '0' + hours;
	}

	// add 0 for values lower than 10
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	// add 0 for values lower than 10
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	document.querySelector('.hour').innerHTML = hours;
	document.querySelector('.minutes').innerHTML = minutes;
	document.querySelector('.period').innerHTML = period;
	document.querySelector('.seconds').innerHTML = seconds;
}

// update web page to system time on page load and every second
clock();
let updateClock = setInterval(clock, 1000);

// update the web page to system date on page load
let todayDate = new Date();
let dayNumber = todayDate.getDate();
let yearNumber = todayDate.getFullYear();
let dayName = todayDate.toLocaleDateString('default', { weekday: 'long' });
let monthName = todayDate.toLocaleDateString('default', { month: 'long' });
document.querySelector('.month-name').innerHTML = monthName;
document.querySelector('.day-name').innerHTML = dayName;
document.querySelector('.day-number').innerHTML = dayNumber;
document.querySelector('.year').innerHTML = yearNumber;