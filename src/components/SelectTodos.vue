<template>
  <div>
    Filter Todos:
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SelectTodos",
  methods: mapActions(["filterTodos"]),
};
</script>
<style scoped>
select {
  margin-top: 0.3rem;
  padding: 6px;
  border: #41b883 1px solid;
}
div {
  margin-left: 3rem;
}
</style>
