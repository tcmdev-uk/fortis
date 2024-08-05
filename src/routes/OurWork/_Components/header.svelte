

<script>

    export let imageUrl = ""
    export let logoPath = ""
</script>


<section class="w-full h-[100vh] object-cover relative flex justify-center items-center">
    <div class="absolute bg-dark opacity-100 w-full h-full"></div>
    <img class="absolute w-full h-full object-cover opacity-5" src={imageUrl} alt="">
    <img alt="logo" class="relative h-full max-w-[200px] md:max-w-[200px] lg:h-40" src={logoPath}>
</section>
