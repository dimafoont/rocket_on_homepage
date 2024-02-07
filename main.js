function stars(){
    let count = 18;
    let scene = document.querySelector('.scene');
    let i = 0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * 500);

        let duration = Math.random() * 7 + 0.3;
        let h = Math.random() * 2;

        star.style.left = x + 'px';
        star.style.width = Math.random() * (10 - 4) + 'px';
        star.style.height = star.style.width;

        if (duration < 1.1) {
            star.style.height = 30 + h + 'px';
            star.style.borderRadius = 0;
            star.style.width = 0.5 + 'px';
        } else if (duration > 5) {
            star.style.filter = 'blur(1px)';
        }
        star.style.animationDuration = duration + 's';



        scene.appendChild(star);
        i++
    }
}
stars();