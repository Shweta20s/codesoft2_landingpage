const btns=document.querySelectorAll('.buttons button');
const imgs=document.querySelectorAll('.grid-wrapper .pic');
for(let i =1 ; i< btns.length ; i++){
 btns[i].addEventListener('click',filterImg);
}

function setActiveBtn(e){
 btns.forEach(btn => {
     btn.classList.remove('btn-clicked');
 });
 e.target.classList.add('btn-clicked');
}

function filterImg(e){
 setActiveBtn(e);
 imgs.forEach(img =>{
     img.classList.remove('img-shrink');
     img.classList.add('img-expand');
     const imgType = parseInt(img.dataset.img);
     const btnType= parseInt(e.target.dataset.btn);
     if(imgType!== btnType){
         img.classList.remove('img-expand');
         img.classList.add('img-shrink');
     }
 });
}
btns[0].addEventListener('click' , (e)=>{
 setActiveBtn(e);
 imgs.forEach(img=>{
     img.classList.remove('img-shrink');
     img.classList.add('img-expand');
 });
});

//Image //

   //Image //
   $(document).ready(function(){
    $('.gallery').magnificPopup({
       delegate:'a',
       type:'image',
       gallery:{
         enabled:true
       }
    });
  });

  document.addEventListener("scroll",function()
  {
     const navbar=document.querySelector(".navvvv");
     const navbarHeight= 100;
     const distancetop=Math.abs(
        document.body.getBoundingClientRect().top
     );
     if(distancetop >=navbarHeight) navbar.classList.add("fixed-top");
     else navbar.classList.remove("fixed-top");
  });

  let title = document.querySelector('.mainhead');
  let mainh = document.querySelector('.mainhead span');
  let namee = " WHY GATHER & GRAZE ?";
  let index =1 ;

const typewriter = () =>
{
    let new_title = namee.slice(0,index);

    // index++;
    index > namee.length ? index = 1 : index++;
    title.innerHTML = new_title;

     setTimeout(() => typewriter(), 700)
}
typewriter();



//parallax
let onepic = document.getElementById('one');
let twopic = document.getElementById('two');
let threepic = document.getElementById('three');
let fourpic = document.getElementById('four');
let fivepic = document.getElementById('five');
let maintitle = document.getElementById('mainh');

window.addEventListener('scroll', () =>
{
    let value =window.scrollY;

    onepic.style.left= value * 0.5 + 'px';
    twopic.style.right= value * 1 + 'px';
    three.style.top= value * -1 + 'px';
    fourpic.style.left= value * - 0.5 + 'px';
    fivepic.style.bottom= value * - 0.3 + 'px';
    maintitle.style.marginTop = value * 1.5 + 'px';
})