var name = document.getElementById("name").innerHTML;
var user = document.getElementById("username_input").value;

function add_room()
{
    var roomname = document.getElementById("room_name_input").value;
    localStorage.setItem("roomname", roomname);
}