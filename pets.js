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






