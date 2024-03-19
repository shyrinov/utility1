// task-runner.js

class TaskRunner {
    constructor() {
      this.tasks = {};
    }
  
    // Define a new task
    addTask(name, dependencies, taskFn) {
      if (!this.tasks[name]) {
        this.tasks[name] = {
          dependencies: dependencies || [],
          taskFn: taskFn
        };
      } else {
        throw new Error(`Task "${name}" already exists.`);
      }
    }
  
    // Run a task and its dependencies recursively
    runTask(name, visited = new Set()) {
      if (!this.tasks[name]) {
        throw new Error(`Task "${name}" not found.`);
      }
  
      if (visited.has(name)) {
        throw new Error(`Circular dependency detected: ${Array.from(visited).join(' -> ')} -> ${name}`);
      }
  
      visited.add(name);
  
      for (const dependency of this.tasks[name].dependencies) {
        this.runTask(dependency, visited);
      }
  
      this.tasks[name].taskFn();
    }
  
    // Run all tasks
    runAll() {
      for (const taskName in this.tasks) {
        if (this.tasks.hasOwnProperty(taskName)) {
          this.runTask(taskName);
        }
      }
    }
  }
  
  // Export the TaskRunner class
  module.exports = TaskRunner;
  