<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

type ContactType = 'tel' | 'mail'

interface Props {
  type: ContactType
  text: string
  to: RouteLocationRaw
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="to" class="contact-link" :class="`contact-link_${type}`">
    <SvgoPhone v-if="type === 'tel'" />
    <SvgoMail v-else />
    {{ text }}
  </NuxtLink>
</template>

<style lang="sass" scoped>
.contact-link
  height: 25px
  display: flex
  align-items: center
  text-align: center
  flex-shrink: 0
  min-width: max-content
  white-space: nowrap
  gap: 15px
  border-bottom: 3px solid transparent
  color: $white
  @include text-card
  @include transition

  :deep(.nuxt-icon)
    width: 20px
    height: 20px
    margin-bottom: 0
    flex-shrink: 0

  &_tel
    :deep(.nuxt-icon)
      color: $orange
    @include hover
      border-bottom-color: $orange

  &_mail
    :deep(.nuxt-icon)
      color: $blue
    @include hover
      border-bottom-color: $blue
</style>
