document.addEventListener("DOMContentLoaded", () => {   
    if(document.getElementById("formPopup1")){
        document.getElementById("formPopup1").style.display="none";
    }
    
    if(document.getElementById("formBottomHome")){
        document.getElementById("formBottomHome").style.display="none";
    }
    
    if(document.getElementById("formBottomDogs")){
        document.getElementById("formBottomDogs").style.display="none";
    }

    if(document.getElementById("formBottomCats")){
        document.getElementById("formBottomCats").style.display="none";
    }

    if(document.getElementById("formBottomSmall")){
        document.getElementById("formBottomSmall").style.display="none";
    }
    
})

function openConsultForm(formDiv) {

    console.log(formDiv);

    let d = document.getElementById(`${formDiv}`);

    if (d.style.display == "none") {
        d.style.display = "block";
        console.log("contact form visible");

        if(formDiv != "formPopup1"){
            window.scrollBy(0, 500)
        }
        
    }else if (d.style.display == "block") {
        d.style.display = "none";
        console.log("contact form no longer visible");
    }else{
        console.log("Hmmm? something needs fixing.")
    }


}



function submitForm(f) {
    
    let form = document.getElementById(`${f}`);

    let formData = new FormData(form);

    let data = Object.fromEntries(formData.entries())
    let d = JSON.stringify(data);

    console.log(d.replaceAll("\,", "\n").replaceAll("\{", "\{\n").replaceAll("\}","\n\}"))

}



// console.log(window.location.href)
// console.log(window.location.href.length)

let start = window.location.href.lastIndexOf("/");
let end = window.location.href.length;
let page = window.location.href.slice(start + 1, end);

// console.log(page)
/*
if (!sessionStorage.getItem("path")) {

    sessionStorage.setItem("path", page)
    console.log("path created in session storage")
    console.log(sessionStorage.getItem("path"))

} else {

    let pathway = [];
    console.log("pathway created as variable");
    console.log(pathway);
    
    let storage = sessionStorage.getItem("path");



    pathway.push(storage)
   
    console.log(pathway[0])


    pathway.push(page)
    console.log("page pushed to pathway \n" + pathway)


    console.log(pathway)
    
    sessionStorage.clear();
    console.log("session cleared")
    sessionStorage.setItem("path", pathway)
    console.log(sessionStorage.getItem("path", pathway))


    let x = []
    let y = []
    console.log(pathway)
    for (let i = 0; i < pathway[0].length - 1; i++) {

        if(pathway[0][i] == ",") {
            x.push(i)
        }
        
    }
    console.log(x)

    let p1 = pathway[0].slice(0, x[0])
    y.push(p1)

    for(let i = 0; i < x.length; i++) {
        let pg = pathway[0].slice([x[i]], x[i + 1] -1)
        y.push(pg)
        console.log(pg)

        if (i == x.length) {
            y.push(pathway[0].slice(x[i]),pathway[0].length)
        }
    }

    console.log(y)

}

*/


let pname = page.slice(0, page.indexOf("."))

pname = pname[0].toUpperCase() + pname.slice(1);

console.log(page + "\n" + pname)

window.onload = () => {
    let hist = document.getElementById("history");

    hist.innerHTML = `<a href="index.html">Home</a> > <a href="${page}">${pname}</a>`;

    let active = document.getElementById(pname)

    active.style.color = "white";
    active.style.backgroundColor = "#003B6D";

}
