
"use strict"; 

// simple example of worldmap
const wrld = new WorldMap()

function examples(){
	wrld.mapcolor("#A9A9A9")
	wrld.maphovercolor("black")
	wrld.countryhovercolor('BR','red')
	wrld.createtextall('Covid Cases = 200')
	let counter = 0

	document.querySelector('#continents').addEventListener('change',function(){
		let original_map = document.getElementById("mysvg")
		counter++
		if (counter >1){
			window.location.reload();
		}
		let x = document.getElementById('continents')
		wrld.generatecontinent(original_map, x.value)

	});

}

examples();

	
