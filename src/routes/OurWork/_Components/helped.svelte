<script> 

export let helpedData = [
    {
        icon: "/Assets/Icons/website.svg",
        title: "A Marketable Site",
        description: "We designed a site that not only looks awesome with a modern and appealing layout but also provides an excellent user experience."
    },
    {
        icon: "/Assets/Icons/shout.svg",
        title: "Made a Recognizable Brand",
        description: "We developed a brand that stands out and is easily recognizable, making a strong impression on both existing and potential customers."
    },
    {
        icon: "/Assets/Icons/Rocket.svg",
        title: "Fast Loading Times",
        description: "We ensured the site has fast loading times, so visitors can quickly access the content they need without any delays."
    },
    {
        icon: "/Assets/Icons/trade.svg",
        title: "Relevant Graphics Design",
        description: "We created relevant and engaging graphics that enhance the site's appeal and effectiveness in converting visitors into customers."
    },
];


export let intro = "DNB Electrical, established in 2021, launched as a fresh competitor in the electrical services market. They quickly gained a solid reputation and successfully built a strong presence on Facebook through engaging content and positive client interactions. However, to further enhance their brand and reach, they sought our help to develop an even better online presence. We created a dynamic website with a memorable brand identity, complementing their successful Facebook page. This approach not only reinforces their established reputation but also extends their professional image across multiple platforms, helping DNB Electrical attract new clients and strengthen their position in the industry."

</script>

<main> 
      
    <section class="pt-12 helped overflow-hidden bg-background">
        <div class="relative">
            <div class="mt-3 lg:mt-0 flex flex-col justify-center lg:col-span-7 ">
           
            </div>
            <div class=" lg:w-[80%] px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:grid lg:grid-cols-12 lg:grid-flow-col-dense lg:gap-24">
                <div class="px-4 mx-auto sm:px-6 lg:col-span-5 lg:mx-0 lg:px-0">
                    <p class="text-sm mt-4 font-normal tracking-widest text-gray-700">A worthwhile investment</p>
                    <h2 class="mt-2 text-3xl font-Custom font-normal text-black  sm:text-4xl lg:text-5xl xl:text-6xl">How we helped</h2>
    
                    <ul class="mt-8 space-y-8 sm:space-y-12 sm:mt-12">
                        {#each helpedData as item}
                            <li class="flex items-start">
                                <div class="inline-flex items-center justify-center w-10 p-2 h-10 bg-gray-900 rounded-full shrink-0">
                                    <img class="w-10 h-10" src={item.icon} alt="Icon">
                                </div>
                                <div class="ml-5">
                                    <h3 class="font-Custom text-black">{item.title}</h3>
                                    <p class="mt-3 text-base font-normal text-gray-700">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        {/each}
                       
                    
                   
                    </ul>
                    
    
                    <hr class="mt-8 border-gray-800 sm:mt-12" />
    
                    <div class="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                        <div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                    </div>
                </div>
    
                <div class="md:col-span-6 mt-2 lg:py-16 px-2">
                    <div class="text-base font-normal leading-7 text-gray-700 flex-col font-poppins flex gap-4">
                        <p class="text-[1.1rem] font-Poppins leading-[1.5]"> {intro} </p>
                    </div>
                    
    
                </div>                    
            </div>
        </div>
    </section>    
</main>