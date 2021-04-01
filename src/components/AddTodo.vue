<template>
  <div class="container">
    <form @submit="onSubmit">
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Add Todo...."
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 50px 20px 20px 50px;
}
form {
  display: flex;
  margin-top: 2rem;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
}
</style>
