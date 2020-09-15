import scrollReveal from 'scrollreveal';


export function animateFun(className,delayTime,originDirection,distanceLength,scaleRatio,resetAgain,callback=()=>{}){
    scrollReveal().reveal(className, {
        // 动画的时长
        duration: 500,
        // 延迟时间
        delay: delayTime,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: originDirection,
        // 回滚的时候是否再次触发动画
        reset: resetAgain,
        // 在移动端是否使用动画
        mobile: true,
        // 滚动的距离，单位可以用%，rem等
        distance: distanceLength,
        // 其他可用的动画效果
        opacity: 0.001,
        easing: 'linear',
        scale: scaleRatio,
        afterReveal:()=>{
            callback()
        }
    })
}
export function animateDes(){
    //scrollReveal().destroy();
    scrollReveal().sync();
}
