<template>
    <section id="kontakt" class="py-20 bg-[var(--color-secondary-bg)]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
                    Kontaktieren Sie uns
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Haben Sie Fragen oder benötigen Sie ein individuelles Angebot?
                    Wir freuen uns auf Ihre Nachricht und beraten Sie gerne.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <!-- Contact Form -->
                <div>
                    <div class="bg-white rounded-[var(--border-radius)] p-8 shadow-[var(--shadow-soft)]">
                        <h3 class="text-2xl font-bold text-[var(--color-text)] mb-6">Schreiben Sie uns</h3>

                        <form @submit.prevent="handleSubmit" class="space-y-6">
                            <!-- Name -->
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                                    Name *
                                </label>
                                <input id="name" v-model="contactStore.form.name" type="text" required
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-[var(--border-radius)] text-[var(--color-text)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                                    placeholder="Ihr vollständiger Name" />
                            </div>

                            <!-- Email -->
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                    E-Mail *
                                </label>
                                <input id="email" v-model="contactStore.form.email" type="email" required
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-[var(--border-radius)] text-[var(--color-text)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                                    placeholder="ihre.email@beispiel.de" />
                            </div>

                            <!-- Message -->
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                                    Nachricht *
                                </label>
                                <textarea id="message" v-model="contactStore.form.message" required rows="6"
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-[var(--border-radius)] text-[var(--color-text)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-vertical"
                                    placeholder="Beschreiben Sie Ihr Anliegen..."></textarea>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" :disabled="contactStore.isSubmitting"
                                class="w-full bg-[var(--color-primary)] text-white py-3 px-6 rounded-[var(--border-radius)] hover:bg-opacity-90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                                <span v-if="contactStore.isSubmitting">Wird gesendet...</span>
                                <span v-else>Nachricht senden</span>
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Contact Info & Image -->
                <div class="space-y-8">
                    <!-- Contact Information -->
                    <div class="bg-white rounded-[var(--border-radius)] p-8 shadow-[var(--shadow-soft)]">
                        <h3 class="text-2xl font-bold text-[var(--color-text)] mb-6">Kontaktinformationen</h3>

                        <div class="space-y-4">
                            <div class="flex items-start">
                                <svg class="w-6 h-6 text-[var(--color-primary)] mr-3 mt-1 flex-shrink-0"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <div>
                                    <p class="text-[var(--color-text)] font-medium">Adresse</p>
                                    <p class="text-gray-600">Musterweg 10<br>78647 Trossingen</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <svg class="w-6 h-6 text-[var(--color-primary)] mr-3 mt-1 flex-shrink-0"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <div>
                                    <p class="text-[var(--color-text)] font-medium">Telefon</p>
                                    <p class="text-gray-600">+49 (0) 7425 123456</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <svg class="w-6 h-6 text-[var(--color-primary)] mr-3 mt-1 flex-shrink-0"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <div>
                                    <p class="text-[var(--color-text)] font-medium">E-Mail</p>
                                    <p class="text-gray-600">info@sorttec.de</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Office Image Placeholder -->
                    <div class="bg-white rounded-[var(--border-radius)] p-8 text-center shadow-[var(--shadow-soft)]">
                        <div
                            class="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-[var(--border-radius)] flex items-center justify-center mb-4">
                            <div class="text-gray-500 text-center">
                                <svg class="w-16 h-16 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                        clip-rule="evenodd" />
                                </svg>
                                <p class="text-sm">Büro-Bild Platzhalter</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">
                            Modernes Bürogebäude oder Arbeitsumgebung
                        </p>
                        <p class="text-xs text-gray-500 mt-2">
                            Pfad: /assets/img/kontakt.jpg
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useContactStore } from '../../stores/contact'

const contactStore = useContactStore()

const handleSubmit = async () => {
    const result = await contactStore.submitForm()
    if (result.success) {
        alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.')
    } else {
        alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.')
    }
}
</script>
