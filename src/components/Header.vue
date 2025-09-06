<template>
  <header class="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3 sm:py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2 sm:space-x-3 group">
            <div class="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
              <img src="/logo.jpeg" alt="Nabeel Umrah Guide Logo" class="w-16 h-8 sm:w-20 sm:h-10 rounded-lg shadow-sm">
              <div class="hidden sm:block">
                <h1 class="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">NABEEL</h1>
                <p class="text-xs sm:text-sm text-gray-600">UMRAH GUIDE</p>
              </div>
              <div class="sm:hidden">
                <h1 class="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">NABEEL</h1>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <router-link 
            to="/" 
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base"
            :class="{ 'text-primary-600': $route.name === 'Home' }"
          >
            Home
          </router-link>
          <router-link 
            to="/tour" 
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base"
            :class="{ 'text-primary-600': $route.name === 'Tour' }"
          >
            Tours
          </router-link>
          <router-link 
            to="/contact" 
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base"
            :class="{ 'text-primary-600': $route.name === 'Contact' }"
          >
            Contact Us
          </router-link>
          <router-link to="/contact" class="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-2.5 px-4 xl:py-3 xl:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm xl:text-base">
            Book Now
          </router-link>
        </div>

        <!-- Tablet Navigation (hidden on mobile and desktop) -->
        <div class="hidden md:flex lg:hidden items-center space-x-4">
          <router-link 
            to="/" 
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm"
            :class="{ 'text-primary-600': $route.name === 'Home' }"
          >
            Home
          </router-link>
          <router-link 
            to="/tour" 
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm"
            :class="{ 'text-primary-600': $route.name === 'Tour' }"
          >
            Tours
          </router-link>
          <router-link 
            to="/contact" 
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm"
            :class="{ 'text-primary-600': $route.name === 'Contact' }"
          >
            Contact
          </router-link>
          <router-link to="/contact" class="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm">
            Book
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="isMobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
        <div class="flex flex-col space-y-4">
          <router-link 
            to="/" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
            :class="{ 'text-primary-600': $route.name === 'Home' }"
          >
            Home
          </router-link>
          <router-link 
            to="/tour" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
            :class="{ 'text-primary-600': $route.name === 'Tour' }"
          >
            Tours
          </router-link>
          <router-link 
            to="/contact" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
            :class="{ 'text-primary-600': $route.name === 'Contact' }"
          >
            Contact Us
          </router-link>
          <router-link to="/contact" class="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full mt-2 text-center block">
            Book Now
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  }
}
</script>
