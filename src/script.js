const navDialog=document.getElementById("nav-dialog")
function handleMenu(){
    navDialog.classList.toggle('hidden')
}
const initialTranslateLTR=-48*4;
const initialTranslateRTL=36*4;
function setupIntersectionObserver(element,isLTR,speed){
    const istersectionCallBack=(entries)=>{
        const isIntersecting=entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler)
        }
        else{
            document.removeEventListener('scroll',scrollHandler)
        }
    }
    const intersectionObserver=new IntersectionObserver(istersectionCallBack)
    intersectionObserver.observe(element)

    function scrollHandler(){
        const translateX=(window.innerHeight-element.getBoundingClientRect().top)*speed;
        if(isLTR){
            totalTranslate=translateX +initialTranslateLTR
        }else{
            totalTranslate=-(translateX+initialTranslateRTL)
        }
        element.style.transform=`translateX(${totalTranslate}px)`
    }
}

const line1=document.getElementById('line1')
const line2=document.getElementById('line2')
const line3=document.getElementById('line3')
const line4=document.getElementById('line-4')


setupIntersectionObserver(line1,true,0.15)
setupIntersectionObserver(line2,false,0.15)
setupIntersectionObserver(line3,true,0.15)
setupIntersectionObserver(line4,true,0.8)

const dtElement=document.querySelectorAll("dt")

// dtElement.forEach(element=>{
//     element.addEventListener("click" ,function(){
//         const ddId=element.getAttribute('aria-controls')
//         const ddElement=document.getElementById(ddId)
//         const ddArrowIcon=element.querySelector('i')
//         ddElement.classList.toggle('hidden')
//         ddArrowIcon.classList.toggle('rotate-180')
//     })

// })

const accordian=document.querySelectorAll("#accordian")

accordian.forEach(element=>{
    element.addEventListener("click",function(){
        let openAccordian=element.querySelector("#accordianopner")
        openAccordian.classList.toggle('hidden')
        let rotateArrow=element.querySelector("#accordionarrow")
        rotateArrow.classList.toggle('rotate-180')
    })
})