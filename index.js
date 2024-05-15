
//  récuper le class des onglets et le class de leur contenus
let onglets = document.querySelectorAll('.onglets');
let ongletsContent = document.querySelectorAll('.onglets_content');

// créer une function pour active une onglet

function ongletActive(typeOnglet) {

//    créer une boucle pour parcourir les onglets et leur contenus
    onglets.forEach(function(onglet, index) {
    //    afficher ou cache l'onglet qui est active ou qui est affciher à ce moment là
        if (index === typeOnglet) {
            onglet.classList.add('active');
            ongletsContent[index].style.display = 'block';
        } else {
            onglet.classList.remove('active');
            ongletsContent[index].style.display = 'none';
        }
    });
}

// Ajouter un écouteur d'événement à chaque onglet

onglets.forEach(function(onglet, index) {
    onglet.addEventListener('click', function() {
        ongletActive(index);
    });
});
// Activer le premier onglet par défaut
ongletActive(0);


// let firstname = document.getElementById('#firstname');
// let name = document.getElementById('#name').value;
// let company = document.getElementById('#company').value;
// let post = document.getElementById('#post').value;
// let email = document.getElementById('#email').value;
// let phone = document.getElementById('#phone').value;



const buttonForm = document.querySelector('button');
  
    const firstname = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const company = document.getElementById('company').value;
    const post = document.getElementById('post').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const resultFirstName = document.getElementById('resultat_firstname');
    const resultName = document.getElementById('resultat_lastname');
    const resultCompany = document.getElementById('resultat_company');
    const resultPost = document.getElementById('resultat_post');
    const resultEmail =  document.getElementById('resultat_email');
    const resultPhone = document.getElementById('resultat_phone');

function resultForm(){
 resultFirstName.textContent =firstname;
 resultName.textContent = lastName;
 resultCompany.textContent = company;
 resultPost.textContent = post;
 resultEmail.textContent = email;
 resultPhone.textContent = phone;

}

buttonForm.addEventListener('click', resultForm);


const iconBurger = document.querySelector('.menu_hbg');


function listBurger() {
    const containerList = document.querySelector('.menu_containe');
    if (containerList.style.display === 'block') {
        containerList.style.display='none';
    }else {
        containerList.style.display = 'block' ;
    }
}

const libelleIcon = document.querySelector('.icon__libelles__contact')

function createLibelle(){
   const contentLibelle = document.querySelector('.windowdark');
   if (contentLibelle.style.display === 'block') {
    contentLibelle.style.display = 'none'; 
   } else {
    contentLibelle.style.display = 'block';
   }
}

const hiddenLibelle = document.querySelector('.nothing');

function hiddenCreateLibelle(){
    const contentLibelle = document.querySelector('.windowdark');
    if (contentLibelle.style.display === 'block') {
     contentLibelle.style.display = 'none'; 
    } else {
     contentLibelle.style.display = 'block';
    }
}
const modifyContact = document.querySelector('.button')
function modifyTab(){
    const tabForm = document.querySelector('.onglet-content-modify"');
    if (tabForm.style.display === 'block') {
        tabForm.style.display = 'none'; 
       } else {
        tabForm.style.display = 'block';
       }
}



modifyContact.addEventListener('click', modifyTab)
hiddenLibelle.addEventListener('click', hiddenCreateLibelle )
libelleIcon.addEventListener('click', createLibelle )
iconBurger.addEventListener('click',listBurger);
buttonForm.addEventListener('click', resultForm);