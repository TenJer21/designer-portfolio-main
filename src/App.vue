<template>
  <div class="banner-1">
    <!-- NavBar -->
    <nav class="container px-6 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <div class="relative w-16 h-16">
          <img class="rounded-full border border-gray-100 shadow-sm" src="441542983_1202163214470482_5390228750415569806_n.jpg" alt="user image" />
        </div>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li class="menu-button"><a href to="/">Home</a></li>
        <li class="menu-button"><a href to="/works">Works</a></li>
        <li class="menu-button"><a href to="/testimonials">Testimonials</a></li>
        <li class="menu-button"><a href to="/about">About</a></li>
      </ul>
    </nav>

    <!-- End Navbar -->

    <div class="flex items-center">
      <div class="w-11/12 space-y-5 md:space-y-10">
        <h3 class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans">
          👾 Eyoo!,
        </h3>
        <h1 class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-Eczar font-bold leading-tight text-gray-700">
          It's <a href="https://www.linkedin.com/in/denidenise" target="_blank" class="text-black hover:underline">DeniDenise</a>👾<br />The Mysterious Coder
        </h1>

        <div class="md:flex gap-1 md:gap-10">
          <button class="text-white bg-gray-800 submit-button hidden md:block">
            View My Work
          </button>
          <button class="text-gray-800 border-4 border-gray-800 submit-button mb-5 md:mb-0">
            Contact Me
          </button>
        </div>
      </div>

      <div class="w-8/12 flex justify-end">
        <img class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]" src="laptopCat.png" alt="user image" />
      </div>
    </div>

    <!-- Works Section -->
    <router-view name="works"></router-view>

    <!-- Testimonials Section -->
    <div id="testimonials">
      <div class="space-y-4 grid place-items-center mt-5">
        <h3 class="heading3">Feedback and Critics</h3>
        <p class="font-work_sans text-gray-600 font-semibold leading-relaxed">
          Some of my favorite testimonials from my clients
        </p>
      </div>
      <!-- ... (Testimonials content remains unchanged) ... -->
    </div>

    <!-- About Section -->
    <div id="about">
      <div class="banner-2 md:flex items-center md:justify-evenly">
        <img class="md:h-[500px] h-[400px]" src="dabCAt.png" alt="user image" />
        <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
          <h4 class="project-title item">Thou shall not be named..👻</h4>
          <p class="font-work_sans">
            Welcome to my magical world! My name is Denise but Im known to be Wombat in the digital world. 
            I'm good with UI/UX design and I love coding! I'm also a gamer so hmu if you wanna play or need some help👾
            <br />
            I'm currently a 4th year Computer Engineering Student in TIP Manila, majoring in Data Science because who doesn't love data and analytics? It's money it the making! 
          </p>
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            View Case Study
          </button>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="banner-1 flex h-full items-center">
      <div class="w-7/12 p-12">
        <h2 class="text-gray-700 md:text-6xl text-2xl font-Eczar mb-5 font-bold">
          Let's work together and make everything super cute and super useful.
        </h2>
        <a class="underline text-2xl text-blue-600 font-work_sans"
          >📧 alezandradeniseadr@gmail.com</a
        >
      </div>
      <div class="w-5/12 pr-28">
        <div class="flex flex-wrap justify-end gap-2">
          <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
          </button>
          <!-- ... (Other buttons remain unchanged) ... -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from './LoginPage.vue'

const routes = [
  { path: '/', component: this },
  { path: '/loginPage', component: LoginPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default {
  data() {
    return {
      showMenu: false,
    }
  },
  router: router
}
</script>