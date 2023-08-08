document.addEventListener('DOMContentLoaded', function () {
    const todoTxt = document.getElementById('todoTxt');
    const todoBtn = document.getElementById('todoList__btn');
    const todoContainer = document.querySelector('.todoList__add');

    // Charger les tâches depuis le stockage local
    function loadTasksFromStorage() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            createTask(task);
        });
    }

    // Enregistrer les tâches dans le stockage local
    function saveTasksToStorage() {
        const tasks = Array.from(todoContainer.querySelectorAll('p')).map(paragraph => paragraph.innerText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Créer une tâche et ajouter des gestionnaires d'événements
    function createTask(text) {
        const paragraph = document.createElement('p');
        paragraph.innerText = text;

        paragraph.classList.add('newTodo__style');

        paragraph.addEventListener('click', () => {
            paragraph.classList.toggle('newTodo__style--barre');
            saveTasksToStorage();
        });

        paragraph.addEventListener('dblclick', () => {
            paragraph.remove();
            saveTasksToStorage();
        });

        todoContainer.appendChild(paragraph);
    }

    // Ajouter une tâche à la liste
    todoBtn.addEventListener('click', function () {
        const task = todoTxt.value.trim();
        if (task !== '') {
            createTask(task);
            saveTasksToStorage();
            todoTxt.value = '';
        }
    });

    // Charger les tâches lors du chargement de la page
    loadTasksFromStorage();
});
