window.addEventListener('scroll',popups);

function popups(){
    let popup = document.querySelectorAll('.pop')

    for(let i = 0; i < popup.length; i++){
        let height = window.innerHeight;
        let popupTop = popup[i].getBoundingClientRect().top;
        let popupPoint = 120;

        if(popupTop < height - popupPoint){
            popup[i].classList.add('active');
        }
        else{
            popup[i].classList.remove('active');
        }
    }
}

function sacredPlace(){
    alert("This is a sacred place.")
}