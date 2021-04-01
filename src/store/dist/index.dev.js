"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* import { todos } from "./modules/todos"; */
_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    todos: [{
      id: 1,
      title: "todo one"
    }, {
      id: 2,
      title: "todo two"
    }, {
      id: 3,
      title: "todo three"
    }]
  },
  getters: {
    allTodos: function allTodos(state) {
      return state.todos;
    }
  },
  mutations: {
    setTodos: function setTodos(state, todos) {
      return state.todos = todos;
    },
    newTodo: function newTodo(state, todo) {
      return state.todos.unshift(todo);
    },
    removeTodo: function removeTodo(state, id) {
      return state.todos = state.todos.filter(function (todo) {
        return todo.id !== id;
      });
    },
    updateTodo: function updateTodo(state, updTodo) {
      var index = state.todos.findIndex(function (todo) {
        return todo.id === updTodo.id;
      });

      if (index != -1) {
        state.todos.splice(index, 1, updTodo);
      }
    }
  },
  actions: {
    fetchTodos: function fetchTodos(_ref) {
      var commit, response;
      return regeneratorRuntime.async(function fetchTodos$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].get("#"));

            case 3:
              response = _context.sent;
              commit("setTodos", response.data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    addTodo: function addTodo(_ref2, title) {
      var commit, response;
      return regeneratorRuntime.async(function addTodo$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].post("#", {
                title: title,
                completed: false
              }));

            case 3:
              response = _context2.sent;
              commit("newTodo", response.data);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    deleteTodo: function deleteTodo(_ref3, id) {
      var commit;
      return regeneratorRuntime.async(function deleteTodo$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref3.commit;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].post("#/".concat(id)));

            case 3:
              commit("removeTodo", id);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    },
    filterTodos: function filterTodos(_ref4, e) {
      var commit, limit, response;
      return regeneratorRuntime.async(function filterTodos$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              commit = _ref4.commit;
              // Get selected number
              limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
              _context4.next = 4;
              return regeneratorRuntime.awrap(_axios["default"].get("#=".concat(limit)));

            case 4:
              response = _context4.sent;
              commit("setTodos", response.data);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      });
    },
    updateTodo: function updateTodo(_ref5, updTodo) {
      var commit, response;
      return regeneratorRuntime.async(function updateTodo$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              commit = _ref5.commit;
              _context5.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].put("#/".concat(updTodo.id), updTodo));

            case 3:
              response = _context5.sent;
              commit("updateTodo", response.data);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  },
  modules: {}
});

exports["default"] = _default;