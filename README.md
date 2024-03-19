const TaskRunner = require('task-runner');

// Create a new instance of TaskRunner
const taskRunner = new TaskRunner();

// Define tasks
taskRunner.addTask('clean', [], () => {
  console.log('Cleaning up...');
});

taskRunner.addTask('build', ['clean'], () => {
  console.log('Building project...');
});

taskRunner.addTask('deploy', ['build'], () => {
  console.log('Deploying project...');
});

// Run tasks
taskRunner.runAll(); // Runs all tasks sequentially
