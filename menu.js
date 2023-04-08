console.log("isrunning")
// console.log(document.querySelector("#waffles-dropdown"))
document.querySelectorAll('.sele').forEach((item) => {
    item.addEventListener("click",function(){
        console.log(item)
        openDrop(item)}, "true");
    
})
document.querySelectorAll('.drop').forEach((item) => {
    item.setAttribute("tabindex",2);
    
})
document.querySelectorAll('.popup').forEach((item) => {
    item.setAttribute("tabindex",1);
    
})


function openDrop(item){
    console.log(document.activeElement)
    let ID=item.id;
    item.children[0].blur()
    item.parentNode.blur()

    let targetId= "#"+ID+"-dropdown"
    console.log(targetId)
    let target=document.querySelector(targetId);
    console.log(target.className)
    let targetClass="."+target.className;
    let popup=target.querySelectorAll(".popup")[0]
    // targetId="#"target.id

    
    
    console.log(popup)
    console.log(document.activeElement)

    
    popup.style.display="block"
    popup.style.opacity=1
    console.log(popup.style.display)
    console.log(popup.style.opacity)
    

    target.style.display="block"
    target.style.opacity=1
    target.style.background="rgba(0, 0, 0, 0.75)"

    
    console.log(document.activeElement)
    popup.addEventListener("focus",function(){appear(target,popup)}, "true")
    setTimeout(()=>{popup.focus()},0)
    console.log(document.activeElement)
}
function appear(target,popup){
    setTimeout(()=>{popup.focus()},0)
    console.log("appear test")

    console.log(document.activeElement)
    document.querySelectorAll('.close').forEach((item) => {
        item.addEventListener("click",function(){close(target,popup)}, "false");
    })
    target.addEventListener("keydown", ()=> {
        console.log(event.keyCode)
        if(event.keyCode == 27|| event.keyCode==8) {
        close(target,popup)
    }},"true")

    popup.style.display="block"
    popup.style.opacity=1
    console.log(popup.style.display)
    console.log(popup.style.opacity)
    

    target.style.display="block"
    target.style.opacity=1
    target.style.background="rgba(0, 0, 0, 0.75)"
    // function keyPress (e) {
        
    // }
    // popup.addEventListener("blur",()=>{close(target,popup)})
    target.addEventListener("click",()=>{
        console.log((document.activeElement==popup))
        if((document.activeElement!=popup)){
            close(target,popup)
        }
        },"true")

    
}
function close(target,popup){

    // console.log(document.activeElement)
    popup.style.display="none"
    popup.style.opacity=0
    console.log(popup.style.display)
    console.log(popup.style.opacity)
    
    let x=target.parentNode.querySelectorAll(".drop")
    console.log(x)

    target.style.display="none"
    target.style.opacity=0
    target.style.background="rgba(0, 0, 0, 0.00)"
    // popup.removeEventListener("blur",()=>{close(target,popup)})

}

