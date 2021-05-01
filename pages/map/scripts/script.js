const change = document.getElementById("change");
const h1Black = document.getElementsByTagName('h1');
const pBlack = document.getElementsByTagName('p');
const navBlack = document.getElementsByClassName('header__content_menu_item_link');
const darkBg = document.getElementsByClassName('darkBg');
const navActive = document.getElementsByClassName('active');
const work =  document.getElementsByClassName('works');
const titledark = document.getElementsByClassName('titledark');
const pDark = document.getElementsByClassName('dark');
const spanDark = document.getElementsByClassName("spandark");
const grayBg = document.getElementsByClassName("gray");
const mapColor = document.getElementsByClassName("map__content");
const round = document.getElementsByClassName("round");
change.addEventListener('click', () => {
    change.classList.toggle('black');
    console.log(change);
    if(change.classList.contains('black')){
        // section BG
        for( let j=0; j<darkBg.length; j++){
            darkBg[j].style.backgroundColor = "#333333";
        }
        for( let y=0; y<grayBg.length; y++){
            grayBg[y].style.backgroundColor = "#828282";
        }
        // HEADER 
       for(let i=0; i<h1Black.length; i++){
        h1Black[i].style.color = "white";
        }
        for(let k=0; k<navBlack.length; k++){
            navBlack[k].style.color = "white";
        }
        navActive[0].style.borderBottomColor = "white";
        round[0].classList.add("black");
        
        
        for(let i=0; i<titledark.length; i++){
            titledark[i].style.color = "white";
        }
        for(let j=0; j<pDark.length; j++){
        pDark[j].style.color = "#F2F2F2";
        }
        for(let j=0; j<spanDark.length; j++){
            spanDark[j].style.backgroundColor = "#F2F2F2";
        }
        // MAP
        mapColor[0].classList.remove('darknes');
        mapColor[0].classList.add('gray');
    }
    else{
        // section BG
        for( let j=0; j<darkBg.length; j++){
            darkBg[j].style.backgroundColor = "white";
        }
        for( let w=0; w<grayBg.length; w++){
            grayBg[w].style.backgroundColor = "#F2F2F2";
        }

        // HEADER
        round[0].classList.remove("black");
        for(let i=0; i<h1Black.length; i++){
            h1Black[i].style.color = "#333333";
        }
        
        for(let k=0; k<navBlack.length; k++){
            navBlack[k].style.color = "black";
        }
        navActive[0].style.borderBottomColor = "black";

        for(let i=0; i<titledark.length; i++){
            titledark[i].style.color = "#333333";
        }
        for(let j=0; j<pDark.length; j++){
            pDark[j].style.color = "#4F4F4F";
        }
        for(let j=0; j<spanDark.length; j++){
            spanDark[j].style.backgroundColor = "#4F4F4F";
        }
        // MAP
        mapColor[0].classList.remove('gray');
        mapColor[0].classList.add('darknes');
    }
});