<template>
  <div class="dashboard">
    Dashboard page
    <DrawField msg="Welcome to Your Vue.j App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DrawField from '@/components/DrawField.vue'

export default {
  name: 'Home',
  components: {
    DrawField
  }
}
</script>
