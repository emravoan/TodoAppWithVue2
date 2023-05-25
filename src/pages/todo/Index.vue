<template>
  <div class="flex flex-col gap-4 justify-center">
    <h1 class="text-2xl font-semibold text-center">Todo App!</h1>
    <div class="flex justify-center gap-4">
      <BsInput type="text" v-model="todoInput" placeholder="Enter todo name" />
      <div class="flex gap-2 border border-indigo-200 p-2 select-none">
        <BsInput type="checkbox" id="todoCheck" v-model="todoCheck" class="!ring-0 cursor-pointer" />
        <Label for="todoCheck" class="cursor-pointer">Is Done?</Label>
      </div>
      <button
        type="button"
        :disabled="!todoInput.trim()"
        :class="[
          'bg-indigo-100 border border-indigo-200 py-2 px-3 shadow',
          {
            'opacity-50 cursor-not-allowed': !todoInput.trim(),
          },
        ]"
        @click="create">
        Create
      </button>
    </div>
    <TodoItems />
  </div>
</template>

<script>
  import { nanoid } from 'nanoid';
  export default {
    name: 'ToDo',
    data() {
      return {
        todoInput: '',
        todoCheck: false,
      };
    },
    methods: {
      create: function () {
        const todoText = this.todoInput.trim();
        if (!todoText) {
          return;
        }

        this.$store.dispatch('todo/create', {
          id: nanoid(6),
          name: todoText,
          isDone: this.todoCheck,
        });

        this.todoInput = '';
        this.todoCheck = false;
      },
    },
    components: {
      TodoItems: () => import('./partials/Items.vue'),
    },
  };
</script>
