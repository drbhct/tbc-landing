<template>
  <section class="py-20 bg-navy-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">The Four Pillars</h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to run a compliant, profitable practice.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Credentialing -->
        <div class="bg-navy-900 border border-gray-800 p-8 rounded-xl hover:border-gold/50 transition-all group">
          <div class="h-12 w-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400 group-hover:text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-1">Credentialing</h3>
          <p class="text-sm text-gold mb-4 font-mono">powered by Rapid Credentialing</p>
          <p class="text-gray-300 mb-6">Get providers enrolled, linked, and updated without the back-and-forth chaos. Straight answers and clean workflows.</p>
          <ul class="space-y-2 mb-8">
            <li class="flex items-start text-gray-400 text-sm">
              <span class="text-green-500 mr-2">✓</span> Avoid delays & denials
            </li>
            <li class="flex items-start text-gray-400 text-sm">
              <span class="text-green-500 mr-2">✓</span> CAQH management
            </li>
          </ul>
        </div>

        <!-- Billing Mastery -->
        <div class="bg-navy-900 border border-gray-800 p-8 rounded-xl hover:border-gold/50 transition-all group">
          <div class="h-12 w-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 group-hover:text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-1">Billing Mastery</h3>
          <p class="text-sm text-gold mb-4 font-mono">powered by The Billing Connection</p>
          <p class="text-gray-300 mb-6">Fix cash flow, eliminate A/R chaos, and train your team. We don't do your billing — we help your team master it.</p>
          <ul class="space-y-2 mb-8">
            <li class="flex items-start text-gray-400 text-sm">
              <span class="text-green-500 mr-2">✓</span> Eliminate A/R chaos
            </li>
            <li class="flex items-start text-gray-400 text-sm">
              <span class="text-green-500 mr-2">✓</span> Team training modules
            </li>
          </ul>
        </div>

        <!-- Security -->
        <div class="bg-navy-900 border border-gray-800 p-8 rounded-xl hover:border-gold/50 transition-all group">
          <div class="h-12 w-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400 group-hover:text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-1">Practice Security</h3>
          <p class="text-sm text-gold mb-4 font-mono">powered by AuditFortress</p>
          <p class="text-gray-300 mb-6">Protect your practice with simplified HIPAA security, AI-generated policies, and real-world training.</p>
          <ul class="space-y-2 mb-8">
            <li class="flex items-start text-gray-400 text-sm">
              <span class="text-green-500 mr-2">✓</span> Simplified HIPAA
            </li>
            <li class="flex items-start text-gray-400 text-sm">
              <span class="text-green-500 mr-2">✓</span> AI policy generation
            </li>
          </ul>
        </div>

        <!-- Transitions -->
        <div class="bg-navy-900 border border-gray-800 p-8 rounded-xl hover:border-gold/50 transition-all group">
          <div class="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-400 group-hover:text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-1">Business Transitions</h3>
          <p class="text-sm text-gold mb-4 font-mono">powered by PracticeShift</p>
          <p class="text-gray-300 mb-6">Buy, sell, launch, or reposition. We help you make the big strategic moves and execute the shift.</p>
          <ul class="space-y-2 mb-8">
            <li class="flex items-start text-gray-400 text-sm">
              <span class="text-green-500 mr-2">✓</span> Launch or Sell
            </li>
            <li class="flex items-start text-gray-400 text-sm">
              <span class="text-green-500 mr-2">✓</span> Strategic execution
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
