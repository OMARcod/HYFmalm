var catEl = document.getElementsByClassName("blod");

   catEl[1].innerHTML = "cat";

//for (var i = 0; i < catEl.length; i++) {
//    
//    catEl[1].innerHTML = "cat";
//}

//document.querySelectorAll(".blod")

var linkS = document.querySelectorAll("a[href*=\"query\"]");

//linkS[0].href = "https://www.facebook.com"
for (var i = 0; i < linkS.length; i++) {
	linkS[i].href = "https://www.facebook.com";
}