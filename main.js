let $ = document.querySelector.bind(document);
let data =[
    {
        pattern: "./pattern/pattern-product_2.patt",
        src:"./images/test.gif",
        position:"-1 0 0",
        rotation:"-90 0 0"

    },
    {
        pattern: "./pattern/pattern-Test QR-Code.patt",
        src:"./images/tam.jpg",
        position:"-1 0 0",
        rotation:"-90 0 0"
    }

]
window.addEventListener("DOMContentLoaded",()=>{

    AFRAME.registerComponent('markers_start',{
        init:function(){
            let ascene = $("a-scene")
            console.log(ascene)
            let contentHtml = "";
            data.forEach(e => {
                contentHtml += `
                <a-marker type='pattern' url='${e.pattern}'>
                <a-image src="${e.src}" position="${e.position}" rotation="${e.rotation}" scale="" visible="" material="" geometry=""></a-image>
                
                </a-marker>
                
                `
            })
            ascene.innerHTML = "<a-entity camera></a-entity>"+ contentHtml;
        }
    })
   
})
{/* <a-image src="${e.src}" position="${e.position}" rotation="${e.rotation}"></a-image> */}
