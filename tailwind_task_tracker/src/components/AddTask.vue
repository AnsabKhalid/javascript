<template>
  <form @submit="onSubmit">
    <label class="text-base font-semibold">Task</label>
    <input
      type="text"
      v-model="task.text"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
      name="text"
      placeholder="Add Task"
    />
    <label class="text-base font-semibold">Day & Time</label>
    <input
      type="text"
      v-model="task.day"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
      name="day"
      placeholder="Add Day & Time"
    />
    <div class="flex items-center">
      <label class="text-base font-semibold">Set Reminder</label>
      <input
        type="checkbox"
        class="ml-10"
        v-model="task.reminder"
        name="reminder"
      />
    </div>
    <input
      type="submit"
      value="Save Task"
      class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-950 w-full my-4"
    />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  props: {
    task: {
      type: Object,
      default: () => ({ text: "", day: "", reminder: false }),
    },
  },
  data() {
    return {
      text: this.task.text,
      day: this.task.day,
      reminder: this.task.reminder,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.task.text) {
        alert("Please add a task");
        return;
      }

      const newTask = {
        // id: Math.floor(Math.random() * 10000),
        text: this.task.text,
        day: this.task.day,
        reminder: this.task.reminder,
      };
      if (this.task.id) {
        newTask.id = this.task.id;
        this.$emit("update-task", newTask);
      } else {
        this.$emit("add-task", newTask);
      }

      this.task.text = "";
      this.task.day = "";
      this.task.reminder = false;
    },
  },
};
</script>

<style scoped></style>
