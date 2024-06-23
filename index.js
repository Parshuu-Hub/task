document.querySelectorAll(".item").forEach((item)=>{
    item.addEventListener("mouseenter",()=>{
       
        let sourceEle=item.firstChild.firstChild;
       let displayDiv= document.getElementById("display-container");
        let imgElement=displayDiv.firstChild;
        
        imgElement.src=sourceEle.src;
       
       displayDiv.style.display='block';
    })

    item.addEventListener("mouseleave",()=>{
        let displayDiv= document.getElementById("display-container");
       displayDiv.style.display= 'none';
    })
})