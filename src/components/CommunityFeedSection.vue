<template>
  <section class="py-20 bg-navy-800">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-2xl font-bold text-white mb-8">Community + Content Feed</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div class="bg-navy-900 p-6 rounded-lg border border-gray-800 text-left">
          <span class="text-xs font-bold text-gold block mb-2">LIVE TRAINING</span>
          <h4 class="font-semibold text-white">The Billing Connection Live</h4>
          <p class="text-sm text-gray-500 mt-2">Weekly deep dives into A/R</p>
        </div>
        
        <div class="bg-navy-900 p-6 rounded-lg border border-gray-800 text-left">
          <span class="text-xs font-bold text-blue-400 block mb-2">UPDATE</span>
          <h4 class="font-semibold text-white">Credentialing Alerts</h4>
          <p class="text-sm text-gray-500 mt-2">Payer changes & requirements</p>
        </div>
        
        <div class="bg-navy-900 p-6 rounded-lg border border-gray-800 text-left">
          <span class="text-xs font-bold text-green-400 block mb-2">RESOURCE</span>
          <h4 class="font-semibold text-white">Coding Updates</h4>
          <p class="text-sm text-gray-500 mt-2">Latest CPT/ICD-10 news</p>
        </div>
        
        <div class="bg-navy-900 p-6 rounded-lg border border-gray-800 text-left">
          <span class="text-xs font-bold text-purple-400 block mb-2">EVENT</span>
          <h4 class="font-semibold text-white">Transitions Roundtable</h4>
          <p class="text-sm text-gray-500 mt-2">Strategic planning sessions</p>
        </div>
      </div>
      
      <div class="mt-12">
        <a :href="appUrls.library" class="text-gold hover:text-white font-semibold transition-colors underline underline-offset-4">
          Explore the Library →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { appUrls } from '../config.js';
</script>
