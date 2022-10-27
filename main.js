let slideShow = document.getElementById("slideShow");
let arraySlide = [ 
    `<img src="img/slideShow1.webp" style="width: 100%; height: 100%" alt="slideContent" />`,
`<img src="img/slideShow2.webp" style="width: 100%; height: 100%" alt="slideContent" />`,
`<img src="img/slideShow3.webp" style="width: 100%; height: 100%" alt="slideContent" />`,
`<img src="img/slideShow4.webp" style="width: 100%; height: 100%" alt="slideContent" />`,
`<img src="img/slideShow5.webp" style="width: 100%; height: 100%" alt="slideContent" />`
];
let i = 0 ;
function slide(){
    slideShow.innerHTML=arraySlide[i%arraySlide.length];
    i++;
    
}
setInterval(slide , 5000);