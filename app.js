const carousel =document.querySelector('.carousel');
let sliders=[]
let slideIndex=0;
const createSlide=()=>{
    if(slideIndex>=movies.length()) 
    {
        slideIndex=0;
    }
    //creating DOM element
    let slide=document.createElement('div');
    let imageElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');
    // attaching all element 
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
   p.appendChild(document.createTextNode(movies[slideIndex].des));
   content.appendChild(h1);
   content.appendChild(p);
   content.appendChild(content);
   content.appendChild(imageElement);
   carousel.appendChild(slide);

   //setting up an image
    imgElement.src=movies[slideIndex].image;
    slideIndex++;
    //setting element className
    slide.classame='slider';
    content.className='slide-content';
    h1.className='movie-title';
    p.className='movie-des';
    sliders.push(slide);
    //adding slide effect
    if(sliders.length)
{
    sliders[0].style.marginleft=`calc(-${100*(sliders.length-2)}-${30*(sliders.length-2)}px)`
}}
for(let i=0;i<3;i++)
{

    createSlide();
}
setInterval(() => {
    createSlide();
}, 3000);
//video card
const videocards=[...document.querySelectorAll('.video-card')];
videocards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    })
})