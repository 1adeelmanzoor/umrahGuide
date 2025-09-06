<template>
  <div class="tour">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-800 to-primary-600 text-white section-padding">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Choose Your Perfect 
          <span class="text-gold-400 font-arabic">عمرة</span> Package
        </h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          Select from our carefully crafted Umrah packages designed to provide you with 
          the most meaningful and comfortable spiritual journey.
        </p>
      </div>
    </section>

    <!-- Tour Packages -->
    <section class="section-padding bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          <!-- Basic Package -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="bg-primary-600 text-white p-6 text-center">
              <h3 class="text-2xl font-bold mb-2">Basic Umrah</h3>
              <div class="text-3xl font-bold mb-2">$899</div>
              <p class="text-primary-100">7 Days / 6 Nights</p>
            </div>
            <div class="p-6">
              <ul class="space-y-4 mb-8">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Umrah performance with guidance</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>3-star hotel accommodation</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Daily breakfast included</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Airport transfers</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic city tour</span>
                </li>
              </ul>
              <router-link to="/contact" class="btn-primary w-full text-center block">
                Book Now
              </router-link>
            </div>
          </div>

          <!-- Premium Package -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
            <div class="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div class="bg-gold-500 text-white p-6 text-center">
              <h3 class="text-2xl font-bold mb-2">Premium Umrah</h3>
              <div class="text-3xl font-bold mb-2">$1,299</div>
              <p class="text-gold-100">10 Days / 9 Nights</p>
            </div>
            <div class="p-6">
              <ul class="space-y-4 mb-8">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Complete Umrah with detailed guidance</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>4-star hotel near Haram</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>All meals included</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Private transportation</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Comprehensive city tours</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Visit to historical sites</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>24/7 support</span>
                </li>
              </ul>
              <router-link to="/contact" class="btn-secondary w-full text-center block">
                Book Now
              </router-link>
            </div>
          </div>

          <!-- Luxury Package -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="bg-gray-800 text-white p-6 text-center">
              <h3 class="text-2xl font-bold mb-2">Luxury Umrah</h3>
              <div class="text-3xl font-bold mb-2">$1,899</div>
              <p class="text-gray-300">14 Days / 13 Nights</p>
            </div>
            <div class="p-6">
              <ul class="space-y-4 mb-8">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>VIP Umrah experience</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>5-star hotel with Haram view</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Gourmet meals & room service</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Luxury vehicle transfers</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Private guided tours</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Visit to Madinah included</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Personal concierge service</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Spa & wellness services</span>
                </li>
              </ul>
              <router-link to="/contact" class="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full text-center block">
                Book Now
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What's Included Section -->
    <section class="section-padding bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What's Included in All Packages
          </h2>
          <p class="text-xl text-gray-600">
            Every package comes with these essential services
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Visa Assistance</h3>
            <p class="text-gray-600">Complete visa processing support</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Airport Pickup</h3>
            <p class="text-gray-600">Comfortable airport transfers</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Spiritual Guidance</h3>
            <p class="text-gray-600">Expert religious guidance</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p class="text-gray-600">Round-the-clock assistance</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Itinerary Section -->
    <section class="section-padding bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sample Itinerary
          </h2>
          <p class="text-xl text-gray-600">
            A typical day in your Umrah journey
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Day 1: Arrival in Makkah</h3>
                <p class="text-gray-600">Airport pickup, hotel check-in, orientation meeting with your guide, and preparation for Umrah.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Day 2: Umrah Performance</h3>
                <p class="text-gray-600">Complete Umrah rituals including Ihram, Tawaf around Kaaba, Sa'i between Safa and Marwa, and hair cutting.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Day 3-6: Spiritual Activities</h3>
                <p class="text-gray-600">Multiple visits to Masjid al-Haram, prayers, supplications, and visits to historical sites in Makkah.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                7
              </div>
              <div class="bg-white rounded-lg p-6 shadow-md">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Day 7: Departure</h3>
                <p class="text-gray-600">Final prayers at the Haram, hotel check-out, and airport transfer for departure.</p>
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
          Ready to Book Your Umrah Journey?
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your requirements and get a personalized quote for your perfect Umrah experience.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="btn-secondary text-lg px-8 py-4">
            Contact Us
          </router-link>
          <a href="tel:+966500396308" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center block">
            Call Now
          </a>
        </div>
      </div>  
    </section>
  </div>
</template>

<script>
export default {
  name: 'Tour'
}
</script>
