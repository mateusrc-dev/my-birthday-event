AOS.init();

const eventDate = new Date("2024-02-09T19:00:00");
const timeStampOfEvent = eventDate.getTime();

const counterTheHours = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const distanceUntilTheEvent = timeStampOfEvent - timeStampNow;

    const dayInMs = 1000 * 60 * 60 * 24; // milliseconds * seconds * minutes * hours
    const hourInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;

    const daysUntilTheEvent = Math.floor(distanceUntilTheEvent / dayInMs); 
    const hoursUntilTheEvent = Math.floor((distanceUntilTheEvent % dayInMs) / hourInMs); // rest of division for get hours to event in timestamp / hours
    const minutesUntilTheEvent = Math.floor((distanceUntilTheEvent % hourInMs) / minutesInMs);
    const secondsUntilTheEvent = Math.floor((distanceUntilTheEvent % minutesInMs) / 1000);

    document.getElementById('counter').innerHTML = `${daysUntilTheEvent}d ${hoursUntilTheEvent}h ${minutesUntilTheEvent}m ${secondsUntilTheEvent}s`;

    if (distanceUntilTheEvent < 0) {
        clearInterval(counterTheHours);

        document.getElementById('counter').innerHTML = 'Evento expirado!'
    }
}, 1000);