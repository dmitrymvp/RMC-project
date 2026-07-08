<script setup lang="ts">
interface Props {
  placeholder?: string
  type?: string
  error?: boolean
}

withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'email',
  error: false
})

const value = defineModel<string>('value', { default: '' })
</script>

<template>
  <input
    v-model="value"
    class="input"
    :class="{ input_error: error }"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<style lang="sass" scoped>
.input
  box-sizing: border-box
  width: 100%
  height: 55px
  padding: 0 30px
  border: 3px solid transparent
  border-radius: 100px
  background-color: $white
  color: $light-black
  @include text-data-teg
  @include transition

  &::placeholder
    color: $light-grey

  @include hover
    border-color: $orange

  &:focus
    border-color: $orange
    outline: none

  &_error
    border-color: $red
    color: $red
</style>
