import Vue from "vue";
import Vuex from "vuex";
/* import { todos } from "./modules/todos"; */
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [{
                id: 1,
                title: "todo one"
            },
            {
                id: 2,
                title: "todo two"
            },
            {
                id: 3,
                title: "todo three"
            }
        ]
    },
    getters: {
        allTodos: (state) => state.todos
    },
    mutations: {
        setTodos: (state, todos) => (state.todos = todos),
        newTodo: (state, todo) => (state.todos.unshift(todo)),
        removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
        updateTodo: (state, updTodo) => {
            const index = state.todos.findIndex(todo => todo.id === updTodo.id);
            if (index != -1) {
                state.todos.splice(index, 1, updTodo)
            }
        }
    },
    actions: {
        async fetchTodos({ commit }) {
            const response = await axios.get("#")

            commit("setTodos", response.data)
        },
        async addTodo({ commit }, title) {
            const response = await axios.post("#", { title, completed: false })

            commit("newTodo", response.data)
        },
        async deleteTodo({ commit }, id) {
            await axios.post(`#/${id}`)

            commit("removeTodo", id)
        },
        async filterTodos({ commit }, e) {
            // Get selected number
            const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
            const response = await axios.get(`#=${limit}`);

            commit("setTodos", response.data)
        },
        async updateTodo({ commit }, updTodo) {
            const response = await axios.put(`#/${updTodo.id}`, updTodo);

            commit("updateTodo", response.data)
        }
    },
    modules: {},
});