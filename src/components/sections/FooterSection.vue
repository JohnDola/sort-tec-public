<template>
    <footer class="bg-gray-900 text-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h3 class="text-xl font-bold mb-2">
                    <SortTecText />
                </h3>
                <p class="text-gray-300 mb-4">Sortieren. Prüfen. Vertrauen.</p>
                <p class="text-gray-400 text-sm">
                    © {{ new Date().getFullYear() }}
                    <SortTecText />. Alle Rechte vorbehalten.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import SortTecText from '../SortTecText.vue'
</script>
