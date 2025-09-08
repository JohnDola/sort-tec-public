<template>
    <header class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <!-- Logo -->
                <div class="flex items-center">
                    <SortTecLogo />
                </div>

                <!-- Navigation -->
                <nav class="hidden md:flex space-x-8">
                    <a href="#home"
                        class="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors font-medium">
                        Home
                    </a>
                    <a href="#leistungen"
                        class="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors font-medium">
                        Leistungen
                    </a>
                    <a href="#ueber-uns"
                        class="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors font-medium">
                        Über uns
                    </a>
                    <a href="#kontakt"
                        class="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors font-medium">
                        Kontakt
                    </a>
                </nav>

                <!-- CTA Button -->
                <div class="flex items-center">
                    <a href="#kontakt"
                        class="bg-[var(--color-primary)] text-white px-6 py-2 rounded-[var(--border-radius)] hover:bg-opacity-90 transition-colors font-semibold">
                        Angebot anfragen
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import SortTecLogo from '../SortTecLogo.vue'
</script>
