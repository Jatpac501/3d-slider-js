const slider = document.querySelector('.container');
const sliderPhoto = document.querySelectorAll('.photo');
const controls = document.querySelector('.controls');
let deg1 = 0;
let deg2 = 0;
controls.addEventListener('click', (e) => {
    console.log(e.target.classList.value);
    if (e.target.classList.value === 'next') {
        for (let i = 0;i < sliderPhoto.length;i++) {
            deg1 += 60;
            sliderPhoto[i].style.transform = `rotateY(${deg1}deg)`;
        }
        deg2 = deg1;
        deg1 -= 60*5;
    } else if (e.target.classList.value === 'prev') {
        for (let i = sliderPhoto.length;i > 0;i--) {
            deg2 -= 60;
            sliderPhoto[i-1].style.transform = `rotateY(${deg2}deg)`;
        }
        deg1 = deg2;
        deg2 += 60*5;
    }
});