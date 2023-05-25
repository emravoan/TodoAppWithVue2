<template>
  <div id="app" class="w-[600px] mx-auto py-20">
    <Todo />
  </div>
</template>

<script>
  export default {
    components: {
      Todo: () => import('./pages/todo/Index.vue'),
    },
  };
</script>
