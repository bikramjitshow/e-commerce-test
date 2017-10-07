// JavaScript Document
var $ = jQuery.noConflict();

function renderHTML() {
    document.getElementById("d1").innerHTML = "";
    $.ajax('http://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    }).then(function (data) {
        for (x in data) {
            document.getElementById("d1").innerHTML += "<li onclick='getUserDetails(" + data[x].id + ")'>" + data[x].name + "</li>";
        }
    });
}

function fetchUser() {
    var id = new URL(location.href).searchParams.get('id');
    $.ajax('http://jsonplaceholder.typicode.com/users/' + id, {
        method: 'GET'
    }).then(function (data) {

        document.getElementById("userdata").innerHTML =
            "<div>Name : " + data.name + "</div>" +
            "<div>Username : " + data.username + "</div>" +
            "<div>Email : " + data.email + "</div>" +
            "<div>Address :</div>" +
            "<div>Street :" + data.address.street + "</div>" +
            "<div>Suite :" + data.address.suite + "</div>" +
            "<div>City :" + data.address.city + "</div>" +
            "<div>Zip Code :" + data.address.zipcode + "</div>" +
            "<div>Geo :" + data.address.geo.lat + "," + data.address.geo.lng + "</div>" +
            "<div>Phone :" + data.phone + "</div>" +
            "<div>Website :" + data.website + "</div>" +
            "<div>Company :</div>" +
            "<div>Name :" + data.company.name + "</div>" +
            "<div>Catch Phrase :" + data.company.catchphrase + "</div>" +
            "<div>B.S :" + data.company.bs + "</div>";
        myMap(data.address);

    });
}

function getUserDetails(id) {
    var user;
    document.getElementById("userdata").innerHTML = "";
    document.getElementById("map-container").innerHTML = "";
    document.getElementById("userposts").innerHTML = "";
    //document.getElementById("loader-container").innerHTML="<div id='loader'></div>";
    //load();
    $.ajax('http://jsonplaceholder.typicode.com/users/' + id, {
        method: 'GET'
    }).then(function (data) {
        user = data;
        document.getElementById("userdata").innerHTML =
            "<div><h1 style='background-color: #de844e'> " + data.name + " Details </h1></div>" +
            "<div>Name : " + data.name + "</div>" +
            "<div>Username : " + data.username + "</div>" +
            "<div>Email : " + data.email + "</div>" +
            "<div>Address :</div>" +
            "<div>Street :" + data.address.street + "</div>" +
            "<div>Suite :" + data.address.suite + "</div>" +
            "<div>City :" + data.address.city + "</div>" +
            "<div>Zip Code :" + data.address.zipcode + "</div>" +
            "<div>Geo :" + data.address.geo.lat + "," + data.address.geo.lng + "</div>" +
            "<div>Phone :" + data.phone + "</div>" +
            "<div>Website :" + data.website + "</div>" +
            "<div>Company :</div>" +
            "<div>Name :" + data.company.name + "</div>" +
            "<div>Catch Phrase :" + data.company.catchphrase + "</div>" +
            "<div>B.S :" + data.company.bs + "</div>";
        document.getElementById("map-container").innerHTML = "<div id='map' style='width:400px;height:400px; float: right'</div>";
        myMap(data.address);
    });


    $.ajax('http://jsonplaceholder.typicode.com/posts?userId=' + id, {
        method: 'GET'
    }).then(function (posts) {
        document.getElementById("userposts").innerHTML = "<div><h1 style='background-color: #de844e'> " + user.name + " Posts </h1></div>";
        posts.map(function (post) {
            document.getElementById("userposts").innerHTML +=
                "<div>post title : " + post.title + "</div>" +
                "<div>post body : " + post.body + "</div>" +
                "<button onclick='getcomments(event, " + post.id + ")'>Show Comments</button>" +
                "<div id='comments" + post.id + "' style='display: none;'></div><br /><br /><hr class= 'hr1'/>";

        });
    });
    
    
}

function getcomments(event, id) {
    var commentDiv = $("#comments" + id);
    commentDiv.html("");
    $.ajax('http://jsonplaceholder.typicode.com/comments?postId=' + id, {
        method: 'GET'
    }).then(function (comments) {
        $(event.target).html($(event.target).html() === "Show Comments" ? "Hide Comments" : "Show Comments");
        commentDiv.html("<div><h2 style='background-color: #7c9dde'> Comments </h2></div>");

        commentDiv.toggle();
        comments.map(function (comment) {
            commentDiv.html(commentDiv.html() + "<div>Name : " + comment.name + "</div>" +
                "<div>Email : " + comment.email + "</div>" +
                "<div>Comment : " + comment.body + "</div>" +
                "<br /><hr class='hr3'/>");

        });


    });
}

function getalbum() {
    
}
