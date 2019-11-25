
document.addEventListener("DOMContentLoaded", function() {

	let body = document.querySelector("body")
	let wrap = document.querySelector("#wrapper")

	window.addEventListener('wheel', scrollBlock, false)


})

function scrollBlock(event) {
	let dir = event.deltaY / Math.abs(event.deltaY)

	console.log(dir)

	setTimeout(function() {
		console.log("end")
		window.addEventListener('wheel', scrollBlock, false)
	}, 1000)
	window.removeEventListener('wheel', arguments.callee, false)
}

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