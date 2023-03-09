import { displayGames } from "./ui.moudle.js";

let show=new displayGames()
// change active Link
$(".nav-link").click(function(){

    $(this).addClass("active")
    $(this).parent().siblings().children().removeClass("active")
})


