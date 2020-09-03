<template>
  <div class="home">
    <header class="header">
      <h1 class="header-title">TODOS</h1>
    </header>
    <div class="wrapper">
      <div class="home-add-todo">
        <div class="text-field">
          <i class="text-field-icon is-left plus"></i>
          <input type="text" class="text-field-input" placeholder="What do needs to be done?" v-model="state.createTodoValue" @keydown.enter="createTodo">
        </div>
      </div>
      <ul class="home-todo-list">
        <li v-for="(todo, index) in state.todos" :key="index">
          <div class="text-field">
            <label>
              <input type="checkbox" class="text-field-checkbox" :checked="todo.progress.completed">
              <i class="text-field-icon is-left checkbox"></i>
            </label>
            <input type="text" class="text-field-input" placeholder="What do needs to be done?" :value="todo.title" @keydown.enter="updateTodo($event, todo)">
            <i class="text-field-icon is-right remove"></i>
          </div>
        </li>
        <li>
          <p class="home-todo-list-result">未完了:1 完了:1</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api';
import axios from 'axios';

interface Todo {
  id: number,
  title: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string | null
  progress: object
}

interface Progress {
  id: number,
  completed: boolean,
  createdAt: string,
  updatedAt: string,
  deletedAt: string | null
}

interface State {
  todos: Todo[],
  createTodoValue: string,
  isLoading: boolean,
}

export default defineComponent({
  setup() {
    const state: State = reactive({
      todos: [],
      createTodoValue: '',
      isLoading: false,
    });

    fetchTodos()

    return {
      state,
      createTodo,
      updateTodo,
    }

    async function fetchTodos() {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/todo'
      }).then((res) => {
        state.todos = [...res.data.responce.todos];
      });

      return res
    }

    async function createTodo($event: KeyboardEvent & { target: HTMLInputElement }) {
      // 日本語変換時のエンターキー入力の場合は処理を終了
      if ($event.keyCode !== 13) return;
      const title = $event.target.value;
      await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/todo/',
        data: {
          title,
        }
      }).then((res) => {
        state.createTodoValue = '',
        fetchTodos();
      })
    }

    async function updateTodo($event: KeyboardEvent & { target: HTMLInputElement }, todo: Todo) {
      // 日本語変換時のエンターキー入力の場合は処理を終了
      if ($event.keyCode !== 13) return;
      const { id } = todo;
      const updateTitle = $event.target.value;
      await axios({
        method: 'PUT',
        url: `http://localhost:3000/api/todo/${id}`,
        data: {
          title: updateTitle,
        }
      }).then(() => {
        fetchTodos();
      });
    }
  }
})
</script>

<style lang="scss" scoped>
  .header {
    background-color: #303F9F;
    padding-top: 40px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

    &-title {
      color: #fff;
      background-color: #3F51B5;
      font-size: 36px;
      font-weight: bold;
      text-align: center;
      padding: 18px 0;
    }
  }

  .wrapper {
    width: 746px;
    margin: 60px auto 0;
  }

  .home-add-todo {
    box-shadow: 0 4px 3px rgba(0, 0, 0, 0.2);
  }

  .home-todo-list {
    margin-top: 40px;
    box-shadow: 0 4px 3px rgba(0, 0, 0, 0.2);
    &-result {
      background-color: #fff;
      color: #ffc107;
      padding: 16px;
      font-weight: bold;
    }
    li {
      border-bottom: 1px solid #c4c4c4;
      &:last-child {
        border-top: none;
      }
    }
  }

  .text-field {
    position: relative;
    padding: 16px 56px 16px 56px;
    background-color: #fff;
    &-input {
      width: 100%;
      font-size: 18px;
      color: #757575;
      border: none;
      &::placeholder {
        color: #212121;
        opacity: .5;
        font-weight: bold;
      }
      &:focus {
        outline: none;
      }
    }

    &-icon {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      transform: translateY(-50%);
      &.is-left {
        left: 16px;
      }
      &.is-right {
        right: 16px;
      }
      &:hover {
        cursor: pointer; 
      }
      &.plus:before {
        content: '';
        position: absolute;
        display: block;
        width: 20px;
        height: 2px;
        transform: rotate(90deg);
        background-color: #3F51B5;
        top: calc(50% - 1px);
        left: 0;
      }
      &.plus:after {
        content: '';
        position: absolute;
        display: block;
        width: 20px;
        height: 2px;
        background-color: #3F51B5;
        top: calc(50% - 2px);
        left: 0;
      }
      &.checkbox {
        border: 1px solid #c4c4c4;
        border-radius: 50%;
      }
      &.checkbox:before {
        content: '';
        display: block;
        position: absolute;
        top: 2.5px;
        left: 6px;
        width: 5px;
        height: 10px;
        transform: rotate(40deg);
        border-bottom: 3px solid #c4c4c4;
        border-right: 3px solid #c4c4c4;
      }
      &.remove:before,
      &.remove:after {
        content: '';
        display: block;
        position: absolute;
        background-color: #b5543f;
        width: 100%;
        height: 1px;
        top: 50%;
        left: 0;
      }
      &.remove:before {
        transform: rotate(45deg);
      }
      &.remove:after {
        transform: rotate(-45deg);
      }
    }
    &-checkbox {
      display: none;
    }
    &-checkbox:checked + .text-field-icon {
      border-color: #ffc107;
    }
    &-checkbox:checked + .text-field-icon:before {
      border-color: #ffc107;
    }
  }
</style>
