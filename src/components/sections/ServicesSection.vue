<template>
    <section id="leistungen" class="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Modern Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
                    Was wir für Sie <span class="text-[var(--color-primary)]">leisten</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Modernste Technologie trifft auf jahrelange Expertise – für Qualität, die überzeugt.
                </p>
            </div>

            <!-- Dynamic Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="service in services" :key="service.title"
                    class="relative h-96 rounded-[var(--border-radius)] overflow-hidden">

                    <!-- Full Background Image -->
                    <div class="absolute inset-0">
                        <img :src="getImagePath(service.title)" :alt="service.alt" class="w-full h-full object-cover" />
                    </div>

                    <!-- Dark Gradient Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>

                    <!-- Service Title with Gray Background (Top Left) -->
                    <div class="absolute top-6 left-6">
                        <div class="relative inline-block">
                            <div class="absolute inset-0 bg-[var(--color-accent)] rounded-lg transform skew-x-12"></div>
                            <h3 class="relative text-[var(--color-text)] px-4 py-2 text-xl md:text-2xl font-bold">{{
                                service.title }}</h3>
                        </div>
                    </div>

                    <!-- Content Overlay (Bottom) -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <!-- Keyword Badges -->
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="keyword in service.keywords.slice(0, 2)" :key="keyword"
                                class="inline-block px-3 py-1 bg-[var(--color-primary)] text-white rounded-md text-sm font-medium">
                                {{ keyword }}
                            </span>
                            <span v-if="service.keywords[2]"
                                class="inline-block px-3 py-1 bg-teal-500 text-white rounded-md text-sm font-medium">
                                {{ service.keywords[2] }}
                            </span>
                        </div>

                        <!-- Short Description -->
                        <p class="text-gray-200 mb-4 leading-relaxed">
                            {{ service.description }}
                        </p>

                        <!-- Benefits with Checkmarks -->
                        <div class="space-y-2">
                            <div v-for="benefit in service.benefits.slice(0, 3)" :key="benefit"
                                class="flex items-start text-sm">
                                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-300">{{ benefit }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Function to get the correct image path based on service title
const getImagePath = (serviceTitle: string): string => {
    const imageMap: Record<string, string> = {
        'Montage': '/src/assets/img/montage-v1.png',
        'Nacharbeit': '/src/assets/img/nacharbeit-v2.png',
        'Sortieren': '/src/assets/img/sortieren-v1.png',
        'Messen/Prüfen': '/src/assets/img/messen-v1.png',
        'Verpacken': '/src/assets/img/verpacken-v1.png',
        'Etikettieren': '/src/assets/img/ettiketieren-v1.png'
    }
    return imageMap[serviceTitle] || '/src/assets/img/montage-v1.png'
}

const services = [
    {
        title: 'Montage',
        description: 'Präzise Montage von Bauteilen mit höchster Qualität und Sorgfalt.',
        extendedDescription: 'Fachgerechte Montage mit modernsten Werkzeugen und Techniken. Unsere erfahrenen Techniker gewährleisten höchste Präzision und Qualität.',
        keywords: ['Präzision', 'Qualität', 'Fachgerecht'],
        benefits: [
            'Termingerechte Ausführung',
            'Qualitätskontrolle in jedem Schritt',
            'Verwendung modernster Montagetechnik'
        ],
        image: '/assets/img/montage.jpg',
        alt: 'Hände setzen Bauteile zusammen, Präzision'
    },
    {
        title: 'Nacharbeit',
        description: 'Professionelle Nacharbeit und Fehlerbehebung an Ihren Produkten.',
        extendedDescription: 'Schnelle und effiziente Behebung von Qualitätsmängeln. Wir analysieren Fehlerursachen und implementieren nachhaltige Lösungen.',
        keywords: ['Schnell', 'Effizient', 'Nachhaltig'],
        benefits: [
            'Schnelle Reaktionszeiten',
            'Ursachenanalyse und Dokumentation',
            'Nachhaltige Qualitätsverbesserung'
        ],
        image: '/assets/img/nacharbeit.jpg',
        alt: 'Techniker behebt Fehler an Bauteil'
    },
    {
        title: 'Sortieren',
        description: 'Effizientes Sortieren und Klassifizieren Ihrer Produkte nach verschiedenen Kriterien.',
        extendedDescription: 'Systematische Sortierung nach Qualität, Größe, Material oder kundenspezifischen Anforderungen. Optimierte Prozesse für maximale Effizienz.',
        keywords: ['Systematisch', 'Flexibel', 'Optimiert'],
        benefits: [
            'Flexible Sortierkriterien',
            'Automatisierte Prozesse',
            'Lückenlose Dokumentation'
        ],
        image: '/assets/img/sortieren.jpg',
        alt: 'Förderband, Mitarbeiter sortiert Teile'
    },
    {
        title: 'Messen/Prüfen',
        description: 'Präzise Messungen und Qualitätsprüfungen mit modernster Technik.',
        extendedDescription: 'Umfassende Qualitätsprüfung mit kalibrierten Messgeräten. Detaillierte Prüfprotokolle und Zertifizierungen nach gängigen Standards.',
        keywords: ['Kalibriert', 'Zertifiziert', 'Detailliert'],
        benefits: [
            'Kalibrierte Messgeräte',
            'Detaillierte Prüfprotokolle',
            'Zertifizierung nach Standards'
        ],
        image: '/assets/img/pruefen.jpg',
        alt: 'Ingenieur prüft Bauteil mit Messgerät'
    },
    {
        title: 'Verpacken',
        description: 'Sichere und professionelle Verpackung Ihrer Produkte für den Transport.',
        extendedDescription: 'Optimaler Schutz durch fachgerechte Verpackung. Angepasst an Produktanforderungen und Transportwege für maximale Sicherheit.',
        keywords: ['Sicher', 'Optimiert', 'Umweltfreundlich'],
        benefits: [
            'Transportoptimierte Verpackung',
            'Schutz vor Beschädigungen',
            'Umweltfreundliche Materialien'
        ],
        image: '/assets/img/verpacken.jpg',
        alt: 'Bauteile werden sicher in Kartons verpackt'
    },
    {
        title: 'Etikettieren',
        description: 'Professionelle Etikettierung mit QR-Codes und Produktinformationen.',
        extendedDescription: 'Vollständige Rückverfolgbarkeit durch systematische Etikettierung. QR-Codes und Barcodes für digitale Produktverfolgung.',
        keywords: ['Rückverfolgbar', 'Digital', 'QR-Code'],
        benefits: [
            'Vollständige Rückverfolgbarkeit',
            'QR-Code und Barcode-Integration',
            'Digitale Produktverfolgung'
        ],
        image: '/assets/img/etikettieren.jpg',
        alt: 'Etikettendrucker mit QR-Code Label'
    }
]
</script>
