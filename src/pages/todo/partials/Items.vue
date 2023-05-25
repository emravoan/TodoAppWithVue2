<template>
  <BsTable :columns="columns">
    <template #tbody>
      <tr v-for="(item, loop) in todoList" :key="`tb-row-${loop}`" class="border-b">
        <td class="p-3 text-center whitespace-nowrap truncate">
          {{ item.id }}
        </td>
        <td class="p-3 text-center whitespace-nowrap truncate">
          {{ item.name }}
        </td>
        <td class="p-3 text-center whitespace-nowrap truncate">
          <input
            type="checkbox"
            class="!outline-none"
            :checked="item.isDone"
            @input="update(item.id, { isDone: $event.target.checked })" />
        </td>
        <td class="p-3 text-center whitespace-nowrap truncate">
          <button type="button" class="border border-red-200 text-red-800 w-6 h-6" @click="remove(item.id)">X</button>
        </td>
      </tr>
    </template>
  </BsTable>
</template>

<script>
  import { nanoid } from 'nanoid';
  export default {
    name: 'TodoItems',
    data() {
      return {
        columns: [
          { label: '#', class: 'w-20' },
          { label: 'Name' },
          { label: 'Is Done?' },
          { label: 'Action', class: 'w-20' },
        ],
      };
    },
    methods: {
      update: function (id, todo) {
        this.$store.dispatch('todo/update', id, todo);
      },
      remove: function (id) {
        this.$store.dispatch('todo/delete', id);
      },
    },
    computed: {
      todoList: function () {
        return this.$store.getters['todo/todos'];
      },
    },
  };
</script>
