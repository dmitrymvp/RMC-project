<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'

interface Props {
  surface?: 'dark' | 'light'
  placeholder?: string
  buttonText?: string
}

withDefaults(defineProps<Props>(), {
  surface: 'dark',
  placeholder: 'Поиск',
  buttonText: 'Найти'
})

const value = defineModel<string>('value', { default: '' })

const isFocused = ref(false)

const inputRef = useTemplateRef('input')

function handleClear() {
  value.value = ''
  inputRef.value?.focus()
}

function focus() {
  inputRef.value?.focus()
}

defineExpose({ focus })
</script>

<template>
  <form
    class="search-input"
    :class="{ 'search-input_surface-light': surface === 'light', 'search-input_active': isFocused }"
  >
    <div class="search-input__wrapper-field">
      <input
        ref="input"
        v-model="value"
        class="search-input__field"
        type="text"
        :placeholder="placeholder"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <button
        v-show="value.length > 0"
        type="button"
        class="search-input__clear"
        @click="handleClear"
      ></button>
    </div>
    <div class="wrapper-button">
      <UiButton
        type="submit"
        :text="buttonText"
        without-arrow
        :modifier="surface === 'light' ? 'button_blue' : 'button_orange'"
      />
    </div>
  </form>
</template>

<style lang="sass" scoped>
.search-input
  position: relative
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%
  height: 75px
  border: 3px solid $light-grey
  border-radius: 100px
  box-shadow: 0 0 25px rgba(113, 110, 219, 0.15)
  background-color: transparent

  @include transition

  @include hover
    border-color: $very-light-grey

  @include tablet
    height: 55px

  &__wrapper-field
    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    align-self: stretch
    flex-grow: 1
    padding: 0 50px 0 30px
    min-width: 0


  &__field
    min-width: 0
    align-self: stretch
    border: none
    background: transparent
    flex-grow: 1
    // padding-right: 30px
    color: $light-grey
    @include text-data-teg


    &::placeholder
      color: $light-grey

    &:focus
      outline: none


  &__clear
    position: absolute
    right: 10px
    width: 22px
    height: 22px
    color: $white
    margin-right: 5px
    &::before,
    &::after
      display: block
      content: ''
      width: 20px
      height: 3px
      border-radius: 100px
      background-color: currentColor
      position: absolute
    &::before
      transform:  rotate(45deg)

    &::after
      transform:  rotate(-45deg)


    &_active
      border-color: $very-light-grey
      background-color: $light-grey


  .wrapper-button
    position: relative
    left: 3px


  &.search-input_active
    background-color: $light-grey
    border-color: $very-light-grey

    .search-input__field
      color: $dark-gray

      &::placeholder
        color: $dark-gray

  &_surface-light
    border-color: $gray

    .search-input__field
      color: $gray
      &::placeholder
        color: $gray

    .search-input__clear
      color: $blue

    &:not(.search-input_active)
      @include hover
        border-color: $blue

        .search-input__field
          color: $blue
          &::placeholder
            color: $blue

    &.search-input_active
      background-color: transparent
      border-color: $blue

      .search-input__field
        color: $dark-gray

        &::placeholder
          color: $dark-gray
</style>
