var token = localStorage.getItem('token');
var Request = require('request');

request_fields = "photo_200,city,online,online_mobile,status,last_seen,about";

Request('https://api.vk.com/method/users.get?fields=' + request_fields + ' &v=5.35&access_token=' + token,
    function (error, response, body) {
        console.log(JSON.parse(body).response[0]);
        if (!error && response.statusCode == 200) {
            var response = JSON.parse(body).response[0];
            var photo_url = response["photo_200"];
            React.render(
                <img id="avatar" src={photo_url}/>,
                document.getElementsByClassName("avatar")[0]
            );
            var fullName = response["first_name"] + ' ' + response["last_name"];
            React.render(
                <h3 id="full-name">{fullName}</h3>,
                document.getElementsByClassName("information")[0]
            )

        }
    });