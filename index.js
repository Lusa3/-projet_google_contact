
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

// on recuper la class du formulaire

const formulaire = document.getElementById('formulaire-contact');

// on créer un event sur le formulaire (le boutton submit ce trouve a l'interieur du formulaire)
formulaire.addEventListener('submit', function(event) {
    event.preventDefault();

    // on recupere les id du formulaire et on value permet de recuperer les valeur inscrite au formulaire et affiche (source openclassroms)
    const firstname = document.getElementById('firstname').value;
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const post = document.getElementById('post').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

//   on recupere les id de la class resultat  le connecte avec les variable ou on a recuperer les informations
    document.getElementById('resultat_firstname').textContent = firstname;
    document.getElementById('resultat_name').textContent = name;
    document.getElementById('resultat_company').textContent = company;
    document.getElementById('resultat_post').textContent = post;
    document.getElementById('resultat_email').textContent = email;
    document.getElementById('resultat_phone').textContent = phone;

    // recuper de la div les résultats
    const resultatDiv = document.getElementById('resultat');

    // explication demain
    resultatDiv.innerHTML = resultatHtml;
});