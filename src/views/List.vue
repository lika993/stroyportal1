<template>
 <div>
  <h2>Доступный список</h2>
  <ul class="list-enabled">
    <li v-if="list" v-for="item in list">{{item.name}}</li>
  </ul>
 </div>
</template>

<script>
export default {
 props: ['list']
}
</script>