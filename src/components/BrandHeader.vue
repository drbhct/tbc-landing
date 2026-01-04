<template>
  <header 
    class="fixed w-full z-50 transition-all duration-300 border-b border-white/10 backdrop-blur-md bg-navy-900/90"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <a href="/" class="flex-shrink-0 flex items-center cursor-pointer" @click="scrollToTop">
          <img src="/tbc-logo.png" alt="The Billing Connection" class="h-8 w-auto" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a v-for="item in navItems" :key="item.label" 
             :href="item.href" 
             class="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            {{ item.label }}
          </a>
        </nav>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center space-x-3">
          <a 
            :href="appUrls.login"
            class="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Sign In
          </a>
          <button 
            disabled
            class="bg-gold text-navy-900 px-5 py-2 rounded-md font-bold text-sm cursor-not-allowed opacity-70"
          >
            Join Free Beta (Coming Soon)
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-300 hover:text-white p-2">
            <span class="sr-only">Open menu</span>
            <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="mobileMenuOpen" class="md:hidden bg-navy-900 border-b border-gray-800">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a v-for="item in navItems" :key="item.label" 
             :href="item.href"
             @click="mobileMenuOpen = false"
             class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-navy-800">
            {{ item.label }}
          </a>
          <button 
            disabled
            @click="mobileMenuOpen = false"
            class="block w-full mt-4 bg-gold text-navy-900 px-5 py-3 rounded-md font-bold cursor-not-allowed opacity-70 text-center"
          >
            Join Free Beta (Coming Soon)
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { appUrls } from '../config.js';

const mobileMenuOpen = ref(false);

const navItems = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Library", href: "#library-preview" },
];

const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
