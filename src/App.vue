<template>
  <div class="min-h-screen bg-navy-900 text-white font-sans selection:bg-gold selection:text-navy-900">
    <BrandHeader />
    
    <main>
      <HeroSection />
      
      <div id="features">
        <PillarsSection />
      </div>
      
      <div id="about">
        <ValuePropSection />
      </div>
      
      <div id="library-preview">
        <LibraryPreviewSection />
      </div>
      
      <ComingSoonSection />
      
      <CommunityFeedSection />
      
      <ConsultingSection />
      
      <div id="waitlist">
        <section class="py-20 bg-navy-800 relative overflow-hidden">
          <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>
          <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-3xl font-bold mb-4 text-white">Get clarity. Get confidence. <span class="text-gold">Get TBC.</span></h2>
              <p class="text-gray-300 mb-8">One platform. Four pillars. Unlimited answers.</p>
              <WaitlistForm />
            </div>
          </div>
        </section>
      </div>
    </main>
    
    <footer class="bg-navy-900 border-t border-gray-800 py-12 text-center text-gray-500 text-sm">
      <div class="container mx-auto px-4">
        <div class="flex justify-center gap-6 mb-8">
          <a href="#" class="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-gold transition-colors">Terms of Service</a>
          <a href="#" class="hover:text-gold transition-colors">Contact</a>
        </div>
        <p>&copy; {{ new Date().getFullYear() }} TBC. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import BrandHeader from './components/BrandHeader.vue';
import HeroSection from './components/HeroSection.vue';
import PillarsSection from './components/PillarsSection.vue';
import ValuePropSection from './components/ValuePropSection.vue';
import LibraryPreviewSection from './components/LibraryPreviewSection.vue';
import ComingSoonSection from './components/ComingSoonSection.vue';
import CommunityFeedSection from './components/CommunityFeedSection.vue';
import ConsultingSection from './components/ConsultingSection.vue';
import WaitlistForm from './components/WaitlistForm.vue';
</script>
