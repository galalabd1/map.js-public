
landing page:
https://mapfinal.herokuapp.com/

Getting Started:

1- add the html file (index.html) containing the world map to your directory, you will not need to add a script in your files as it is already included in the map html file.
2- add the css file (style.css) if you would like some of the default styles as the one in our landing page.

3- Sample Code:

const wrld = new WorldMap() // call the world map object

function examples(){
	wrld.mapcolor("#A9A9A9") //color of map
	wrld.maphovercolor("black") // color of hovering
	wrld.countryhovercolor('BR','red') // color of hovering for a specific country
	wrld.createtext('BR', 'Covid Cases = 100') // add text to a specific country
	wrld.createtextall('Covid Cases = 200') // add default text to all countries when hovering
}

examples();


Documentation:
https://mapfinal.herokuapp.com/documentation.html
