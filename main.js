
document.addEventListener("DOMContentLoaded", function() {
    
    //TO DELETE
    let divpos = []
    for (let section of document.querySelectorAll(".sections")) {
        divpos.push(section.offsetTop)
    }
    window.scrollTo(0,divpos[document.querySelector("div").innerHTML])


    // may be useless...
    let body = document.querySelector("body")
	let wrap = document.querySelector("#wrapper")

	window.addEventListener('wheel', scrollBlock, false)
    
    formDesign()
    loadProjects()
    loadContactLogos()

})

function loadProjects() {
    let projects = document.querySelectorAll(".project-img")
    let descs = document.querySelectorAll("#desc div")
    let img_url = ["bdsm","bdsmw","laphotolab","fnac"]

    for (let index in img_url) {
        projects[index].style.backgroundImage = "url(images/"+img_url[index]+".png)"
        
        projects[index].addEventListener("click", function() {
            // console.log(descs[index])
            for (let desc of descs) {
                desc.style.display = "none"
            }
            descs[index].style.display = "block"
        })
    }
}

function formDesign() {
    let inputs = document.querySelectorAll("input,textarea")
    for (let input of inputs) {
        input.addEventListener("focus",function() {
            input.style.boxShadow = "3px 3px orange"
        })
        input.addEventListener("focusout",function() {
            input.style.boxShadow = "3px 3px transparent"
        })
    }
}

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

    if (index == 2 && document.querySelector(".bars").innerText != "") {
        for (let bar of document.querySelectorAll(".bars")) {
            setTimeout(function() {
                bar.style.width = bar.innerHTML * bar.parentNode.offsetWidth / 100 + "px"
                bar.innerText = ""
            },230)
        }
    }
    //-------------OU---------------
    // if (index == 2) {
    //     for (let bar of document.querySelectorAll(".bars")) {
    //         setTimeout(function() {
    //             bar.style.width = bar.innerHTML * bar.parentNode.offsetWidth / 100 + "px"
    //             //bar.innerHTML = ""
    //             bar.style.color = "orange"
    //         },230)
    //     }
    // } else {
    //      for (let bar of document.querySelectorAll(".bars")) {
    //             bar.style.width = 0
    //     }
    // }

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
