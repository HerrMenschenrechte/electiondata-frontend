$.ajax({
    url: "/data",
    type: "GET",
    success: function (data) {
        let result = []

        result.push(data)


        $(document).ready(function () {
            document.getElementById('posts').innerHTML = data.data[0]
        })

        $(document).ready(function () {
            document.getElementById('location').innerHTML = 7
        })

        $(document).ready(function () {
            document.getElementById('update').innerHTML = data.data[1]
        })
    },
    error: function () {
        console.log("Error occurs here")
    },



})

