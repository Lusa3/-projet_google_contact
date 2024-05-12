
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