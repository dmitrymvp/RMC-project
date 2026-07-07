<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  to: RouteLocationRaw
  text: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="to" class="menu-link" active-class="menu-link_active">
    {{ text }}
  </NuxtLink>
</template>

<style lang="sass" scoped>
.menu-link
  padding: 9px 0
  border-bottom: 3px solid transparent
  color: $black
  text-decoration: none
  @include main-menu
  @include transition

  @include hover
    border-bottom-color: $blue

  &_active
    border-bottom-color: $blue
    color: $blue
</style>
