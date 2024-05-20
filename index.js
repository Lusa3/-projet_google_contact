
function hiddenAllContent() {
    const contents = document.querySelectorAll('.onglets_content-form, .onglets_content-contact');
    contents.forEach(content => {
        content.style.display = 'none';
    });
}


function showOngletForm() {
    hiddenAllContent();
    const contentForm = document.querySelector('.onglets_content-form');
    contentForm.style.display = 'block';
}


function showOngletContact() {
    hiddenAllContent();
    const contentContact = document.querySelector('.onglets_content-contact');
    contentContact.style.display = 'block';
}





const iconBurger = document.querySelector('.menu_hbg');
function listBurger() {
    const containerList = document.querySelector('.menu_containe');
    if (containerList.style.display === 'block') {
        containerList.style.display = 'none';
    } else {
        containerList.style.display = 'block';
    }
}

const libelleIcon = document.querySelector('.icon__libelles__contact')

function createLibelle() {
    const contentLibelle = document.querySelector('.windowdark');
    if (contentLibelle.style.display === 'block') {
        contentLibelle.style.display = 'none';
    } else {
        contentLibelle.style.display = 'block';
    }
}

const hiddenLibelle = document.querySelector('.nothing');

function hiddenCreateLibelle() {
    const contentLibelle = document.querySelector('.windowdark');
    if (contentLibelle.style.display === 'block') {
        contentLibelle.style.display = 'none';
    } else {
        contentLibelle.style.display = 'block';
    }
}


const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const companyInput = document.getElementById('company');
const postInput = document.getElementById('post');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

// fonction pour ajouter un contact
function addNewContact(event) {
    event.preventDefault();
    const contact = {
        id: crypto.randomUUID(),
        nom: firstNameInput.value,
        prenom: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        fonction: postInput.value,
        entreprise: companyInput.value,
        labels: ['maison', 'travail']
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

function showContactsInTable(contacts) {
    contacts.forEach(contact => {
        let tr = createElement('tr', {});
        let tdTitle = createElement('td', {});
        const tdTitleContent = createElement('div', {
            className: 'title-col'
        });
        const contactName = (contact.prenom + " " + contact.nom);
        const contactProfil = createElement('div', {
            className: 'contact-profil',
            textContent: contactName.toUpperCase()[0]
        })

        const name = createElement('span', {
            textContent: contactName
        })
        tdTitleContent.append(contactProfil, name);
        tdTitle.appendChild(tdTitleContent)

        const tdEmail = createElement('td', {
            textContent: contact.email
        })
        const tdPhone = createElement('td', {
            textContent: contact.phone
        })
        const contactFonction = (contact.fonction + " " + contact.entreprise);
        const tdFonction = createElement('td', {
            textContent: contactFonction
        })
        let tdLabels = createElement('td', {})
        const labelList = createLabelList(contact.labels)
        tdLabels.appendChild(labelList)

        tr.append(tdTitle, tdEmail, tdPhone, tdFonction, tdLabels)
        tBodyContactsList.appendChild(tr)
    })

}

//  fonction pour créer une list de label
function createLabelList(labels) {
    let labelsContainer = createElement('div', {
        className: 'contact-labels-container'
    })
    labels.forEach(label => {
        const labelView = createElement('div', {
            className: 'label-view',
            textContent: label
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

// récuperer l'id et la class

const inputText = document.getElementById('text');
const register = document.getElementsByClassName('register')

// créer une function pour ajouter un libellé

function addLibelle() {
    const libelle = {
        text: inputText.value,    // créer un objet qui va contenir le nom que la personne va inscrire sur l'input text 
    }
    libelles.push(libelle)
    showLibelle(libelles)
}

let libelles = [

]; // créer un tableau vide 

function showLibelle(libelles) {
    let groupLabel = createElement('div', {
        className: 'NameLabel'
    })
    libelles.forEach(libelle => {
        let span = createElement('span', {
            textContent: libelle.text,
        })
        groupLabel.appendChild(span)
    })
    return groupLabel;
}
function createElement(type, properties = {}) {
    const element = document.createElement(type);
    Object.assign(element, properties);
    return element;
}
const ongletForm = document.querySelector('.onglets-form');
const ongletContact = document.querySelector('.onglets-contact');
const arrow = document.querySelector('.arrow-form');

arrow.addEventListener('click', () => {
    showOngletContact();
})

ongletForm.addEventListener('click', () => {
    showOngletForm();
});

ongletContact.addEventListener('click', () => {
    showOngletContact();
});
contactForm.addEventListener('submit', function (event) {
    addNewContact(event)
    contactForm.reset()
})
contactForm.addEventListener('submit', function (event) {
    addNewContact(event)
    contactForm.reset()
})
hiddenLibelle.addEventListener('click', hiddenCreateLibelle)
libelleIcon.addEventListener('click', createLibelle)
iconBurger.addEventListener('click', listBurger);