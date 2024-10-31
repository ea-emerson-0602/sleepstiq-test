import React from 'react'
import logo from "../assets/footerlogo.png"
import Image from 'next/image'

export default function Footer() {
  return (
    <footer class="bg-mainText text-white py-12">
      <div className='mx-auto mb-8'>
        <Image className='mx-auto' src={logo.src} alt="logo" width={100} height={100} />
      </div>
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <div>
      <h3 class="font-bold mb-4">COMPANY</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-blue-400">About</a></li>
        <li><a href="#" class="hover:text-blue-400">Blog</a></li>
        <li><a href="#" class="hover:text-blue-400">Contact</a></li>
        <li><a href="#" class="hover:text-blue-400">Jobs</a></li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold mb-4">CONTACT</h3>
      <div class="space-y-2">
        <p>Phone: +234 708 507 3128</p>
        <p>16, Ogindipe Close, Upton Close</p>
      </div>
    </div>

    <div col-span-2>
      <h3 class="font-bold mb-4">CONSUMER ADVISORY</h3>
      <p>These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.</p>
      <p class="mt-4">By using our website or product, you agree to follow our terms of service.</p>
    </div>

    <div>
      <h3 class="font-bold mb-4">GET IN TOUCH</h3>
      <p class="mb-4">Feel free to get in touch with us</p>
      <a href="mailto:hello@sleepstig.com" class="text-blue-400 hover:text-blue-500">hello@sleepstig.com</a>
      <div class="flex space-x-4 mt-4">
        <a href="#" class="text-blue-400 hover:text-blue-500">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.84 19.111V11.75H6.8V9.453h2.36V7.34c0-2.337 1.422-3.62 3.53-3.62.996 0 1.857.074 2.104.107v2.44h-1.444c-1.13 0-1.35.535-1.35 1.322v1.864h2.7l-.35 2.297h-2.35v7.361h-2.8z" />
          </svg>
        </a>
        <a href="#" class="text-blue-400 hover:text-blue-500">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
        <a href="#" class="text-blue-400 hover:text-blue-500">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-.4 5c1.5 0 2.9 1.4 2.9 3.1 0 1.7-1.3 3.1-2.9 3.1-1.6 0-2.9-1.4-2.9-3.1S10.4 5 11.6 5zm7 12.3c0 1-.8 1.7-1.7 1.7H7.1c-1 0-1.7-.7-1.7-1.7V9.7h12.2v7.6z" />
          </svg>
        </a>
        <a href="#" class="text-blue-400 hover:text-blue-500">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.332 0H4.668C2.089 0 0 2.089 0 4.668v14.664C0 21.911 2.089 24 4.668 24h14.664C21.911 24 24 21.911 24 19.332V4.668C24 2.089 21.911 0 19.332 0zM8 19h-3V8h3v11zm-1.5-12.268a1.766 1.766 0 1 1 0-3.532 1.766 1.766 0 0 1 0 3.532zM20 19h-3v-5.768c0-3.194-4-2.958-4 0V19h-3V8h3v2.378c1.393-2.042 7-2.198 7 1.964V19z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="text-center mt-8">
    <p>&copy; 2020@sleepstig. All Rights Reserved.</p>
  </div>
</footer>
  )
}
