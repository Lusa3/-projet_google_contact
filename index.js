
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

const formulaire = document.getElementById('formulaire-contact');


formulaire.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const firstname = document.getElementById('firstname').value;
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const post = document.getElementById('post').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

  
    document.getElementById('resultat_firstname').textContent = firstname;
    document.getElementById('resultat_name').textContent = name;
    document.getElementById('resultat_company').textContent = company;
    document.getElementById('resultat_post').textContent = post;
    document.getElementById('resultat_email').textContent = email;
    document.getElementById('resultat_phone').textContent = phone;
    
    const resultatDiv = document.getElementById('resultat');

    resultatDiv.innerHTML = resultatHtml;
});