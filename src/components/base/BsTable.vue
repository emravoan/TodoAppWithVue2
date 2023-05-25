<template>
  <div class="shadow-md shadow-indigo-500/10 overflow-x-auto overscroll-x-auto">
    <table class="min-w-full divide-y divide-gray-300">
      <thead
        v-if="columns"
        :class="['border border-indigo-300 bg-indigo-300 text-gray-800 border-collapse whitespace-nowrap']">
        <tr>
          <th
            v-for="(col, i) in columns"
            :key="`th-row-${i}`"
            :class="[col.class, 'p-3 text-xs text-center uppercase font-semibold border border-white-200']"
            v-html="col.label" />
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 text-sm">
        <slot name="tbody">
          <tr>
            <td :colspan="99">
              <span class="flex flex-col gap-2 items-center py-8">
                <span class="text-sm font-medium opacity-[50%] uppercase">No Data!</span>
              </span>
            </td>
          </tr>
        </slot>
      </tbody>
      <!-- <tbody v-if="items && items.length" class="'bg-white divide-y divide-gray-200 text-sm'">
        <tr v-for="(item, loop) in items" :key="`tb-row-${loop}`" class="border-b">
          <td
            v-for="(key, j) in Object.keys(item)"
            :key="`tb-cell-${j}`"
            class="p-3 text-center whitespace-nowrap truncate">
            <input
              v-if="typeof item[key] === 'boolean'"
              type="checkbox"
              class="!outline-none"
              :checked="item[key]"
              @input="onInput" />
            <span v-else>{{ item[key] }}</span>
          </td>
        </tr>
      </tbody> -->
    </table>
  </div>
</template>

<script>
  export default {
    name: 'BsTable',
    props: ['items', 'columns'],
  };
</script>
