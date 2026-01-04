<template>
  <section class="relative overflow-hidden bg-navy-900 text-white pt-32 pb-20 lg:pt-48 lg:pb-32">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-800/50 to-transparent"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          Where chiropractic teams finally get the 
          <span class="text-gradient-gold">straight answers</span> 
          they need to run the practice.
        </h1>
        
        <p class="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
          Credentialing. Billing. Security. Transitions.<br class="hidden sm:block" />
          All in one place. Zero fluff. The stuff that actually matters.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            disabled
            class="w-full sm:w-auto px-8 py-4 bg-gold text-navy-900 font-bold rounded-lg cursor-not-allowed opacity-70 text-center"
          >
            Get Free Beta Access (Coming Soon)
          </button>
          
          <a 
            :href="appUrls.login"
            class="inline-block w-full sm:w-auto px-8 py-4 bg-navy-800 hover:bg-navy-700 border border-gray-700 text-white font-semibold rounded-lg transition-all text-center"
          >
            Sign In
          </a>
        </div>
        
        <p class="mt-6 text-sm text-gray-400 italic">
          Free during Beta. No credit card required.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { appUrls } from '../config.js';
</script>

<style scoped>
.text-gradient-gold {
  background: linear-gradient(to right, #D4AF37, #F3E5AB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
