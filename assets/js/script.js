// current day
var today = moment ();
$("#today-date").text(today.format("MMM Do, YYYY"));

var time = $(".hour");
var now = parseInt(moment().format("H"));

function hour () {
    var hourEl = parseInt($this).attr("#id");
    if (hourEl === now){
        $(slot).addClass("current");
    } else if (hourEl < now){
        $(slot).addClass("past");
    } else if (hourEl > now){
        $(slot).addClass("upcoming")
    };
}