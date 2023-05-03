<template>
  <Tasks />
</template>

<script>
import Tasks from "./Tasks.vue";

export default {
  name: "EditTask",
  components: {
    Tasks,
  },
  data() {
    return {};
  },
  methods: {
    async editTask(id) {
      const taskToEdit = await this.fetchTask(id);
      console.log(taskToEdit);

      // Populate form fields with existing task data
      this.addTask.task = {
        text: taskToEdit.text,
        day: taskToEdit.day,
        reminder: taskToEdit.reminder,
      };

      // Show the form
      this.showAddTask = true;

      // When the form is submitted, update the task data
      this.$emit("edit-task", async (task) => {
        const res = await fetch(`${this.api}/tasks/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(task),
        });

        const data = await res.json();

        this.tasks = this.tasks.map((task) =>
          task.id === id ? { ...task, ...data } : task
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
