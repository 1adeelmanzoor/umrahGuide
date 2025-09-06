<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden min-h-screen flex items-center">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gold-400 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-gold-300 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 section-padding">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div class="space-y-6 sm:space-y-8 text-center xl:text-left">
            <div class="space-y-4 sm:space-y-6">
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Experience the Sacred Journey of 
                <span class="text-gold-400 font-arabic block mt-1 sm:mt-2">عمرة</span>
              </h1>
              <p class="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto xl:mx-0">
                Join Nabeel, your trusted private Umrah guide in Makkah, for an authentic and spiritually enriching pilgrimage experience. 
                We provide personalized guidance, comfortable accommodations, and deep cultural insights.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center xl:justify-start">
              <router-link to="/contact" class="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-center">
                Start Your Journey
              </router-link>
              <router-link to="/tour" class="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-center">
                View Packages
              </router-link>
            </div>
            
            <!-- Trust Indicators -->
            <div class="flex flex-col sm:flex-row items-center justify-center xl:justify-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 pt-4">
              <div class="flex items-center space-x-2">
                <div class="flex text-gold-400">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <span class="text-xs sm:text-sm text-gray-300">4.9/5 Rating</span>
              </div>
              <div class="text-xs sm:text-sm text-gray-300">
                <span class="font-semibold">500+</span> Happy Pilgrims
              </div>
            </div>
          </div>
          
          <div class="relative mt-8 xl:mt-0">
            <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white border-opacity-20 shadow-2xl">
              <div class="text-center space-y-4 sm:space-y-6">
                <div class="relative">
                  <div class="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span class="text-white text-2xl sm:text-4xl font-bold">N</span>
                  </div>
                  <div class="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                
                <div>
                  <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">Nabeel's Promise</h3>
                  <p class="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                    "Every pilgrim deserves a meaningful and comfortable Umrah experience. 
                    I'm here to guide you through every step of this sacred journey."
                  </p>
                </div>
                
                <div class="grid grid-cols-2 gap-4 sm:gap-6 text-center">
                  <div class="bg-white bg-opacity-10 rounded-xl p-3 sm:p-4">
                    <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-gold-400 mb-1">500+</div>
                    <div class="text-xs sm:text-sm text-gray-300">Happy Pilgrims</div>
                  </div>
                  <div class="bg-white bg-opacity-10 rounded-xl p-3 sm:p-4">
                    <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-gold-400 mb-1">5+</div>
                    <div class="text-xs sm:text-sm text-gray-300">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16 lg:mb-20">
          <div class="inline-block bg-primary-100 text-primary-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Why Choose Us
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your Trusted Umrah Partner
          </h2>
          <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We provide comprehensive Umrah packages designed to make your spiritual journey comfortable, 
            meaningful, and memorable with personalized care and attention.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div class="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Expert Local Guidance</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
              Benefit from Nabeel's deep knowledge of Makkah and Madinah, ensuring you visit all significant sites 
              and understand their historical and spiritual importance with authentic insights.
            </p>
          </div>

          <div class="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Flexible Itineraries</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
              Customize your Umrah experience with flexible schedules that accommodate your needs, 
              whether you're traveling solo, with family, or in a group. We adapt to your pace.
            </p>
          </div>

          <div class="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 sm:col-span-2 lg:col-span-1">
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Complete Support</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
              From visa assistance to accommodation booking and transportation, we handle all the logistics 
              so you can focus entirely on your spiritual journey and connection with Allah.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section-padding bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Pilgrims Say
          </h2>
          <p class="text-xl text-gray-600">
            Hear from those who have experienced the journey with us
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <div class="flex items-center mb-4">
              <div class="flex text-gold-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              "Nabeel made our Umrah experience truly special. His knowledge and guidance helped us understand 
              the spiritual significance of every step we took."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center mr-3">
                <span class="text-primary-700 font-semibold">A</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900">Ahmed Al-Rashid</div>
                <div class="text-sm text-gray-600">Dubai, UAE</div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl p-6">
            <div class="flex items-center mb-4">
              <div class="flex text-gold-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              "The attention to detail and personalized service exceeded our expectations. 
              Every aspect of our journey was perfectly organized."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gold-200 rounded-full flex items-center justify-center mr-3">
                <span class="text-gold-700 font-semibold">F</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900">Fatima Hassan</div>
                <div class="text-sm text-gray-600">London, UK</div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl p-6">
            <div class="flex items-center mb-4">
              <div class="flex text-gold-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              "As first-time Umrah pilgrims, we were nervous about the process. Nabeel's guidance and support 
              made everything smooth and meaningful."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                <span class="text-green-700 font-semibold">M</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900">Mohammed Ali</div>
                <div class="text-sm text-gray-600">Toronto, Canada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Begin Your Spiritual Journey?
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Contact us today to start planning your personalized Umrah experience. 
          Let us help you create memories that will last a lifetime.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="btn-secondary text-lg px-8 py-4">
            Get Started
          </router-link>
          <router-link to="/tour" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
            View Tours
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
