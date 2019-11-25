
document.addEventListener("DOMContentLoaded", function() {

	let body = document.querySelector("body")
	let wrap = document.querySelector("#wrapper")

	window.scrollTo(0,0)

	window.addEventListener('wheel', scrollBlock, false)


})

function scrollBlock(event) {
	let dir = event.deltaY / Math.abs(event.deltaY)
	let currentdiv = document.querySelector("div")
	let divpos = []

	for (let section of document.querySelectorAll(".sections")) {
		divpos.push(section.offsetTop)
	}
	let index = parseFloat(currentdiv.innerHTML) + dir
	if (index >= divpos.length) {
		index = 3
	} else if (index < 0) {
		index = 0	
	}

	currentdiv.innerHTML = index

	window.scrollTo(0,divpos[index])

	setTimeout(function() {
		window.addEventListener('wheel', scrollBlock, false)
	}, 300)
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
