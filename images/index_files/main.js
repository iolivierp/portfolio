
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

    let inputs = document.querySelectorAll("input,textarea")

    for (let input of inputs) {
        input.addEventListener("focus",function() {
            input.style.borderBottom = "solid 3px orange"
        })
        input.addEventListener("focusout",function() {
            input.style.borderBottom = "solid 3px transparent"
        })
    }

    loadContactLogos()

})

function loadContactLogos() {
    let logo_url = ["github","linkedin","fb"]
    let logos = document.querySelectorAll(".logo")

    for (let index in logos) {
        if (logos[index].nodeType == 1) {
            logos[index].style.backgroundImage = "url(images/"+logo_url[index]+".png)"
        } else {
            return
        }
    }
}

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
