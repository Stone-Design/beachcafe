let element;
let pageNum = 0;

function getValue(myValue){
    pageNum = "menu-item--page" + myValue;
    console.log(pageNum);
    changePageState();
    return pageNum;
}

console.log(pageNum);

function changePageState() {
    if(pageNum === "menu-item--page0"){
        for (i = 1; i <= 6; i++) {
            element = document.querySelector("#menu-item--page" + i);
            if(element.classList.contains("isVisible")) {
                document.getElementById("menu-item--page" + i).classList.remove("isVisible"); 
                document.getElementById("menu-item--page" + i).classList.add("isNotVisible");
                document.getElementById("background-img").classList.remove("header-body--img_blur");
            }
        } 
    } else {
        for (i = 1; i <= 6; i++){
            element = document.querySelector("#menu-item--page" + i);
            if(element.classList.contains("isVisible")) {
                document.getElementById("menu-item--page" + i).classList.remove("isVisible");
                document.getElementById("menu-item--page" + i).classList.add("isNotVisible");
            }
        }
        document.getElementById(pageNum).classList.add("isVisible");
        document.getElementById(pageNum).classList.remove("isNotVisible");
        document.getElementById("background-img").classList.add("header-body--img_blur");
    }
}