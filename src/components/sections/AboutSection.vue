<template>
    <section id="ueber-uns" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <!-- Text Content -->
                <div class="space-y-6">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Über
                            <SortTecText />
                        </h2>
                        <p class="text-gray-600 leading-relaxed text-lg">
                            Als etablierter Dienstleister im Bereich Qualitätssicherung und Prozessoptimierung
                            setzen wir seit Jahren Maßstäbe in der Branche.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-2xl font-bold text-[var(--color-text)] mb-4">Unsere Mission</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Wir sind bestrebt, unseren Kunden durch präzise Montage, sorgfältige Nacharbeit,
                            effizientes Sortieren, genaue Messungen und professionelle Verpackung einen
                            entscheidenden Wettbewerbsvorteil zu verschaffen.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-2xl font-bold text-[var(--color-text)] mb-4">Warum
                            <SortTecText />?
                        </h3>
                        <ul class="text-gray-600 space-y-2">
                            <li class="flex items-start">
                                <span class="text-[var(--color-primary)] mr-2 text-xl">•</span>
                                Jahrelange Erfahrung in der Qualitätssicherung
                            </li>
                            <li class="flex items-start">
                                <span class="text-[var(--color-primary)] mr-2 text-xl">•</span>
                                Moderne Technik und bewährte Verfahren
                            </li>
                            <li class="flex items-start">
                                <span class="text-[var(--color-primary)] mr-2 text-xl">•</span>
                                Qualifiziertes und engagiertes Fachpersonal
                            </li>
                            <li class="flex items-start">
                                <span class="text-[var(--color-primary)] mr-2 text-xl">•</span>
                                Individuelle Lösungen für jeden Kunden
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Modern Company Building Image -->
                <div class="relative h-96 rounded-[var(--border-radius)] overflow-hidden shadow-2xl">
                    <!-- Background Image -->
                    <div class="absolute inset-0">
                        <img src="/src/assets/img/modern-building-v1.png"
                            alt="Modernes Bürogebäude oder Arbeitsumgebung" class="w-full h-full object-cover" />
                    </div>

                    <!-- Enhanced Gradient Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    <!-- Company Title with Gray Background (Top Left) -->
                    <div class="absolute top-6 left-6">
                        <div class="relative inline-block">
                            <div class="absolute inset-0 bg-[var(--color-accent)] rounded-lg transform skew-x-12"></div>
                            <h3 class="relative text-[var(--color-text)] px-4 py-2 text-xl font-bold">Unser Standort
                            </h3>
                        </div>
                    </div>

                    <!-- Content Overlay (Bottom) -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <!-- Feature Badges -->
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span
                                class="inline-block px-3 py-1 bg-[var(--color-primary)] text-white rounded-md text-sm font-medium">
                                Modern
                            </span>
                            <span class="inline-block px-3 py-1 bg-teal-500 text-white rounded-md text-sm font-medium">
                                Hochwertig
                            </span>
                        </div>

                        <!-- Description -->
                        <p class="text-gray-200 mb-4 leading-relaxed">
                            Moderne Arbeitsumgebung für höchste Qualität und Präzision
                        </p>

                        <!-- Key Features -->
                        <div class="space-y-2">
                            <div class="flex items-start text-sm">
                                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-300">State-of-the-art Technologie</span>
                            </div>
                            <div class="flex items-start text-sm">
                                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-300">Optimale Arbeitsplätze</span>
                            </div>
                            <div class="flex items-start text-sm">
                                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-300">Zentrale Lage in Trossingen</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import SortTecText from '../SortTecText.vue'
</script>
