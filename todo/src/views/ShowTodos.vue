<template>
  <div class="show-todos">
    <h2>Show Todos</h2>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>From</th>
          <th>To</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, i) in todosList"
          :key="todo.id"
          :style="{ background: todo.isCompleted ? '#078b69' : 'transparent' }"
        >
          <td>{{ todo.text }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ formatDate(todo.createdAt) }}</td>
          <td>
            <div>
              <button
                class="completed"
                :style="{
                  background: todo.isCompleted ? '#f76b6b' : '#42b983',
                }"
                @click="markAsComplated(todo)"
              >
                {{ todo.isCompleted ? "Incomplete" : "Completed" }}
              </button>
              <button
                class="del"
                style="background: #f76b6b"
                @click="deleteFromTodos(i)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import todoMixins from "@/mixins/todo";

const { todosList, setLocalSt } = todoMixins();

// Toggle completion
const markAsComplated = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  localStorage.setItem("todos", JSON.stringify(todosList.value));
};

const deleteFromTodos = (todoId) => {
  const data = JSON.parse(localStorage.getItem("todos"));
  console.log(data);
  if (data) {
    todosList.value.splice(todoId, 1);
    setLocalSt();
  }
};

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString();
};
</script>

<style scoped lang="scss">
table {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  button {
    color: white;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    font-size: 16px;
    cursor: pointer;
  }
}

.completed {
  margin-right: 5px;
}

.del {
  background: #e74c3c;
}
</style>
