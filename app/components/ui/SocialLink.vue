<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

type SocialNetwork = 'vk' | 'telegram'

interface Props {
  network: SocialNetwork
  to: RouteLocationRaw
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="to" class="social-link" target="_blank" rel="noopener noreferrer">
    <SvgoSocialVk v-if="network === 'vk'" />
    <SvgoSocialTg v-else />
  </NuxtLink>
</template>

<style lang="sass" scoped>
.social-link
  display: flex
  justify-content: center
  align-items: center
  width: 128px
  height: 128px
  border-radius: 5px
  background-color: $dark-gray
  color: $black
  @include transition

  :deep(.nuxt-icon)
    width: 45px
    height: auto
    margin-bottom: 0

  @include hover
    background-color: $blue
    color: $very-light-grey

  @include laptop
    width: 80px
    height: 80px
    :deep(.nuxt-icon)
      width: 40px

  @include tablet
    width: 40px
    height: 40px
    :deep(.nuxt-icon)
      width: 30px
</style>
