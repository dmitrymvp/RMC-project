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
  padding: 30px 50px
  +mixins.text-button
  +mixins.transition

  :deep(.nuxt-icon)
    width: 13px
    height: 15px
    margin-bottom: 0
    flex-shrink: 0

  +mixins.tablet
    padding: 20px 30px

.button_blue
  background-color: transparent
  color: tokens.$blue
  border-color: tokens.$blue
  &:hover
    +mixins.hover
    background-color: tokens.$blue
    color: tokens.$white

.button_light-grey
  background-color: tokens.$very-light-grey
  color: tokens.$black
  border-color: tokens.$very-light-grey
  &:hover
    +mixins.hover
    background-color: tokens.$light-grey
    border-color: tokens.$light-grey
    color: tokens.$white

.button_grey-outline
  background-color: transparent
  color: tokens.$white
  border-color: tokens.$light-grey
  &:hover
    +mixins.hover
    background-color: tokens.$light-grey
    border-color: tokens.$light-grey
    color: tokens.$white

.button_orange
  background-color: tokens.$orange
  color: tokens.$white
  border-color: tokens.$orange
  &:hover
    +mixins.hover
    background-color: tokens.$dark-orange
    border-color: tokens.$dark-orange
    color: tokens.$white
</style>
