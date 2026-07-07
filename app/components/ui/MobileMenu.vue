<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)

function toggle() {
  isActive.value = !isActive.value
}
</script>

<template>
  <button
    class="mobile-menu"
    :class="{ 'mobile-menu_active': isActive }"
    type="button"
    @click="toggle"
  >
    <span class="mobile-menu__icon" />
  </button>
</template>

<style lang="sass" scoped>
.mobile-menu
  display: none
  align-items: center
  justify-content: center
  width: 70px
  height: 70px
  border-radius: 50%
  background-color: $light-blue
  @include transition

  &__icon
    position: relative
    width: 45px
    height: 5px
    background-color: $white
    border-radius: 20px
    @include transition

    &::before,
    &::after
      content: ''
      position: absolute
      left: 0
      width: 45px
      height: 5px
      background-color: $white
      border-radius: 20px
      @include transition

    &::before
      top: -14px

    &::after
      top: 14px

  &_active
    background-color: $turquoise

    .mobile-menu__icon
      background-color: transparent

      &::before
        top: 0
        transform: rotate(45deg)

      &::after
        top: 0
        transform: rotate(-45deg)

  @include tablet
    display: flex

  @include mobile
    width: 60px
    height: 60px
    &__icon
      width: 40px
      height: 4px
      &::before,
      &::after
        width: 40px
        height: 4px

      &::before
        top: -12px

      &::after
        top: 12px
</style>
