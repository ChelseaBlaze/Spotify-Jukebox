
//LATEST FAILED ATTEMPT - using contentDocument instead of getSVGDocument()

var test = document.getElementById("nineties");
var test2 = test.contentDocument;
                                    
console.log(test, test2);


// METHOD ONE - using getSVGDocument() within a class on an object svg

//document.querySelector(".nineties").getSVGDocument().getElementById("songyear").setAttribute("fill", "red");



//METHOD 2 - no querySelector, assign an ID to object instead

//document.getElementById("nineties").getSVGDocument().getElementById("songyear").setAttribute("fill", "red");


//ANOTHER FAILED ATTEMPT

//document.getElementById("songyear").setAttribute("fill", "red");

