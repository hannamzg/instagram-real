let currentScrollPosition = 0;
let scrollAmount = 220;
const sCont  = document.getElementsByClassName("divHavestorysAndAbsolot");
const hScroll = document.querySelector(".divHavePhotosInStorys");
let leftIcon = document.getElementById("diVLeftIcon");
let rightIcon = document.getElementById("diVRightIcon");
let divHaveStoryAndName = document.querySelectorAll(".divHaveStoryAndName");
let  mangerStroy =  new story();
let divHavestorysAndAbsolot = document.querySelector(".divHavestorysAndAbsolot");
let base_api = `https://www.breakingbadapi.com/api/`;
let maxScroll = 0;




async function getNames(){
    let theApi = `${base_api}character/random`
    for (let i = 0; i < 16;i++){
        let afterFetch = await (await fetch(theApi)).json();
        mangerStroy.addStories(afterFetch[0].img, afterFetch[0].name);
    };
    buildTheStories();
    maxScroll = Number (hScroll.offsetWidth) + reternOffSet2();
    
}



getNames()

function buildTheStories(){
    let stories  = mangerStroy.getTheStoryes();
    let stamArr = []
    let html = "";

    for(let key of stories){
         html += `<div class="divHaveStoryAndName" id=${key.id}>
                     <img src="${key.storiesSrc}" alt="" class="photosInStorys"/>
                    <h3 class="theNameOfThePersonOfTheStory">${key.name}</h3>
                </div>`;
        stamArr.push(html)
        
    } 
    /* if(stamArr.length < 5){
        rightIcon.style.display = "none";
    } */
    divHavestorysAndAbsolot.innerHTML = html;
    stam()

}



function stam(){
    let stories  = mangerStroy.getTheStoryes();
    let divHaveStoryAndName = document.getElementsByClassName("divHaveStoryAndName");
    let body = document.querySelector("body");

    for(let i=0 ; i<divHaveStoryAndName.length; i++){
    divHaveStoryAndName[i].addEventListener("click" ,(e)=>{
        for(let j=0; j<stories.length; j++){
        let found = e.path[1].id !== stories[j].id
        let theTarget = e.path[0]
            if(found){
                let div1 = document.createElement("div");
                div1.classList.add("theStroyOpen");
                let img = document.createElement("img");
                img.classList.add("photoStoryOpen")
                img.src = theTarget.src;
                let div2 = document.createElement("div");
                div2.classList.add("closeStoryOpen");
                let svg = document.createElement("svg");
                svg.classList.add("currentColor");
                svg.setAttribute("fill", "currentColor")
                svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                let path = document.createElement("path");
                path.setAttribute("d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z");

                svg.appendChild(path);
                div2.appendChild(svg);
                div1.appendChild(img);
                div1.appendChild(div2);
                body.appendChild(div1);
                    setTimeout(() => {
                        div1.style.display = "none"
                    }, 2000);
                }
           
        }
     })
    }
}





leftIcon.style.display = "none";

function reternOffSet2(){
    for(let i= 0; i<=sCont.length; i++){ 
        return -sCont[i].offsetWidth;
    }
}

function scrollHoriz(val){     
    currentScrollPosition += (val * scrollAmount);
    if(currentScrollPosition >= 0){
        currentScrollPosition = 0;
        leftIcon.style.display = "none";
    }
    else{
        leftIcon.style.display = "block";
    }

    if(currentScrollPosition <= maxScroll) {
        currentScrollPosition = maxScroll;
        rightIcon.style.display = "none";
    }
    else{
        rightIcon.style.display = "block";
    }

    for(let i = 0; i<sCont.length; i++){
        sCont[i].style.left = currentScrollPosition + "px";
    }
    
}


/* for(let i=0; i<divHaveStoryAndName.length; i++){
    divHaveStoryAndName[i].addEventListener("click",()=>{
        main.style.display = "none";
        header.style.display = "none";
        theStroyOpen.style.display = "flex";
    })
}

closeStoryOpen.addEventListener("click", ()=>{
    theStroyOpen.style.display = "none";
    main.style.display = "flex";
    header.style.display = "flex";
})
 */






