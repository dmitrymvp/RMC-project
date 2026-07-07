<script setup>
import Button from '../components/ui/Button.vue'

function handleClick() {
  alert('click')
}
</script>

<template>
  <main>
    <h1>GUI</h1>
    <section>
      <h2>Кнопки</h2>
      <div
        :style="{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 20 + 'px'
        }"
      >
        <Button text="Синяя кнопка" modifier="button_blue" @click="handleClick" />
        <Button text="Серая кнопка" modifier="button_light-grey" without-arrow />
        <Button modifier="button_grey-outline" />
        <Button text="Ссылка" modifier="button_orange" to="/" />
      </div>
    </section>
  </main>
</template>

<style lang="sass" scoped>
main
  color: white
  height: 100vh
  background-color: rgba(0, 0, 0, 0.3)
  padding: 50px

section
  display: flex
  flex-direction: column
  gap: 30px
  border: 2px solid white
  padding: 30px
  margin-top:30px
  overflow-x: auto
  scrollbar-width: thin

h1
  text-align: center
</style>
