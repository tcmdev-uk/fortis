<script>
  import PortfolioHeader from "$lib/components/General/portfolioHeader.svelte";
  import { page } from "$app/stores"



const helpedData =  [
  {
      icon: "/Assets/Icons/website.svg",
      title: "A Marketable Site",
      description:
        "We designed a site that not only looks awesome with a modern and appealing layout but also provides an excellent user experience.",
    },
    {
      icon: "/Assets/Icons/shout.svg",
      title: "Made a Recognizable Brand",
      description:
        "We developed a brand that stands out and is easily recognizable, making a strong impression on both existing and potential customers.",
    },
    {
      icon: "/Assets/Icons/Rocket.svg",
      title: "Fast Loading Times",
      description:
        "We ensured the site has fast loading times, so visitors can quickly access the content they need without any delays.",
    },
    {
      icon: "/Assets/Icons/trade.svg",
      title: "Relevant Graphics Design",
      description:
        "We created relevant and engaging graphics that enhance the site's appeal and effectiveness in converting visitors into customers.",
    },
 ]
    


</script>

<main>
    <PortfolioHeader
  image="/Assets/Images/Case Studies/DNB Electrical/Cover.jpg"
  logo="/Assets/Images/Case Studies/DNB Electrical/dnbLogo.svg"

  intro="
  DNB Electrical, established in 2021, launched as a fresh competitor in the electrical services market. They quickly gained a solid reputation and successfully built a strong presence on Facebook through engaging content and positive client interactions. However, to further enhance their brand and reach, they sought our help to develop an even better online presence. We created a dynamic website with a memorable brand identity, complementing their successful Facebook page. This approach not only reinforces their established reputation but also extends their professional image across multiple platforms, helping DNB Electrical attract new clients and strengthen their position in the industry"
  
  {helpedData}
  
  />




  <section class="bg-background pb-40">
    <div class="lg:w-[80%] px-4 mx-auto sm:px-6 text- lg:px-8 max-w-7xl">
      <div class="w-full flex justify-end">
        <img
          class="rounded-lg relative right-5 bottom-[-60px] w-[30%]"
          src="/Assets/Images/Case Studies/DNB Electrical/darkRed.jpg"
          alt=""
        />
      </div>
      <img
        src="/Assets/Images/Case Studies/DNB Electrical/main.jpg"
        class="rounded-lg"
        alt=""
      />

      <img
        class="rounded-lg relative w-[40%] left-5 top-[-60px]"
        src="/Assets/Images/Case Studies/DNB Electrical/red.jpg"
        alt=""
      />

      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div
          class="max-w-2xl mx-auto text-center flex flex-col justify-center items-center"
        ></div>
      </div>

      <section class=" bg-transparent lg:py-20">
        <div class="">
          <div
            class="grid f grid-cols-1 justify-bfetween gap-y-8 md:grid-cols-2 md:gap-x-16"
          >
            <div class="text-left md:text-left lg:pr-16">
              <h2 class="text-2xl font-bold font-Custom text-black lg:text-4xl">
                A high converting site
              </h2>
              <div
                class="text-[1.1rem] md:text-xl font-normal mt-4 leading[1.4] text-gray-700 flex-col font-Poppins flex gap-4"
              >
                <p class="">
                  For DNB Electrical, we designed and developed a sleek and
                  functional website to complement their already successful
                  Facebook presence. Our goal was to create a platform that
                  reflects their professionalism and enhances their online
                  visibility. The website features a user-friendly interface
                  with clear navigation, showcasing their range of electrical
                  services, expertise, and client testimonials. We incorporated
                  engaging visuals and compelling content that align with their
                  established brand identity, ensuring a seamless experience for
                  visitors. This new website not only supports their existing
                  marketing efforts but also provides a powerful tool for
                  attracting new clients and reinforcing their reputation in the
                  electrical services industry.
                </p>
              </div>
            </div>
            <div class="flex justify-end drop-shadow-2xl">
              <img
                class="w-full rounded-lg object-cover"
                src="/Assets/Images/Case Studies/DNB Electrical/WebDNB.png"
                alt="website"
              />
            </div>
          </div>
        </div>
      </section>

      <img
        src="/Assets/Images/Case Studies/DNB Electrical/van.jpg"
        class="rounded-lg mt-10 lg:mt-20"
        alt=""
      />
      <img
        src="/Assets/Images/Case Studies/DNB Electrical/business cards.jpg"
        class="rounded-lg mt-10"
        alt=""
      />
    </div>
  </section>
</main>
