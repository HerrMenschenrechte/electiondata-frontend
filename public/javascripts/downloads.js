document.getElementById("germany").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/germany_posts.csv"
    document.getElementById("country").innerText = "Download Germany"
    appInsights.trackEvent({ name: "Download - Germany" });



}

document.getElementById("australia").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/australia_posts.csv"
    document.getElementById("country").textContent = "Download Australia"
    appInsights.trackEvent({ name: "Download - Australia" });

}

document.getElementById("denmark").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/denmark_posts.csv"
    document.getElementById("country").textContent = "Download Denmark"
    appInsights.trackEvent({ name: "Download - Denmark" });

}

document.getElementById("france").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/france_posts.csv"
    document.getElementById("country").textContent = "Download France"
    appInsights.trackEvent({ name: "Download - France" });

}

document.getElementById("uk").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/uk_posts.csv"
    document.getElementById("country").textContent = "Download United Kingdom"
    appInsights.trackEvent({ name: "Download - United Kingdom" });

}

document.getElementById("hungary").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/hungary_posts.csv"
    document.getElementById("country").textContent = "Download Hungary"
    appInsights.trackEvent({ name: "Download - Hungary" });

}

document.getElementById("slovakia").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/slovakia_posts.csv"
    document.getElementById("country").textContent = "Download Slovakia"
    appInsights.trackEvent({ name: "Download - Slovakia" });

}

document.getElementById("india").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/india_posts.csv"
    document.getElementById("country").textContent = "Download India"
    appInsights.trackEvent({ name: "Download - India" });

}


document.getElementById("usa").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/usa_posts.csv"
    document.getElementById("country").textContent = "Download USA"
    appInsights.trackEvent({ name: "Download - USA" });

}

document.getElementById("sweden").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/sweden_posts.csv"
    document.getElementById("country").textContent = "Download Sweden"
    appInsights.trackEvent({ name: "Download - Sweden" });

}

document.getElementById("finland").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/finland_posts.csv"
    document.getElementById("country").textContent = "Download Finland"
    appInsights.trackEvent({ name: "Download - Finland" });

}

document.getElementById("norway").onclick = function () {
    document.getElementById("country").href = "https://facebookdata.blob.core.windows.net/thesisdata/norway_posts.csv"
    document.getElementById("country").textContent = "Download Norway"
    appInsights.trackEvent({ name: "Download - Norway" });

}

document.getElementById("country").onclick = function () {
    appInsights.trackEvent({ name: "Download - total" })
}



