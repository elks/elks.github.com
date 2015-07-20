function replace_url(elem, attr) {
    var elems = document.getElementsByTagName(elem);
    for (var i = 0; i < elems.length; i++)
        elems[i][attr] = elems[i][attr].replace('iframed.cqrcengage.com', 'cqrcengage.com');
	for (var i = 0; i < elems.length; i++)
        elems[i][attr] = elems[i][attr].replace('?mode=iframe', '?');
		
}
window.onload = function() {
    replace_url('a', 'href');
	var anchors = document.getElementsByTagName('a');
  for (var i=0; i<anchors.length; i++){
    anchors[i].setAttribute('target', '_blank');

	}
}
