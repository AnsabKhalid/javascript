<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[
      task.reminder ? 'reminder' : '',
      'task text-lg font-semibold bg-gray-300 rounded-lg mb-2 py-2.5 px-2 cursor-pointer',
    ]"
  >
    <div class="flex items-center justify-between">
      <h3>
        {{ task.text }}
      </h3>
      <h4>
        <i
          title="Delete task"
          @click="onDelete(task.id)"
          class="fas fa-times text-red-600"
        ></i>
        <i
          title="Update task"
          @click="onUpdate(task.id)"
          class="fas fa-plus text-blue-800 px-2.5"
        ></i>
      </h4>
    </div>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
    },
    onUpdate(id) {
      console.log("id", id);
      this.$emit("update-task", id);
    },
  },
};
</script>

<style scoped>
.task.reminder {
  border-left: 5px solid green;
}
</style>
