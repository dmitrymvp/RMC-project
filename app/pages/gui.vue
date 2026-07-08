<script setup lang="ts">
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
        <UiButton text="Синяя кнопка" modifier="button_blue" @click="handleClick" />
        <UiButton text="Серая кнопка" modifier="button_light-grey" without-arrow />
        <UiButton modifier="button_grey-outline" />
        <UiButton text="Ссылка" modifier="button_orange" to="/" />
      </div>
      <div>
        <UiScrollToTopButton />
      </div>
      <div>
        <UiMobileMenu />
      </div>
    </section>
    <section>
      <h2>Пункты меню</h2>
      <div
        :style="{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 20 + 'px'
        }"
      >
        <HeaderUiMenuItem to="/" text="Главная" />
        <HeaderUiMenuItem to="/gui" text="GUI" />
      </div>
    </section>
    <section>
      <h2>Соцсети</h2>
      <div
        :style="{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 20 + 'px'
        }"
      >
        <UiSocialLink network="vk" to="https://vk.com" />
        <UiSocialLink network="telegram" to="https://t.me" />
      </div>
    </section>
    <section>
      <h2>Контакты</h2>
      <div
        :style="{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 20 + 'px'
        }"
      >
        <UiContactLink type="tel" text="+7 (3467) 370-036" to="tel:+73467370036" />
        <UiContactLink type="mail" text="press@rmc-ugra.ru" to="mailto:press@rmc-ugra.ru" />
      </div>
    </section>
    <section>
      <h2>Инпут</h2>
      <div
        :style="{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 20 + 'px'
        }"
      >
        <div :style="{ width: 380 + 'px' }">
          <UiInput placeholder="info@mail.ru" />
        </div>
        <div :style="{ width: 380 + 'px' }">
          <UiInput placeholder="info@mail.ru" error />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="sass" scoped>
main
  color: white
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
