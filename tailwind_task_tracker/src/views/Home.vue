<template>
  <Header
    @toggle-add-task="toggleAddTask"
    title="Task Tracker"
    :showAddTask="showAddTask"
  />

  <AddTask
    v-show="showAddTask"
    @add-task="addTask"
    @update-task="addTask"
    :task="populateTask"
  />
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    @update-task="editTask"
    :tasks="tasks"
  />

  <Footer />
</template>

<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
      tasks: [],
      api: "http://localhost:5000",
      populateTask: { text: "", day: "", reminder: false },
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async addTask(task) {
      let url = this.api + "/tasks";
      let method = "POST";
      if (task.id) {
        url += "/" + task.id;
        method = "PUT";
      }

      const res = await fetch(url, {
        method: method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      if (task.id) {
        const updatedTasks = this.tasks.map((t) =>
          t.id === task.id ? data : t
        );
        this.tasks = updatedTasks;
      } else {
        this.tasks = [...this.tasks, data];
      }
    },
    async deleteTask(id) {
      if (confirm("Are you sure")) {
        const res = await fetch(this.api + `/tasks/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error Deleting task");
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(this.api + `/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      });

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async fetchTasks() {
      const res = await fetch(this.api + "/tasks");

      const data = await res.json();

      return data;
    },
    async fetchTask(id) {
      const res = await fetch(this.api + `/tasks/${id}`);

      const data = await res.json();

      return data;
    },
    async editTask(id) {
      const taskToEdit = await this.fetchTask(id);
      console.log(taskToEdit);

      const populateTask = {
        text: taskToEdit.text,
        day: taskToEdit.day,
        reminder: taskToEdit.reminder,
      };

      this.populateTask = { ...taskToEdit };

      console.log("Hello", populateTask);

      this.$emit("edit-task", populateTask);

      this.showAddTask = true;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignupForm" });
    }
  },
};
</script>

<style lang="scss" scoped></style>
