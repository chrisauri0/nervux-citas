<template>
  <header class="bg-base-100 shadow-sm p-4">
    <!-- Mobile Navbar -->
    <div class="lg:hidden flex justify-between items-center">
      <div class="flex items-center">
        <img src="../assets/logo.png" alt="Logo" class="h-10" />
        <h1 class="ml-2 text-xl font-bold">Nervux Companie</h1>
      </div>
      <button
        @click="toggleMobileMenu"
        class="btn btn-ghost lg:hidden"
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    <nav v-if="isMobileMenuOpen" class="lg:hidden bg-base-200 p-4 rounded-md mt-2">
      <ul class="space-y-2">
        <li><a href="#home" class="block text-lg">Home</a></li>
        <li><a href="#about" class="block text-lg">About</a></li>
        <li><a href="#services" class="block text-lg">Services</a></li>
        <li><a href="#contact" class="block text-lg">Contact</a></li>
      </ul>
    </nav>

    <!-- Desktop Navbar -->
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <RouterLink to="/">Ir a Acerca de</RouterLink>
        <a href="#HomeView" class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul class="bg-base-100 rounded-t-none p-2">
                <li link @click="navigate('PreguntasFrecuentes')"><a>hasddasdas</a></li>
                <li link @click="navigate('/')"><a>home</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>

    <!-- <nav class="hidden lg:flex justify-between items-center">
      <div class="flex items-center">
        <img src="../assets/logo.png" alt="Logo" class="h-10" />
        <h1 class="ml-2 text-xl font-bold">Nervux Companie</h1>
      </div>
      <ul class="flex space-x-6">
        <li><a href="#home" class="text-lg hover:text-primary">Home</a></li>
        <li><a href="#about" class="text-lg hover:text-primary">About</a></li>
        <li><a href="#services" class="text-lg hover:text-primary">Services</a></li>
        <li><a href="#contact" class="text-lg hover:text-primary">Contact</a></li>
      </ul>
    </nav> -->
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isMobileMenuOpen = ref(false)

const navigate = (route: string) => {
  router.push(route)
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
