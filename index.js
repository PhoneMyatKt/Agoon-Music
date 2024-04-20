let count=0;
const songList = [
    {
        name: "High",
        artistname: "ChainSmoker",
        image: "./images/mp3_1.jpeg",
        path: "./music/mp3_1.mp3"
    },
    {
        name: "Cruel Summer",
        artistname: "Taylor Swift",
        image: "./images/mp3_2.jpeg",
        path: "./music/mp3_2.mp3"
    },
    {
        name: "Die For You",
        artistname: "The Weekend",
        image: "./images/mp3_3.jpeg",
        path: "./music/mp3_3.mp3"
    },
    {
        name: "Before you Go",
        artistname: "Lewis Capaldi",
        image: "./images/mp3_4.jpeg",
        path: "./music/mp3_4.mp3"
    },
    {
        name: "I Like You the Most",
        artistname: "Ponchet ft. Varinz",
        image: "./images/mp3_5.jpg",
        path: "./music/mp3_5.mp3"
    }
]
function start() {
    $(".trackimage").css("background-image", "url('" + songList[count].image + "')");
    $(".track").text(songList[count].name);
    $(".artist").text(songList[count].artistname);
    $(".audioTag").attr("src", songList[count].path);
    
    
}
$(".playbtn").click (function(evt) {
    $(".audioTag").get(0).play();
    $(".playbtn").addClass("hidden");
    $(".pausebtn").removeClass("hidden");
});
$(".pausebtn").click (function() {
    $(".audioTag").get(0).pause();
    $(".pausebtn").addClass("hidden");
    $(".playbtn").removeClass("hidden");
   
});
$(".nextbtn").click(function() {
    $(".audioTag").trigger("loadeddata");
    count++;
    if (count >= songList.length) {
        count = 0; 
    }
    start();
    $(".audioTag").get(0).play();
    $(".playbtn").addClass("hidden");
    $(".pausebtn").removeClass("hidden");
});
$(".previousbtn").click(function() {
    count--;
    if (count < 0) {
        count = songList.length-1; 
    }
    start();
   
        
    $(".audioTag").get(0).play();
    $(".playbtn").addClass("hidden");
    $(".pausebtn").removeClass("hidden");
    
});
$(".audioTag").on("loadeddata", function() {
    var total= Math.floor(this.duration);
    console.log(total);
    var minute= Math.floor(total / 60);
    var second=Math.floor(total % 60);
    $(".totalDisplay").text((minute < 10 ? "0"+ minute : minute) +":"+(second <10 ? "0"+second : second));
});
$(".audioTag").on("timeupdate", function() {
    var timetotal= Math.floor(this.currentTime);
    var minute= Math.floor(timetotal / 60);
    var second=Math.floor(timetotal % 60);
    $(".currentDisplay").text((minute < 10 ? "0"+ minute : minute) +":"+(second <10 ? "0"+second : second));
    var total = Math.floor($(".audioTag").get(0).duration);
    var Width = (timetotal / total) * 100; 
    $(".currentTime").css("width", Width + "%")
});
    
start();