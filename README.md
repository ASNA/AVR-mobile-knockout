## AVR Mobile Example with Knockout.js

This example shows how to use AVR to create a mobile app using the JavaScript MVVM framework, [Knockout.js](http://knockoutjs.com/) and the CSS framework, [Foundation for Sites 6](http://foundation.zurb.com/sites.html). 

Knockout.js was chosen because it is lightweight and (generally) doesn't change your markup (like React.js and Angular.js). Knockout. js may be lacking for large enterprise [SPA](https://en.wikipedia.org/wiki/Single-page_application) application--so do your research before adopting it. Although Bootstrap is by far the most popular CSS framework, Foundation seems (to me) to be the better choice for creatng an app intended for use specifcally on a smartphone. Check both out, [YMMV](http://www.urbandictionary.com/define.php?term=ymmv).

This example uses data files in the ASNA Examples library.  

This app currently provides two panels: 

The alpha-select panel lets the user select a letter from A to Z by tapping on it.

![](http://i.imgur.com/DIIm1Wf.png)

<small>Alpha-select list panel</small>

The customer list panel shows all of the customers with a name field that starts with the letter selected. 

![](http://i.imgur.com/kMgDaIE.png)

<small>Customer list panel</small>

Later panels will include a customers detail panel and a chart or two. 

#### The back end

The front end is populated with Json, using [jQuery](https://jquery.com/) and Knockout.js. The Json is created with an HTTP handler created with AVR. This way to return Json isn't as sophisticated as the Json routing library used in the AVR [CRUD single page app](https://github.com/ASNA/AVR-CRUD-Single-Page-App), but it might be a better start application for uses new to creating simple RESTful-like services returning Json. 
