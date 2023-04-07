console.log("isrunning")
// console.log(document.querySelector("#waffles-dropdown"))
document.querySelectorAll('.sele').forEach((item) => {
    item.addEventListener("click",function(){ openDrop(item)}, "true");
    
})


function openDrop(item){
    console.log(document.activeElement)
    let ID=item.id;
    item.children[0].blur()
    // item.parentNode.blur()

    let targetId= "#"+ID+"-dropdown"
    let target=document.querySelector(targetId);
    let targetClass="."+target.className;
    let popup=target.querySelectorAll(".popup")[0]
    // targetId="#"target.id

    console.log(targetId)
    console.log(target.className)
    console.log(popup)
    console.log(document.activeElement)

    
    popup.style.display="block"
    popup.style.opacity=1
    console.log(popup.style.display)
    console.log(popup.style.opacity)
    
    let x=target.parentNode.querySelectorAll(".drop")
    console.log(x)

    x[0].style.display="block"
    x[0].style.opacity=1
    x[0].style.background="rgba(0, 0, 0, 0.75)"
    console.log(x[0].style.display)
    console.log(x[0].style.opacity)
    popup.focus()
    appear(target,popup)
    popup.addEventListener("click",function(){appear(target,popup)}, "true")
    console.log(document.activeElement)
    
    
      
    
}
function appear(target,popup){
    console.log("click")
    popup.focus()
    console.log(document.activeElement)
    document.querySelectorAll('.close').forEach((item) => {
        item.addEventListener("click",function(){close(target,popup)}, "true");
        
    })
    target.addEventListener("focus",function(){close(target,popup)}, "false")

    
}
function close(target,popup){
    
    popup.style.display="none"
    popup.style.opacity=0
    console.log(popup.style.display)
    console.log(popup.style.opacity)
    
    let x=target.parentNode.querySelectorAll(".drop")
    console.log(x)

    x[0].style.display="none"
    x[0].style.opacity=0
    x[0].style.background="rgba(0, 0, 0, 0.00)"

}

