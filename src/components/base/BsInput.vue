<template>
  <input
    :value="value"
    :checked="value"
    @input="$emit('input', $event.target.type === 'text' ? $event.target.value : $event.target.checked)"
    class="py-2 px-3 bg-white font-medium border !outline-none focus:ring-2 focus:ring-indigo-200" />
</template>

<script>
  export default {
    name: 'BsInput',
    props: ['value'],
  };
</script>
