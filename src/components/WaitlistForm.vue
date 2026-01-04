<template>
  <div class="w-full max-w-md mx-auto">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div v-if="!submitted">
        <div class="space-y-4">
          <div>
            <label for="name" class="sr-only">Full Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-5 py-4 bg-navy-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label for="email" class="sr-only">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-5 py-4 bg-navy-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
              placeholder="Email Address"
            />
          </div>
          
          <button
            type="button"
            disabled
            class="w-full flex justify-center items-center px-8 py-4 bg-gold text-navy-900 font-bold rounded-lg cursor-not-allowed opacity-70"
          >
            Join the Free Beta (Coming Soon)
          </button>
          <p class="text-xs text-gray-500 text-center mt-4">
            Limited spots available. By joining, you agree to our Terms of Service.
          </p>
        </div>
      </div>

      <div v-else class="bg-navy-900 border border-green-900/50 rounded-xl p-8 text-center">
        <div class="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">You're on the list!</h3>
        <p class="text-gray-400">
          Thanks for joining. We'll be in touch shortly with your access details.
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const loading = ref(false);
const submitted = ref(false);
const form = reactive({
  name: '',
  email: ''
});

const handleSubmit = async () => {
  loading.value = true;
  
  // TODO: Connect to your actual API/Supabase
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  console.log('Waitlist Submission:', form);
  
  loading.value = false;
  submitted.value = true;
};
</script>
