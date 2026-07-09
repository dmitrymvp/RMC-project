<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

type ButtonModifier = 'button_blue' | 'button_light-grey' | 'button_grey-outline' | 'button_orange'

interface Props {
  text?: string
  modifier?: ButtonModifier
  withoutArrow?: boolean
  type?: 'button' | 'submit' | 'reset'
  to?: RouteLocationRaw | null
}

withDefaults(defineProps<Props>(), {
  text: '',
  modifier: 'button_blue',
  withoutArrow: false,
  type: 'button',
  to: null
})
</script>

<template>
  <NuxtLink v-if="to" :to="to" class="button" :class="modifier">
    {{ text }}
    <SvgoArrow v-if="!withoutArrow" />
  </NuxtLink>
  <button v-else :type="type" class="button" :class="modifier">
    {{ text }}
    <SvgoArrow v-if="!withoutArrow" />
  </button>
</template>

<style lang="sass" scoped>
.button
  display: flex
  align-items: center
  flex-shrink: 0
  min-width: max-content
  gap: 15px
  border-width: 3px
  border-style: solid
  border-radius: 40px
  padding: 27px 50px
  @include text-button
  @include transition

  :deep(.nuxt-icon)
    width: 13px
    height: 15px
    margin-bottom: 0
    flex-shrink: 0

  @include tablet
    padding: 17px 30px

.button_blue
  background-color: transparent
  color: $blue
  border-color: $blue
  &:hover
    @include hover
    background-color: $blue
    color: $white

.button_light-grey
  background-color: $very-light-grey
  color: $black
  border-color: $very-light-grey
  &:hover
    @include hover
    background-color: $light-grey
    border-color: $light-grey
    color: $white

.button_grey-outline
  background-color: transparent
  color: $white
  border-color: $light-grey
  &:hover
    @include hover
    background-color: $light-grey
    border-color: $light-grey
    color: $white

.button_orange
  background-color: $orange
  color: $white
  border-color: $orange
  &:hover
    @include hover
    background-color: $dark-orange
    border-color: $dark-orange
    color: $white
</style>
