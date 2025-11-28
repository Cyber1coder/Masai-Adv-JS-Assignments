function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete("Timer of " + duration + " ms finished");
    }, duration);
}

function onComplete(message) {
    console.log(message);
}

timer(2000, onComplete);
