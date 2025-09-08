<template>
    <div class="min-h-screen">
        <!-- Navigation Header -->
        <HeaderSection />

        <!-- Main Content -->
        <main class="pt-16">
            <!-- Home Section -->
            <HeroSection />

            <!-- Leistungen Section -->
            <ServicesSection />

            <!-- Über uns Section -->
            <AboutSection />

            <!-- Kontakt Section -->
            <ContactSection />
        </main>

        <!-- Footer -->
        <FooterSection />
    </div>
</template>

<script setup lang="ts">
import HeaderSection from './sections/HeaderSection.vue'
import HeroSection from './sections/HeroSection.vue'
import ServicesSection from './sections/ServicesSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'
</script>

<style scoped>
/* Smooth scrolling for anchor links */
html {
    scroll-behavior: smooth;
}
</style>
