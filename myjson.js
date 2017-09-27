// JavaScript Document
var $ = jQuery.noConflict();

function renderHTML(data) {
    document.getElementById("d1").innerHTML = "";
    $.ajax('http://jsonplaceholder.typicode.com/users', {
        method: 'GET'}).then(function(data) {
        for (x in data) {
            // document.getElementById("d1").innerHTML += data[x].id + "<br>" + data[x].name +"<br>";
            document.getElementById("d1").innerHTML += "<li onclick='getUserDetails("+data[x].id+")'>" + data[x].name + "</li>";
        }
    });
}

function fetchUser(){
    var id = new URL(location.href).searchParams.get('id');
    $.ajax('http://jsonplaceholder.typicode.com/users/'+id,{
        method: 'GET'}).then(function(data) {

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
            myMap(data.address);

    });
}

function getUserDetails(id) {
    $.ajax('http://jsonplaceholder.typicode.com/users/'+id,{
        method: 'GET'}).then(function(data) {

        document.getElementById("userdata").innerHTML =
            "<div><h1 style='background-color: burlywood'> : USER DETAILS :</h1></div>" +
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
        myMap(data.address);
    });
}
