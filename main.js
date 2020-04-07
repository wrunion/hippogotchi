$(document).ready(function() {
    $("#petButton").click(function() {
        const happyHippo = hippoChanger(playWith);
    $("#happinessResult").text(happyHippo.happiness);
    });

    $("#ignoreButton").click(function() {
      const ignoredHippo = hippoChanger(ignore);
      $("#happinessResult").text(ignoredHippo.happiness);
    });
});



