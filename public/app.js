onscroll = ()=>{
    if(scrollY > 200){
        gotop.style.display='block';
    }else{
        gotop.style.display='none';
    }
}


var count = 1;

let right = () => {
    console.log(count)
    if (count === 1) {
        sliderBackground.style.width = '0%';
        sliderBackground2.style.width = '100%';
        count = 2;
        // This is used for Complete the first Img Transition and then enable to change next
        rightBtn.setAttribute('onclick', '');
        setTimeout(() => {
            rightBtn.setAttribute('onclick', 'right()');
        }, 1700);
    } else if (count === 2) {
        sliderBackground2.style.width = '0%';
        sliderBackground3.style.width = '100%';
        count = 3;

        // This is used for Complete the first Img Transition and then enable to change next
        rightBtn.setAttribute('onclick', '');
        setTimeout(() => {
            rightBtn.setAttribute('onclick', 'right()');
        }, 1700);
    }else if(count === 3){
        sliderBackground3.style.width = '0%';
        sliderBackground4.style.width = '100%';
        count = 4;
        // This is used for Complete the first Img Transition and then enable to change next
        rightBtn.setAttribute('onclick', '');
        setTimeout(() => {
            rightBtn.setAttribute('onclick', 'right()');
        }, 1700);
    }else {
        console.log(count);
        rightBtn.style.boxShadow = "0px 0px 20px 0px red";
        setTimeout(() => {
            rightBtn.style.boxShadow = "0px 0px 20px 0px black";
        }, 500);
    }
}

let left = () => {
    if(count === 4){
        console.log(count);
        sliderBackground4.style.width = '0%';
        sliderBackground3.style.width = '100%';
        count = 3;

        // This is used for Complete the first Img Transition and then enable to change next
        leftBtn.setAttribute('onclick', '');
        setTimeout(() => {
            leftBtn.setAttribute('onclick', 'left()');
        }, 1700);
    }else if (count === 3) {
        console.log(count);
        sliderBackground3.style.width = '0%';
        sliderBackground2.style.width = '100%';
        count = 2;

        // This is used for Complete the first Img Transition and then enable to change next
        leftBtn.setAttribute('onclick', '');
        setTimeout(() => {
            leftBtn.setAttribute('onclick', 'left()');
        }, 1700);
    } else if (count === 2) {
        console.log(count);
        sliderBackground2.style.width = '0%';
        sliderBackground.style.width = '100%';
        count = 1;

        // This is used for Complete the first Img Transition and then enable to change next
        leftBtn.setAttribute('onclick', '');
        setTimeout(() => {
            leftBtn.setAttribute('onclick', 'left()');
        }, 1700);
    } else {
        console.log(count);
        leftBtn.style.boxShadow = "0px 0px 20px 0px red";
        setTimeout(() => {
            leftBtn.style.boxShadow = "0px 0px 20px 0px black";
        }, 500);
    }
}
