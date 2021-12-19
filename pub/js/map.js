/* JS Library */
"use strict"; // always need a semicolon before an IIFE

(function(global, document, $) { 

	// this function is currently only in the scope of the anonymous function at the moment.
	function WorldMap() {
		this.countries = [];
	}

	/* Private properties and functions */

	let ids = document.querySelectorAll('[id]:not([id="mysvg"])')
	let classes = document.getElementsByClassName('hover')
	// default hover color
	var hover_color = "white"
		// adding hovering effects in countries with one svg
	function idshover(countries){
		for (let i = 0; i < countries.length; i++){
			countries[i].addEventListener("mouseover", function() {
				countries[i].setAttribute("fill", hover_color);
				let x = countries[i].id.toLowerCase().concat("-text")
				let y = document.getElementsByClassName(x)[0].style.display = "block";

			});
			countries[i].addEventListener("mouseout", function() {
				let color = document.getElementById("mysvg").getAttribute("fill")
				countries[i].setAttribute("fill", color);
				let x = countries[i].id.toLowerCase().concat("-text")
				let y = document.getElementsByClassName(x)[0].style.display = "none";
			});	
		}
	}
	// adding hovering effects in countries with several borders(multiple svgs)
	function classeshover(countries){
		for (let i = 0; i < countries.length; i++){
			countries[i].addEventListener("mouseover", function() {
				countries[i].setAttribute("fill", hover_color)
				let x = countries[i].className.baseVal.split(" ").slice(0, -2).join(" ").toLowerCase().concat("-text")
				let y = document.getElementsByClassName(x)[0].style.display = "block";
			});
			countries[i].addEventListener("mouseout", function() {
				let color = document.getElementById("mysvg").getAttribute("fill")
				countries[i].setAttribute("fill", color)
				let x = countries[i].className.baseVal.split(" ").slice(0, -2).join(" ").toLowerCase().concat("-text")
				let y = document.getElementsByClassName(x)[0].style.display = "none";
			});	

		}
	}
	// add countries names when hovering
	function addnames(){
		let countries = document.getElementsByClassName('hide')
		for(let i = 0; i< countries.length; i++){
			let x = countries[i].className.replace('-text hide','')
			if (x.length === 2){
				let name = document.getElementById(x.toUpperCase()).getAttribute("name")
				let h3 = document.createElement('h3')
				h3.textContent = name
				h3.style.fontWeight = "normal"
				countries[i].appendChild(h3)

			}
			else{
				let name = countries[i].className.replace('-text hide','')
				let h3 = document.createElement('h3')
				h3.textContent = name
				countries[i].appendChild(h3)
			}
		}

	}

	/* End of private properties/functions */
	WorldMap.prototype = {
// filter by country
		mapcolor: function(color){
			const map = document.getElementById("mysvg")
			map.setAttribute("fill", color)

		},
		maphovercolor: function(color){
			hover_color = color

		},
		generatecountry: function(id) {
			country = document.getElementById(id)
			x = document.getElementById("mysvg")
			x.innerHTML = ''
			x.appendChild(country)

		},
	    // add color of hover for specific country
		countryhovercolor: function(id,color){

			const object = document.getElementById(id)

			object.addEventListener("mouseover", function() {
				object.setAttribute("fill", color);
			});
			object.addEventListener("mouseout", function() {
				object.setAttribute("fill", '#A9A9A9');
			});

		},
		// add text to country
		createtext: function(id,text){
			const country_div = document.getElementsByClassName(id)
			const country = country_div[0]
			const paragraph = document.createElement('p')
			paragraph.textContent = text
			country.appendChild(paragraph)

		},
		createtextall:function(text){
			let countries = document.getElementsByClassName('hide')

			for(let i=0; i<countries.length; i++ ){			
				const paragraph = document.createElement('p')

				paragraph.textContent = text
				countries[i].appendChild(paragraph)

			}
		},
		generatecontinent:  function(worldmap, continent){
		// creating an empty div
			const div = document.createElement('div') 
		// starting our map with all the countries
			const map = worldmap
			console.log(map)

		// getting all countries of that continent
			const countries = document.getElementsByClassName(continent)
		// append these countries in the div we created
			while(countries.length >0){
				div.appendChild(countries[0])
			}
			console.log(div)
		// make original map empty
			let original_map = document.getElementById("mysvg")
			map.innerHTML = ''
		// creating elements for hovering
			const classes = document.createElement('div')
			const ids = document.createElement('div')

		// appending countries in the map
			while(div.children.length >0){
				map.appendChild(div.children[0])
			}
		// hovering over classes
			let x = document.getElementsByClassName('hover '.concat(continent))
			classeshover(x)

		}
	}

	idshover(ids)
	classeshover(classes)
	addnames()


	// After setup:
	// Add the CircleGenerator to the window object if it doesn't already exist.
	global.WorldMap = global.WorldMap || WorldMap

})(window, window.document, $); // pass the global window object and jquery to the anonymous function. They will now be locally scoped inside of the function.


