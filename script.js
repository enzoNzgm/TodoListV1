let todoTxt = document.getElementById('todoTxt')
let todoBtn = document.getElementById('todoList__btn')
let todoContainer = document.querySelector('.todoList__add')


todoBtn.onclick = function () {
    //vérifier que le champ n'est pas vide
    if (todoTxt.value !== "") {
        const paragraph = document.createElement('p')


        //valorisé ce paragraphe avec le contenu de l'input
        paragraph.innerText = todoTxt.value

        //inserer le paragraphe dans la todoList
        todoContainer.appendChild(paragraph)

        //ajout style au paragraphe 
        paragraph.classList.add('newTodo__style')

        //suprimer champs de saisie apres ajout
        todoTxt.value = ""

        //barrer paragraphe au click 
        paragraph.addEventListener('click', () => {
            console.log('barré la case')
            paragraph.classList.add('newTodo__style--barre')
        })

        //suprimer seulement le paragraphe double cliqué
        const paragraphs = document.querySelectorAll('.todoList__add p');
        paragraphs.forEach(paragraph => {

            paragraph.addEventListener('dblclick', () => {
                paragraph.remove(); // Supprime le paragraphe double-cliqué
            });
        });


    }
}