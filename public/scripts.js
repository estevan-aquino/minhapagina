const modalOverlay =  document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const mud = document.querySelectorAll('img');


for (let card of cards){
    card.addEventListener("click", function(){
        const videoId= card.getAttribute("id")
        window.location.href=`/video?id=${videoId}`
    })

}

// const close = document.querySelector('.close-modal').addEventListener("click", function(){
//     modalOverlay.classList.remove('active');
//     modalOverlay.querySelector("iframe").src=""

// })

