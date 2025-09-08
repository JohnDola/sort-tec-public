<template>
    <section id="home" class="relative min-h-screen flex items-center overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0">
            <img src="/src/assets/img/hero-v1.png" alt="SortTec Hero Background" class="w-full h-full object-cover" />
        </div>

        <!-- Subtle dark overlay to make image darker -->
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>

        <!-- Hero Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="text-center py-8 md:py-12">
                <h1 class="text-5xl md:text-7xl font-bold mb-6">
                    <div class="relative mb-4 text-white">Sortieren.</div>
                    <span class="relative inline-block mb-5">
                        <span class="absolute inset-0 bg-[var(--color-accent)] rounded-lg transform skew-x-12"></span>
                        <span class="relative text-[var(--color-text)] px-4 py-2">Prüfen.</span>
                    </span><br>
                    <span class="relative inline-block">
                        <span class="absolute inset-0 bg-[var(--color-primary)] rounded-lg transform -skew-x-12"></span>
                        <span class="relative text-white px-4 py-2">Vertrauen.</span>
                    </span>
                </h1>
                <p class="text-xl md:text-2xl text-white mb-10 max-w-4xl mx-auto leading-relaxed">
                    Als Ihr zuverlässiger Partner für Qualitätssicherung und Prozessoptimierung
                    sorgen wir dafür, dass Ihre Produkte höchsten Standards entsprechen.
                </p>
                <div class="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="#leistungen"
                        class="bg-[var(--color-primary)] text-white px-10 py-4 rounded-[var(--border-radius)] hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Leistungen ansehen
                    </a>
                    <a href="#kontakt"
                        class="border-2 border-white text-white px-10 py-4 rounded-[var(--border-radius)] hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Kontakt aufnehmen
                    </a>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>
    </section>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>
