// task №1 
// const data = {
// 	title: "some title from js"
// }

// document.getElementById("yourTitle").innerHTML = data.title

const data = {
	titles: [
		"some first title from js",
    	"some second title",
		"one more",
	]
}
const turn = document.getElementById("yourTitle");

let counter = 0

setInterval(() => {
	turn.innerHTML = data.titles[counter];
	counter = (counter + 1) % data.titles.length;
  }, 3000); 
