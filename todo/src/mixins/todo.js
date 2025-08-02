import { onMounted, ref } from "vue";

const todosFunction = () => {
  //data
  const todosList = ref([]);

  //methods
  const setLocalSt = () => {
    localStorage.setItem("todos", JSON.stringify(todosList.value));
  };

  const updateTodos = () => {
    if (localStorage.getItem("todos")) {
      todosList.value = JSON.parse(localStorage.getItem("todos"));
    }
  };

  onMounted(() => {
    updateTodos();
  });
  return { todosList, setLocalSt, updateTodos };
};

export default todosFunction;
