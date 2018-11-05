"use strict"
function TodoController() {
    const vm = this;
    vm.tasks = [
        {name: "Sort laundry", completed: true},
        {name: "Contact Janice", completed: true},
        {name: "Pick out late night snacks", completed: false},
        {name: "Go to bed early", completed: true},
        {name: "Clean out pantry", completed: false}
    ];
    vm.addTask = (newTask) => {
        vm.tasks.push(angular.copy(newTask));
        vm.task.name = ``;
    }

    vm.removeTask = (task) => {
        vm.tasks.splice(vm.tasks.indexOf(task), 1);
    }

    vm.completeTask = (task) => {
        task.completed = true;
    }
}


angular
    .module("todoApp")
    .controller("TodoController", TodoController)