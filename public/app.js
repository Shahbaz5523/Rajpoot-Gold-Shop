let addToCart = (e)=>{
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

btn.onclick=()=>{
  cartBox.classList.add('hideCart');
  cartBox.classList.remove('showCart');
}
cartBtn.onclick = ()=>{
  cartBox.classList.add('showCart');
  cartBox.classList.remove('hideCart');
}
countItems.onclick = ()=>{
  cartBox.classList.add('showCart');
  cartBox.classList.remove('hideCart');
}



// Dragable

//Make the DIV element draggagle:
dragElement(document.getElementById("cartBox"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("carthead")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("carthead").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
