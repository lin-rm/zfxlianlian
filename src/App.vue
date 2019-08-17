<template>
  <div>
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-silder></app-silder>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppSilder from './components/AppSilder'

export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  components: {
    AppHeader,
    AppSilder
  }
};
</script>

<style>
</style>
