
document.addEventListener("DOMContentLoaded", function() {
    
    //TO DELETE
    let divpos = []
    for (let section of document.querySelectorAll(".sections")) {
        divpos.push(section.offsetTop)
    }
    window.scrollTo(0,divpos[document.querySelector("div").innerHTML])

    let body = document.querySelector("body")
	let wrap = document.querySelector("#wrapper")

	window.addEventListener('wheel', scrollBlock, false)
    window.addEventListener('wheel',firstScroll)


})

function firstScroll() {
    for (let bar of document.querySelectorAll(".bars")) {
        setTimeout(function() {
            bar.style.width = bar.innerHTML * bar.parentNode.offsetWidth / 100 + "px"
            bar.innerHTML = ""
        },230)
    }
    window.removeEventListener('wheel', firstScroll)
}

function scrollBlock(event) {
	let dir = event.deltaY / Math.abs(event.deltaY)
	let currentdiv = document.querySelector("div")
	let divpos = []

	for (let section of document.querySelectorAll(".sections")) {
		divpos.push(section)
	}
	let index = parseFloat(currentdiv.innerHTML) + dir
	if (index >= divpos.length) {
		index = divpos.length-1
	} else if (index < 0) {
		index = 0
	}

	currentdiv.innerHTML = index

	window.scrollTo(0,divpos[index].offsetTop)

	setTimeout(function() {
		window.addEventListener('wheel', scrollBlock, false)
	}, 400)
	window.removeEventListener('wheel', scrollBlock, false)
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
