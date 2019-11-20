
document.addEventListener("DOMContentLoaded", function() {

	let body = document.querySelector("body")
	let content = document.querySelector("#content")

	
})



function create(tag, text, parent, classs=null, id=null) {
    let o = document.createElement(tag)
    if (text != null)
        o.appendChild(document.createTextNode(text))
    if (classs != null)
        o.classList.add(classs)
    if (id != null)
        o.id = id
    parent.appendChild(o)
    return o
}