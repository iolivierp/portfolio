
var currdiv = 0

document.addEventListener("DOMContentLoaded", function() {
    
    //TO DELETE
    let divpos = []
    for (let section of document.querySelectorAll(".sections")) {
        divpos.push(section.offsetTop)
    }
    window.scrollTo(0,divpos[currdiv])


    // may be useless...
    let body = document.querySelector("body")
	let wrap = document.querySelector("#wrapper")

	window.addEventListener('wheel', scrollBlock, false)
    
    loadInterests()
    loadProjects()
    loadContactLogos()
    loadRef()
    formDesign()

})

function loadInterests() {
    let interest_img = document.querySelectorAll("#interests-pics div")
    let interest_desc = document.querySelectorAll("#interests-desc div")
    let img_url = ["reading","playing","music","old"]

    for (let i in img_url) {
        interest_img[i].style.backgroundImage = "url(images/"+img_url[i]+".jpg)"

        interest_img[i].addEventListener("mouseenter", function() {
            for (let desc of interest_desc) {
                desc.style.display = "none"
            }
            interest_desc[i].style.display = "flex"
        })
    }

    interest_desc[0].style.display = "flex"

}

function loadRef() {
    let refs = document.querySelectorAll(".ref-img")
    let img_url = ["ref1","ref2"]

    for (let i in img_url) {
        refs[i].style.backgroundImage = "url(images/"+img_url[i]+".png)"
    }
}

function loadProjects() {
    let projects = document.querySelectorAll(".project-logo")
    let projectimgs = document.querySelectorAll(".project-img")
    let descs = document.querySelectorAll(".project-desc")
    let img_url = ["bdsm","bdsmw","laphotolab","escalapp"]

    for (let i in img_url) {
        projects[i].style.backgroundImage = "url(images/"+img_url[i]+".png)"

        projects[i].addEventListener("click", function() {
            for (let desc of descs) {
                desc.style.display = "none"
            }
            descs[i].style.display = "flex"
        })
    }
    descs[0].style.display = "flex"

    img_url = ["bdsmig","bdsmwig","laphotolab2"]

    for (let i in img_url) {
        projectimgs[i].style.backgroundImage = "url(images/"+img_url[i]+".png)"

        // projectimgs[i].addEventListener("click", function() {

        // })
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

    for (let i in logos) {
        if (logos[i].nodeType == 1) {
            logos[i].style.backgroundImage = "url(images/"+logo_url[i]+".png)"
        } else {
            return
        }
    }
}

function scrollBlock(event) {
	let dir = event.deltaY / Math.abs(event.deltaY)
    currdiv += dir
	let divpos = []

	for (let section of document.querySelectorAll(".sections")) {
		divpos.push(section)
	}
	if (currdiv >= divpos.length) {
		currdiv = divpos.length-1
	} else if (currdiv < 0) {
		currdiv = 0
	}

    if (currdiv == 2 && document.querySelector(".bars").innerText != "") {
        for (let bar of document.querySelectorAll(".bars")) {
            setTimeout(function() {
                bar.style.width = bar.innerHTML * bar.parentNode.offsetWidth / 100 + "px"
                bar.innerText = ""
            },230)
        }
    }

	window.scrollTo(0,divpos[currdiv].offsetTop)

	setTimeout(function() {
		window.addEventListener('wheel', scrollBlock, false)
	}, 250)
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
