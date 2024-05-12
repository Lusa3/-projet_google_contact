const onglets = document.querySelectorAll(".onglets")
const content = document.querySelectorAll(".onglets_content")

let index = 0;

onglets.forEach(onglet => {
    onglet.addEventListener('click', () => {
        if(onglet.classList.contains('active')){
            return;
        } else{
            onglet.classList.add('active');
        }
        index = onglet.getAttribute('data-anim');
        console.log(index);

        for (let i = 0; i < onglets.length; i++) {
           if (parseInt(onglets[i].getAttribute('data-anim')) != index) {
            onglets[i].classList.remove('active');
           }
            
        }
        for(j = 0; j < content.length ; j++){
            if (parseInt(content[j].getAttribute('data-anim')) === index) {
                content[j].classList.add('onglets_content');
            }else{
                content[j].classList.remove('contentactive');
            }
           console.log(content)
        }
    })
})