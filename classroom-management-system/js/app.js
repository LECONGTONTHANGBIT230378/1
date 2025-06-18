// This file contains the JavaScript code for the classroom management system.

document.addEventListener('DOMContentLoaded', function() {
    const classroomData = [];

    const addClassroomButton = document.getElementById('add-classroom');
    const classroomList = document.getElementById('classroom-list');

    addClassroomButton.addEventListener('click', function() {
        const classroomName = document.getElementById('classroom-name').value;
        if (classroomName) {
            const classroom = {
                name: classroomName,
                id: classroomData.length + 1
            };
            classroomData.push(classroom);
            updateClassroomList();
            document.getElementById('classroom-name').value = '';
        } else {
            alert('Please enter a classroom name.');
        }
    });

    function updateClassroomList() {
        classroomList.innerHTML = '';
        classroomData.forEach(classroom => {
            const listItem = document.createElement('li');
            listItem.textContent = classroom.name;
            classroomList.appendChild(listItem);
        });
    }
});