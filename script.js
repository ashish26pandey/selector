// 2
var active =3;
var mncircles = document.querySelectorAll(".mncircle");

// 5
var sec = document.querySelectorAll(".sec");

gsap.to(mncircles[active-1], {
    opacity: .5
 })

// 5
gsap.to(sec [active-1] ,{
    opacity: 1
 })

// 3
mncircles.forEach(function(val, index){
    val.addEventListener("click", function(){
        gsap.to("#circle", {
            rotate: (3-(index+1))*10,
            ease: Expo.easeInOut,
            duration: 1
        })

        // 5
        grayout();
        gsap.to(this, {
            opacity: .5
        })

        // 7
        gsap.to(sec[index],{
            opacity:1
        })
    })
 })

// 4
function grayout(){
    gsap.to(mncircles, {
        opacity: .08
    })
    
    // 6
    gsap.to(sec, {
        opacity: .4
    })
}

// 1 
gsap.to("#circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})