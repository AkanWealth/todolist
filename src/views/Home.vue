<template>
  <div>
    <AddTodo />
    <SelectTodos />
    <!-- <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" /> -->
    <h1>Todos</h1>
    <div class="legend">
      <span class="click">Double click to mark as completed</span>
      <span>
        <span class="complete-box"> = Complete</span>
      </span>
      <span>
        <span class="incomplete-box"> = Incomplete</span>
      </span>
    </div>
    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        v-for="todo in allTodos"
        v-bind:key="todo.id"
        class="todo"
        v-bind:class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <button @click="deleteTodo(todo.id)" class="del">x</button>
      </div>
    </div>
  </div>
</template>

<script>
/* import Todos from "../components/Todos"; */
import AddTodo from "../components/AddTodo";
import { mapGetters, mapActions } from "vuex";
import SelectTodos from "../components/SelectTodos";

export default {
  name: "Home",
  components: {
    AddTodo,
    SelectTodos,
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };

      this.updateTodo(updTodo);
    },
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style>
.btn {
  display: inline-block;
  border: none;
  background: #15c505;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  margin: 0.5rem;
}
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
.del {
  position: absolute;
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  outline: 0;
  right: 10px;
}
.legend {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  margin-right: 8rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
  .complete-box {
    margin-top: 3rem;
    float: left;
  }
  .incomplete-box {
    margin-right: 3rem;
    float: left;
  }
  .click {
    text-align: center;
  }
}
</style>
