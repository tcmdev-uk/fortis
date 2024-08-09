<script>
  import "../app.css";
  import gsap from "gsap";
  import Navbar from "$lib/components/General/Navbar.svelte";
  import Footer from "../lib/components/General/footer.svelte";
  import Seo from "sk-seo";
</script>

<Navbar />
<main>
  <slot />
</main>
<Footer />

<style lang="postcss">
</style>
