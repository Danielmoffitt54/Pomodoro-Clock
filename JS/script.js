(function () {
    let clock = new Clock();
    clock.displayCurrentTime();
})();

function Clock() {
    var startTime = 1500; // Starting a value for our timer
    var currentTime = 1500; // Current time for our timer 
    var sessionTime = 2400; // Length of a break in seconds
    var breakTime = 800; // Length of a break in seconds 
    var sessionCount = 0; // The number of sessions
    var mode = "Session"; // Keeps track of what mode we're in - session or break

    // Function to convert a number of seconds into a formatted time string 
    function formatTime(secs) {
        var result = "";
        let seconds = secs % 60;
        let minutes = parseInt(secs / 60) % 60;
        let hours = parseInt(secs / 3600);

        // Function adds leading zeros if minutes/seconds are less than 10
        function addLeadingZeroes(time) {
            if (time < 10) {
                return "0" + time;
            } else {
                return time;
            }
        }

        // If we have a value for hours greater than 0, we need to show it on our time ouput
        if (hours > 0) {
            result += (hours + ":");
        }

        //Build up the results string with minutes and seconds
        result += (addLeadingZeroes(minutes) + ":" + addLeadingZeroes(seconds));
        
        //Return the result string
        return result;
    }

    // Function to display the startTime
    this.displayCurrentTime = function() {
        $(".main-display").text(formatTime(startTime));
    }

    // Function to display the sessionTime 
    this.displaySessionTime = function() {
        $(".time-session-display").text(parseInt(sessionTime / 60) + " min");
    }

    // Function to display the breakTime 
    this.displayBreakTime = function () {
        $(".time-break-display").text(parseInt(breakTime / 60) + " min");
    }

    // Function to control the session count text 
    this.displaySessionCount = function() {
        if (sessionCount === 0) {
            // If our session count is 0, we should show the text Pomodoro Clock
            $(".session-count").html("<h2>Pomodoro Clock</h2>");
        } else if (type === "Session") {
            // If our session count is greater than 0 and we're in a session, we should show which session we're in 
            $(".session-count").html("<h2>Session " + sessionCount + "</h2>");
        } else if (mode === "Break") {
            // If we're in a break, we should show the text break
            $(".session-count").html("<h2>Break!</h2");
        }
    }
}
