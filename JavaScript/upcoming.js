// Global Variables
let bigEvents = []; // List of all the big events covered
let upcomingEvents = []; // List of events within the next 28 days

/**
	A class representing a Big Event in football.
*/
class BigEvent {
	//Properties
	#date;
	#time;
	#title;
	#link;
	#lastDay;
	#lastDayTime;

	constructor(date, time, title, link, lastDay, lastDayTime) {
		this.#date = new Date(date + " 00:00:00"); // Time set to 00:00:00 to imporove day count down
		this.#time = time;
		this.#title = title;
		this.#link = link;
		this.#lastDay = lastDay ? new Date(lastDay + " 00:00:00") : "";
		this.#lastDayTime = lastDayTime;
	}
	get date() { return this.#date; }
	get time() { return this.#time; }
	get title() { return this.#title; }
	get link() {
		if(this.#link) {
			return `<a target="_blanak" href="${this.#link}">More info</a>`;
		} else {
			return "";
		}
	}
	get lastDay() { return this.#lastDay; }
	get lastDayTime() { return this.#lastDayTime; }
	get schedule() {
		if(this.#lastDay) {
			return `Starting on: ${this.date.toLocaleDateString()} at ${this.time}
			<br>Ending on: ${this.lastDay.toLocaleDateString()} at ${this.lastDayTime}
			<br>${this.link}`;
		} else {
			return `(${this.date.toLocaleDateString()} at ${this.time})
			<br>${this.link}`;
		}
	}
}

/**
	Inital setup of global variables
*/
function inSetup() {
	// Populate list of events
	getBigEvents();
	// Get upcoming events ready
	getUpcomingEvents();
}

/**
	A method to create a list of big bigEvents.
	bigEvents added and maintained manually.
	Old bigEvents stored for future occurrences.
*/
function getBigEvents() {
	let knownEvents = getEvents();

	for(let be of knownEvents) {
		if(be.length === 6) {
			bigEvents.push(new BigEvent(be[0], be[1], be[2], be[3], be[4], be[5]));
		} else {
			bigEvents.push(new BigEvent(be[0], be[1], be[2], be[3]));
		}
	}

	bigEvents = bigEvents.sort(function(e1, e2) {
		return e1.date - e2.date || e1.time - e2.time;
	});
}

/**
	Populates upcomingbigEvents global variable with BigEvetns withing next 30 days
*/
function getUpcomingEvents() {
    // Variable to stop when out of evetns, or event found over 30 days away
    let done = false;
    // Index counter
    let index = 0;

    do {
        if(index < bigEvents.length) {
            let e = bigEvents[index];
            let days = getDaysUntil(e.date);

            if(days > 28) {
                // Stop, as no more evetns
                done = true;
            }
            else if((days >= 0 && days <= 28) || getDaysUntil(e.lastDay) >= 0) {
                // Add array of days and the event to the upcoming array.
                upcomingEvents.push([days, e]);
                index += 1;
            }
            else {
                // Ignore bigEvents that have passed 
                index += 1;
            }
        }
        else {
            // If no bigEvents have been found
            done = true;
        }
    } while(!done);
}

/**
	Starting point
*/
function setMessage() {
    inSetup();

    // If upcoming's lenght is greater than 0, set message
    if(upcomingEvents.length > 0) {
        let ele1 = document.getElementById('upcomingSec');
        let msg = prepareMsg();
        ele1.innerHTML = msg;
    }
}

/**
	Based on upcoming evetns, creates a message for the webpage.
*/
function prepareMsg() {
    let msg = "";

    for(let tmp of upcomingEvents) {
        msg += `<hr><strong><h2 class="alignfull has-text-align-center">`;

        // Depending on time left, set next section of msg
        if(tmp[0] < 0) {
			msg += "(Underway) The ";
		} else if(tmp[0] === 0) {
                msg += "Today is the ";
		} else if(tmp[0] === 1) {
                msg += "Tomorrow is the ";
		} else {
			msg += `There are only ${tmp[0]} days until the `;
        }

        msg += `${tmp[1].title}</h2></strong>\n<p class="has-large-font-size">${tmp[1].schedule}</p>`;
    }

    return msg;
}

setMessage();