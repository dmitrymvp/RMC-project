<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <NuxtLink to="/" class="footer__logos">
          <SvgoLogoUchugraWhite filled />
          <SvgoLogoNacprojectWhite filled />
        </NuxtLink>

        <UiSearchInput surface="dark" class="footer__search" />
      </div>

      <div class="footer__row">
        <div class="footer__column">
          <div class="footer__contacts">
            <UiContactLink type="tel" text="+7 (3467) 370-036" to="tel:+73467370036" />
            <UiContactLink type="mail" text="press@rmc-ugra.ru" to="mailto:press@rmc-ugra.ru" />
          </div>

          <UiButton text="Телефонный справочник" modifier="button_grey-outline" to="/directory" />
        </div>

        <div class="footer__social">
          <UiSocialLink network="vk" to="https://vk.com" />
          <UiSocialLink network="telegram" to="https://t.me" />
        </div>
      </div>

      <div class="footer__licence">
        <p>Лицензия на осуществление образовательной деятельности №3360, от 19 ноября 2019 года</p>
        <p>Все права защищены © АУ «Региональный молодежный центр», 2009-2026</p>
      </div>
    </div>

    <UiScrollToTopButton class="footer__scroll-top" />
  </footer>
</template>

<style lang="sass" scoped>
.footer
  max-width: 2400px
  position: relative
  background-color: $black
  padding: 60px 200px

  @include laptop
    padding: 60px 100px

  @include tablet
    padding: 30px 20px

  &__inner
    display: flex
    flex-direction: column
    gap: 55px

    @include tablet
      gap: 40px

  &__top
    display: flex
    gap: 85px

    @include tablet
      flex-direction: column
      gap: 10px

  &__logos
    display: flex
    flex-shrink: 0
    gap: 50px

    :deep(.nuxt-icon)
      width: auto
      height: 65px
      margin-bottom: 10px

  &__row
    display: flex
    justify-content: space-between
    align-items: flex-start

    @include tablet
      flex-direction: column
      gap: 20px

  &__column
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 30px

    @include tablet
      gap: 17px

  &__contacts
    display: flex
    gap: 86px

    @include tablet
      flex-direction: row
      gap: 105px

    @include mobile
      flex-direction: column
      gap: 7px

  &__social
    display: flex
    gap: 20px

  &__licence
    display: flex
    flex-direction: column
    gap: 10px
    color: $dark-gray
    @include main-menu

    @include tablet
      gap: 18px
      padding-right: 40%

    @include mobile
      padding-right: 12%
      gap: 16px

  &__scroll-top
    position: absolute
    right: 40px
    bottom: 40px

    @include laptop
      right: 35px
      bottom: 50px

    @include tablet
      right: 32px
      bottom: 32px

    @include mobile
      right: 17px
      bottom: 17px
</style>
