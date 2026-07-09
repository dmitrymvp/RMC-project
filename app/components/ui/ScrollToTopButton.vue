<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <button class="scroll-to-top-button" @click="scrollToTop">
    <span class="scroll-to-top-button__inner-round">
      <SvgoArrow />
    </span>
  </button>
</template>

<style lang="sass" scoped>
.scroll-to-top-button
  width: 88px
  height: 196px
  border-width: 3px
  border-radius: 100px
  border-style: solid
  border-color: $orange
  display: flex
  justify-content: center
  align-items: flex-end
  padding: 6px 0
  @include transition

  &__inner-round
    width: 70px
    height: 70px
    border-width: 3px
    border-radius: 100%
    border-style: solid
    border-color: $light-blue
    background-color: transparent
    display: flex
    justify-content: center
    align-items: center
    @include transition

    :deep(.nuxt-icon)
      transform: rotate(-90deg)
      width: 20px
      height: 22px
      margin-bottom: 0
      flex-shrink: 0
  @include hover
    .scroll-to-top-button__inner-round
      background-color: $light-blue
      transform: translateY(-75%)

  @include laptop
    width: 60px
    height: 134px
    &__inner-round
      width: 46px
      height: 46px

  @include tablet
    width: 46px
    height: 46px
    border-color: $light-blue
    &__inner-round
      width: 100%
      height: 100%
      border: none
      background-color: transparent
      transform: none

    @include hover
      background-color: $light-blue
      .scroll-to-top-button__inner-round
        transform: none
</style>
