<template>
  <section>
    <HeroComponent />
    <CtaComponent />
    <FeatureComponent />
    <PricingTable />
    <Companies />
    <SocialProof />
    <Newsletter />
  </section>
</template>

<script setup>
import { onMounted } from "vue"
import { initFlowbite } from "flowbite"

onMounted(() => {
  initFlowbite()
})
</script>
