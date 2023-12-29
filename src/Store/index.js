export let tasks = [
  { id: 1, task: "Get started with your todo lists" }
];

export const edit = (newTasks) => tasks = newTasks;

export default {tasks, edit};
