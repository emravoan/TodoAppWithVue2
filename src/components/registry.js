import BsInput from './base/BsInput.vue';
import BsTable from './base/BsTable.vue';

const registry = Vue => {
  Vue.component('BsInput', BsInput);
  Vue.component('BsTable', BsTable);
};

export default registry;
