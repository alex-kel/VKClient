var token = localStorage.getItem('token');

$(document).ready(function() {
    $.ajax({
        url: 'https://api.vk.com/method/users.get?fields=photo_max_orig&v=5.35&access_token=' + token,
        success: function(data) {
            data = data.response[0];
            $("#id").text(data.id);
            $("#name").text(data.last_name + " " + data.first_name);
            $("#photo").attr("src", data.photo_max_orig);
        }
    });
});