document.getElementById("germany").onclick = function () {
    document.getElementById("country").href = "test1"
    document.getElementById("country").innerText = "Download Germany"
    appInsights.trackEvent({ name: "Download - Germany" });



}

document.getElementById("denmark").onclick = function () {
    document.getElementById("country").href = "test2"
    document.getElementById("country").textContent = "Download Denmark"
    appInsights.trackEvent({ name: "Download - Denmark" });

}

document.getElementById("country").onclick = function () {
    appInsights.trackEvent({ name: "Download - total" })
}



