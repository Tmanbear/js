var changePictureTo = function(pictureAddr) {
	var targets = $("img");
	targets.attr("src", pictureAddr);
	console.log("done");
	console.log("updated all img tag href attributes to " + pictureAddr);
}
