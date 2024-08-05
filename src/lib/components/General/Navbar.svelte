<script lang="js">
  import gsap from "gsap";

let isMenuVisible = false;

function toggleMenu() { 
  isMenuVisible = !isMenuVisible

  if (isMenuVisible) { 
      gsap.from(".menu", { opacity: 0, duration: 0.5 });
    }
}





</script>

<main> 
    <section class="menu  overflow-auto fixed w-full h-full bg-gray-800 z-40 bg-opacity-90 {
      isMenuVisible ? 'flex' : 'hidden'
} justify-center items-center">
  <button class="w-full h-full absolute cursor-default" on:click={toggleMenu}></button>
        <div class="flex justify-center items-center flex-col relative  w-[80%]"> 
          <div class="flex flex-col text-center font-Custom gap-2"> 
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" on:click={toggleMenu} href="/"> Home </a>
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" on:click={toggleMenu} href="/About"> About </a>
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" on:click={toggleMenu} href="/Contact"> Contact</a>
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" on:click={toggleMenu} href="/OurWork"> Our Work </a>
        </div>
      
        </div> 
      
      
      </section>




<nav class="navbarchild border-gray-200d h-auto bg-transparent fixed top-0 w-full z-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-10">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/Assets/Logo/logo.svg" class="h-10 rounded-lg drop-shadow-2xl fortisLogo bg-gray-600 px-5 py-2" alt="Fortis Logo" />
     
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button aria-expanded={isMenuVisible} on:click={toggleMenu} data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center bg-gray-600 p-2 w-10 h-10 justify-center hamburgerButton text-sm text-white rounded-lg bg-gray-6
            00 focus:outline-none focus:ring-2 focus:ring-mainBlue " aria-controls="navbar-cta">
       <img class="hamburgerIcon" src="/Assets/Icons/menu.svg" alt="">
      </button>
  </div>
 
  </div>
  </nav>
</main>