<template>
  <section class="py-24 bg-navy-800 border-y border-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2">
          <div class="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-bold text-sm mb-6">
            FREE BETA ACCESS
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Full access. Free during Beta.</h2>
          <p class="text-xl text-gray-300 mb-8">Every tool. Every template. Every checklist. Every video. All unlocked — so your team gets everything they need, right now.</p>
          
          <div class="grid grid-cols-2 gap-4 mb-8">
            <ul class="space-y-3">
              <li class="flex items-center text-gray-400">
                <span class="w-2 h-2 bg-gold rounded-full mr-3"></span> Full TBC Library
              </li>
              <li class="flex items-center text-gray-400">
                <span class="w-2 h-2 bg-gold rounded-full mr-3"></span> Credentialing Guides
              </li>
              <li class="flex items-center text-gray-400">
                <span class="w-2 h-2 bg-gold rounded-full mr-3"></span> Billing Mastery Trainings
              </li>
              <li class="flex items-center text-gray-400">
                <span class="w-2 h-2 bg-gold rounded-full mr-3"></span> Security Policies
              </li>
            </ul>
            <ul class="space-y-3">
              <li class="flex items-center text-gray-400">
                <span class="w-2 h-2 bg-gold rounded-full mr-3"></span> Transitions Blueprints
              </li>
              <li class="flex items-center text-gray-400">
                <span class="w-2 h-2 bg-gold rounded-full mr-3"></span> SOPs & Checklists
              </li>
              <li class="flex items-center text-gray-400">
                <span class="w-2 h-2 bg-gold rounded-full mr-3"></span> Tools & Calculators
              </li>
              <li class="flex items-center text-gray-400">
                <span class="w-2 h-2 bg-gold rounded-full mr-3"></span> Live Replays
              </li>
            </ul>
          </div>

          <button 
            disabled
            class="inline-block bg-gold text-navy-900 font-bold py-3 px-8 rounded-lg cursor-not-allowed opacity-70"
          >
            Create Free Account (Coming Soon)
          </button>
        </div>
        
        <div class="lg:w-1/2 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-navy-800 to-transparent z-10"></div>
          <!-- Abstract representation of library content -->
          <div class="grid grid-cols-2 gap-4 opacity-60 transform rotate-2 scale-95">
            <div class="bg-navy-700 p-4 rounded h-32"></div>
            <div class="bg-navy-600 p-4 rounded h-32 mt-8"></div>
            <div class="bg-navy-600 p-4 rounded h-32 -mt-8"></div>
            <div class="bg-navy-700 p-4 rounded h-32"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center z-20">
            <span class="bg-navy-900/90 border border-gray-700 text-white px-6 py-3 rounded-lg shadow-xl backdrop-blur-sm">
              Unlock the Vault
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { appUrls } from '../config.js';
</script>
