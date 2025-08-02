<template>
  <div class="home-page">
    <h2>Add a new todo</h2>
    <form @submit.prevent="addTodo">
      <input
        type="text"
        placeholder="Add a new todo"
        v-model="todoObject.text"
        required
        style="margin-bottom: 10px; margin-top: 10px; margin-right: 10px"
      />
      <br />
      <input
        type="date"
        placeholder="From"
        v-model="todoObject.from"
        style="margin-bottom: 10px; margin-top: 10px; margin-right: 10px"
        required
      />
      <input
        type="date"
        placeholder="To"
        v-model="todoObject.to"
        style="margin-bottom: 10px; margin-top: 10px"
        required
      />
      <br />
      <input type="submit" value="Add Todo" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import todoMixins from "@/mixins/todo";

const { todosList, setLocalSt } = todoMixins();
const todoObject = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  createdAt: "",
  isCompleted: false,
});

//methods

const addTodo = () => {
  todoObject.value.createdAt = new Date();
  todoObject.value.id = todosList.value.length + 1;
  todosList.value.push({ ...todoObject.value });
  setLocalSt();
  alert("Todo added successfully!");
  console.log(todosList.value);
  // Reset the form
  todoObject.value.text = "";
  todoObject.value.from = "";
  todoObject.value.to = "";
};
</script>

<style scoped lang="scss">
form {
  input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 50%;
  }
  input[type="submit"] {
    background: #078b69;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
      background: darken(#078b69, 5%);
    }
  }
}
</style>
