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