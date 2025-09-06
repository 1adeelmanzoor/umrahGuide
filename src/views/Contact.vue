<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-800 to-primary-600 text-white section-padding">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Get in Touch
        </h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          Ready to start your spiritual journey? Contact us today and let us help you plan 
          the perfect Umrah experience tailored to your needs.
        </p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="section-padding bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Book Your Umrah Journey</h2>
            <p class="text-gray-600 mb-6">Fill out the form below to get a personalized quote and start planning your spiritual journey.</p>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    v-model="form.firstName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="form.lastName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                >
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="+1 (555) 123-4567"
                >
              </div>

              <div>
                <label for="country" class="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <select
                  id="country"
                  v-model="form.country"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="AE">UAE</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="package" class="block text-sm font-medium text-gray-700 mb-2">
                  Package Interest
                </label>
                <select
                  id="package"
                  v-model="form.package"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a package</option>
                  <option value="basic">Basic Umrah (7 days)</option>
                  <option value="premium">Premium Umrah (10 days)</option>
                  <option value="luxury">Luxury Umrah (14 days)</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>

              <div>
                <label for="travelDate" class="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Travel Date
                </label>
                <input
                  type="date"
                  id="travelDate"
                  v-model="form.travelDate"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
              </div>

              <div>
                <label for="groupSize" class="block text-sm font-medium text-gray-700 mb-2">
                  Group Size
                </label>
                <select
                  id="groupSize"
                  v-model="form.groupSize"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select group size</option>
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3-5">3-5 people</option>
                  <option value="6-10">6-10 people</option>
                  <option value="10+">10+ people</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your requirements, questions, or any special requests..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Contact Details -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p class="text-gray-600">
                      Near Masjid al-Haram<br>
                      Makkah, Saudi Arabia
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p class="text-gray-600">+966 500396308</p>
                    <p class="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p class="text-gray-600">nabeelumrahguide@gmail.com</p>
                    <p class="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p class="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Contact -->
            <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-lg p-8 text-white">
              <h2 class="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
              <p class="text-primary-100 mb-6">
                For urgent inquiries or immediate booking assistance, call us directly.
              </p>
              <div class="space-y-4">
                <a href="tel:+966500396308" class="flex items-center space-x-3 bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <div class="font-semibold">Call Now</div>
                    <div class="text-sm text-primary-200">+966 500396308</div>
                  </div>
                </a>
                <a href="https://wa.me/966500396308?text=Hello! I'm interested in booking an Umrah package. Please provide me with more information." class="flex items-center space-x-3 bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <div>
                    <div class="font-semibold">WhatsApp</div>
                    <div class="text-sm text-primary-200">Quick booking support</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600">
            Common questions about our Umrah services
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="space-y-6">
            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">How far in advance should I book?</h3>
              <p class="text-gray-600">We recommend booking at least 2-3 months in advance to secure the best accommodations and ensure proper visa processing time.</p>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">What documents do I need?</h3>
              <p class="text-gray-600">You'll need a valid passport, passport-sized photos, and we'll assist you with the Umrah visa application process.</p>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Can I customize my package?</h3>
              <p class="text-gray-600">Absolutely! We offer flexible packages and can customize your itinerary based on your specific needs and preferences.</p>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">What if I need to cancel?</h3>
              <p class="text-gray-600">We offer flexible cancellation policies. Please contact us to discuss your specific situation and we'll work with you to find the best solution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      isSubmitting: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        package: '',
        travelDate: '',
        groupSize: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Reset form
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        package: '',
        travelDate: '',
        groupSize: '',
        message: ''
      }
      
      this.isSubmitting = false
      
      // Show success message (you can implement a toast notification here)
      alert('Thank you for your booking inquiry! We will contact you within 24 hours to discuss your Umrah journey and provide a personalized quote.')
    }
  }
}
</script>
