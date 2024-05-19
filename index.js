// récuper le class des onglets et le class de leur contenus
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


const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const companyInput= document.getElementById('company');
const postInput = document.getElementById('post');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

// fonction pour ajouter un contact
function addNewContact (event) {
    event.preventDefault();
    const contact = {
        id : crypto.randomUUID(),
        nom :firstNameInput.value,
        prenom : lastNameInput.value,
        email : emailInput.value,
        phone : phoneInput.value,
        fonction : postInput.value,
        entreprise : companyInput.value,
        labels : ['maison', 'travail']
    };
    contacts.push(contact)
    showContactsInTable(contacts)
}

const contactForm = document.getElementById('formulaire-contact')
const tBodyContactsList = document.getElementById('contact-list');

//  créer un tableau qui contiendra tout le contact
let contacts = [

];
showContactsInTable(contacts)
// afficher la liste de contact dans la table html

 function showContactsInTable (contacts) {
   contacts.forEach(contact =>{
    let tr = createElement('tr', {});
    let tdTitle = createElement('td', {});
    const tdTitleContent = createElement('div', {
        className : 'title-col'
    });
    const contactName = (contact.prenom + " " + contact.nom);
    const contactProfil = createElement('div', {
        className : 'contact-profil',
        textContent : contactName.toUpperCase()[0]
    })
   
    const name = createElement('span',{
        textContent : contactName
    })
    tdTitleContent.append(contactProfil, name);
    tdTitle.appendChild(tdTitleContent)

    const tdEmail = createElement('td', {
        textContent : contact.email
    })
    const tdPhone = createElement('td',{
        textContent : contact.phone
    })
    const contactFonction = (contact.fonction + " " + contact.entreprise);
    const tdFonction = createElement('td',{
        textContent : contactFonction
    })
    let tdLabels = createElement('td',{})
    const labelList = createLabelList(contact.labels)
    tdLabels.appendChild(labelList)

    tr.append(tdTitle,tdEmail,tdPhone,tdFonction,tdLabels)
    tBodyContactsList.appendChild(tr)
   })
   
 }

//  fonction pour créer une list de label
function createLabelList (labels) {
    let labelsContainer = createElement('div',{
        className : 'contact-labels-container'
    })
    labels.forEach(label =>{
        const labelView = createElement('div', {
            className : 'label-view',
            textContent : label
        })
        labelsContainer.appendChild(labelView)
    })
    return labelsContainer
}

 function createElement(type, properties = {}) {
    const element = document.createElement(type);
    Object.assign(element, properties);
    return element;
}





contactForm.addEventListener('submit',function (event){
    addNewContact(event)
    contactForm.reset()
})
hiddenLibelle.addEventListener('click', hiddenCreateLibelle )
libelleIcon.addEventListener('click', createLibelle )
iconBurger.addEventListener('click',listBurger);