var imgList =Array.from(document.querySelectorAll('.item img'));
var boxContainer = document.querySelector('.box');
var boxItem = document.querySelector('.boxitem');
var currentSlideIndex = 0;
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');
var closeBtn = document.getElementById('close');

for (var i=0 ; i<imgList.length ; i++)
{
    imgList[i].addEventListener('click', function(e){
       var imgSrc = e.target.getAttribute('src');
        currentSlideIndex = imgList.indexOf(e.target);
        boxItem.style.backgroundImage = `url(${imgSrc})`;
        boxContainer.classList.replace('d-none' , 'd-flex');

    
    })
}


function nextSlide ()
{
    currentSlideIndex ++ ;
    if (currentSlideIndex == imgList.length)
    {
        currentSlideIndex = 0;
    }
    var imgSrc= imgList[currentSlideIndex].getAttribute('src');
    boxItem.style.backgroundImage = `url(${imgSrc})`;
}

nextBtn.addEventListener('click' , nextSlide );



function prevSlide ()
{
    currentSlideIndex -- ;
    if (currentSlideIndex < 0)
    {
        currentSlideIndex = imgList.length -1;
    }
    var imgSrc= imgList[currentSlideIndex].getAttribute('src');
    boxItem.style.backgroundImage = `url(${imgSrc})`;
}

prevBtn.addEventListener('click' , prevSlide );


closeBtn.addEventListener('click' , function()
{
    boxContainer.classList.replace('d-flex' , 'd-none')
})