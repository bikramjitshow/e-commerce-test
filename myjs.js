// JavaScript Document

/*
var pageCounter = 1;
//var dataContainer = document.getElementById("d1");
var btn = document.getElementById("b1");

function mydata() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://jsonplaceholder.typicode.com/users');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }

    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();
}

function renderHTML(data) {

    for (x in data) {
       // document.getElementById("d1").innerHTML += data[x].id + "<br>" + data[x].name +"<br>";
       document.getElementById("d1").innerHTML += "<a href='./user-detail.html?id=" + data[x].id + "'>" + data[x].name + "</a>" +"<br>";
    }
}

function fetchUser() {
    var id = new URL(location.href).searchParams.get('id');
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://jsonplaceholder.typicode.com/users/'+id);
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            viewdata(ourData);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    };
    ourRequest.onerror = function() {
        console.log("Connection error");
    };
    ourRequest.send();
    function viewdata(data) {
        document.getElementById("userdata").innerHTML =
            "<div>Name : " +data.name+ "</div>" +
            "<div>Username : " +data.username+ "</div>" +
            "<div>Email : " +data.email+ "</div>"+
            "<div>Address :</div>"+
            "<div>Street :"+data.address.street+"</div>"+
            "<div>Suite :"+data.address.suite+"</div>"+
            "<div>City :"+data.address.city+"</div>"+
            "<div>Zip Code :"+data.address.zipcode+"</div>"+
            "<div>Geo :"+data.address.geo.lat+","+data.address.geo.lng+"</div>"+
            "<div>Phone :"+data.phone+"</div>"+
            "<div>Website :"+data.website+"</div>"+
            "<div>Company :</div>"+
            "<div>Name :"+data.company.name+"</div>"+
            "<div>Catch Phrase :"+data.company.catchphrase+"</div>"+
            "<div>B.S :"+data.company.bs+"</div>";

    }
}*/
