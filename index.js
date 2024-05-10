const onglets = document.querySelectorAll(".onglets")
const contentOne = document.getElementById('.onglets_content-one')
const contentTwo = document.getElementsByClassName('.onglets_content-two')
const contentThree = document.getElementsByClassName('.onglets_content-three')
const content = document.querySelectorAll('.content-active')

let f = 0;
let index = 0;
onglets.forEach( onglet => {
  
        index = onglet.getAttribute('data-anim');
     console.log(index);

     for(let i = 0; i < onglets.length; i++){
       if (onglets[i].getAttribute('data-anim') != index) {
        onglets[i].classList.remove('active');
       }
     }
    
   
    
   
    })


// onglets.forEach( () => {
//     create-contact.addEventListener('click', () => {
//         if(create-contact.classList.contains('active')){
//             return;
//         } else{
//             create-contact.classList.add('active');
//         }
//         index = create-contact.getAttribute('data-anim');
//         console.log(index);

//         for (let i = 0; i < onglets.length; i++) {(                                                  )
//            if (onglets[i].getAttribute('data-anim') != index) {
//             onglets[i].classList.remove('active');
//     )}
            
//         }
    //     for(j = 0; j < content.length ; j++){
    //         if (content[j].getAttribute('data-anim') == index) {
    //             content[j].classList.add('onglets_content');
    //         }else{
    //             content[j].classList.remove('onglets_content');
    //         }
    //        console.log(content)
    //     }
    // })
// })