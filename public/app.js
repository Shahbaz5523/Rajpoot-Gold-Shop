let addToCart = ()=>{
    countItems.innerText = Number(countItems.innerText) + 1;
}

onscroll = ()=>{
    if(scrollY > 200){
        gotop.style.display='block';
    }else{
        gotop.style.display='none';
    }
}

let heartChanged = (e)=>{
    if(e.target.classList[0] == "black"){
        e.target.classList.remove('black');
        e.target.src="imgs/heart/icons8-heart-64.png";
    }else{
        e.target.src="imgs/heart/icons8-heart-64 (2).png";
        e.target.classList.add('black');
    }
}

menu.onclick=()=>{
    ul.classList.toggle('shownav');
    hover.classList.toggle('shownav');
}

let hoverEffect = (e)=>{
    if(window.innerWidth <= 864){
        hoverH2.innerText = e.target.innerText;
    }
}
let removeEffect = ()=>{
        hoverH2.innerText = "";
}