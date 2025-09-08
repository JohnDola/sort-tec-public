<template>
    <div class="flex items-center space-x-3">
        <!-- Logo Icon -->
        <svg class="w-8 h-8 text-[var(--color-primary)]" viewBox="0 0 100 100" fill="currentColor">
            <!-- Clipboard background -->
            <rect x="20" y="10" width="60" height="80" rx="8" ry="8" fill="currentColor" opacity="0.1"
                stroke="currentColor" stroke-width="3" />
            <!-- Clipboard clip -->
            <rect x="35" y="5" width="30" height="15" rx="3" ry="3" fill="currentColor" />
            <circle cx="50" cy="12" r="2" fill="white" />
            <!-- Checkmark -->
            <path d="M35 45 L45 55 L65 35" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>

        <!-- Logo Text -->
        <div class="flex flex-col">
            <div class="text-2xl leading-none">
                <span class="font-medium text-gray-600">Sort</span><span
                    class="font-bold text-[var(--color-primary)]">Tec</span>
            </div>
            <div class="text-xs leading-none mt-1 text-gray-500">
                <span class="font-light">Sortieren.</span>
                <span class="font-medium">Prüfen.</span>
                <span class="font-bold">Vertrauen.</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Logo component - no additional logic needed
</script>

<style scoped>
/* Additional styles if needed */
</style>
