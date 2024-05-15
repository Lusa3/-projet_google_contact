


// let firstname = document.getElementById('#firstname');
// let name = document.getElementById('#name').value;
// let company = document.getElementById('#company').value;
// let post = document.getElementById('#post').value;
// let email = document.getElementById('#email').value;
// let phone = document.getElementById('#phone').value;



function masquerTousLesContenus() {
    const contenus = document.querySelectorAll('.onglets_content-form, .onglets_content-contact, .onglets_content-frequence');
    contenus.forEach(contenu => {
        contenu.style.display = 'none';
    });
}


function afficherOngletForm() {
    masquerTousLesContenus();
    const contenuForm = document.querySelector('.onglets_content-form');
    contenuForm.style.display = 'block';
}


function afficherOngletContact() {
    masquerTousLesContenus();
    const contenuContact = document.querySelector('.onglets_content-contact');
    contenuContact.style.display = 'block';
}


function afficherOngletFrequence() {
    masquerTousLesContenus();
    const contenuFrequence = document.querySelector('.onglets_content-frequence');
    contenuFrequence.style.display = 'block';
}


const ongletForm = document.querySelector('.onglets-form');
const ongletContact = document.querySelector('.onglets-contact');
const ongletFrequence = document.querySelector('.onglets-frequence');



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
        modifyContact.classList.remove('active');
     } else {
   tabForm.style.display = 'block';
   modifyContact.classList.add('active');
  }
}


ongletForm.addEventListener('click', () => {
    afficherOngletForm();
});

ongletContact.addEventListener('click', () => {
    afficherOngletContact();
});

ongletFrequence.addEventListener('click', () => {
    afficherOngletFrequence();
});

modifyContact.addEventListener('click', modifyTab)
hiddenLibelle.addEventListener('click', hiddenCreateLibelle )
libelleIcon.addEventListener('click', createLibelle )
iconBurger.addEventListener('click',listBurger);
buttonForm.addEventListener('click', resultForm);

// function ContactDisplay () {
//     const contentContact = document.querySelector('.onglets_content-contact');
//     if (contentContact.style.display === 'block') {

//         tabContact.classList.remove('active');
//     } else {
//         contentContact.style.display = 'block';
//         tabContact.classList.add('active');
//     }
// }