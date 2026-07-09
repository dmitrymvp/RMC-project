<script setup lang="ts">
import { nextTick, ref, useTemplateRef } from 'vue'

interface MenuItem {
  to: string
  text: string
}

const menuItems: MenuItem[] = [
  { to: '/', text: 'О центре' },
  { to: '/', text: 'Образовательные программы' },
  { to: '/', text: 'Новости' },
  { to: '/', text: 'Мероприятия и проекты' },
  { to: '/', text: 'Летний отдых' },
  { to: '/', text: 'Контакты' }
]

const isSearchOpen = ref(false)

const headerRef = useTemplateRef('header')
const searchInputRef = useTemplateRef('searchInput')

async function openSearch() {
  isSearchOpen.value = true
  await nextTick()
  searchInputRef.value?.focus()
}

function closeSearch() {
  isSearchOpen.value = false
}

function handleSearchFocusOut(event: FocusEvent) {
  const nextFocusTarget = event.relatedTarget as Node | null
  if (!headerRef.value?.contains(nextFocusTarget)) {
    closeSearch()
  }
}
</script>

<template>
  <header ref="header" class="header">
    <NuxtLink to="/" class="header__logos">
      <SvgoLogoUchugraColor filled />
      <SvgoLogoNacprojectColor filled />
    </NuxtLink>

    <nav v-if="!isSearchOpen" class="header__menu">
      <HeaderUiMenuItem v-for="item in menuItems" :key="item.to" :to="item.to" :text="item.text" />
    </nav>

    <UiSearchInput
      v-else
      ref="searchInput"
      class="header__search"
      surface="light"
      @focusout="handleSearchFocusOut"
    />

    <button
      v-if="!isSearchOpen"
      type="button"
      class="header__search-toggle"
      aria-label="Открыть поиск"
      @click="openSearch"
    >
      <SvgoSearch />
    </button>

    <UiMobileMenu />
  </header>
</template>

<style lang="sass" scoped>
.header
  position: relative
  display: flex
  align-items: center
  gap: 109.5px
  padding: 10px 0
  max-width: 1520px
  height: 112px

  @include laptop
    gap: 19.5px
    max-width: 1240px

  @include tablet
    justify-content: space-between
    height: 90px

  @include mobile
    height: 80px

  &__logos
    display: flex
    flex-shrink: 0
    align-items: center
    gap: 20px

    :deep(.nuxt-icon)
      width: auto
      height: 92px

      @include tablet
        height: 60px

  &__menu
    display: flex
    flex-grow: 1
    justify-content: space-between

    @include tablet
      display: none

  &__search
    flex-grow: 1
    margin-left: 20px

    @include tablet
      display: none

  &__search-toggle
    display: flex
    width: 40px
    height: 40px
    color: $very-dark-blue
    @include transition

    @include hover
      color: $blue

    :deep(.nuxt-icon)
      width: 40px
      height: 40px

    @include tablet
      display: none
</style>
