document.getElementById("germany").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/germany_posts.csv"
    document.getElementById("country").innerText = "Download Germany"
    appInsights.trackEvent({ name: "Download - Germany" });



}

document.getElementById("denmark").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/denmark_posts.csv"
    document.getElementById("country").textContent = "Download Denmark"
    appInsights.trackEvent({ name: "Download - Denmark" });

}

document.getElementById("country").onclick = function () {
    appInsights.trackEvent({ name: "Download - total" })
}



