<script>
  import Animations from "$lib/animations.svelte";
  import Seo from "sk-seo";
</script>

<Seo
  title="FortisWebmasters: Web development for welsh businesses"
  description="FortisWebmasters: Web development for welsh businesses"
/>

<main>
  <body> </body>
  <section
    class="heroSection w-full md:h-[100vh] bg-gray-800 flex flex-col relative"
  >
    <div
      class="w-full h-full absolute bg-cover opacity-10"
      style="background-image: url(Assets/Images/General/cardiff.jpg);"
    ></div>
    <div
      class="subHeroSection w-full py-60 md:pb-50 h-full md:pt-50 flex justify-center items-center text-white flex-col relative"
    >
      <img
        src="Assets/Images/General/cardiff.svg"
        alt=""
        class="w-full absolute bottom-[-1px] md:bottom-[-13px]"
      />

      <div class="relative flex flex-col items-center">
        <h1
          class="mainTitle font-Custom drop-shadow-xl font-bold text-center text-4xl md:text-6xl"
        >
          BUILDING <span class="text-mainBlue tradeText"> BRANDS </span>
          <br /> ACROSS WALES
        </h1>

        <h2
          class="md:text-2xl text-[1.2rem] font-poppins font-normal text-center font-Poppins capitalize"
        >
          We build brands with websites, marketing and content creation
        </h2>
        <a
          href="/Contact"
          class="mainButton flex justify-center items-center bg-cover cursor-pointer bg-gray-600 drop-shadow-2xl hover:bg-mainBlue transition-colors min-w-[200px] max-w-[270px] px-12 font-bold uppercase py-4 whitespace-nowrap rounded-md mt-3 font-poppins text-[0.8rem] font-Poppins"
        >
          Lets Start Building
        </a>
      </div>
    </div>
  </section>

  <section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h2
          class="text-3xl font-bold leading-tight dropshlg font-Custom text-white sm:text-4xl lg:text-4xl"
        >
          Our Arsenal
        </h2>
        <p class="max-w-xl mx-auto mt-1 text-white text-base leading-relaxed">
          Our collection of services which are highly effective at building
          brands
        </p>
      </div>
      <div class="max-w-5xl mx-auto mt-12 sm:mt-16">
        <div
          class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-5"
        >
          <div
            class="overflow-hidden service hover:scale-105 transition-transform cursor-pointer bg-gray-800 drop-shadow-2xl border border-gray-700 rounded-xl"
          >
            <div class="p-6 flex justify-center relative flex-col items-center">
              <a class="absolute w-full h-full" href="./Contact"> </a>
              <img class="w-20" src="Assets/Icons/website1.svg" alt="" />
              <p class="mt-2 font-Custom font-medium text-white">Websites</p>
            </div>
          </div>

          <div
            class="overflow-hidden service hover:scale-105 transition-transform cursor-pointer bg-gray-800 drop-shadow-2xl border border-gray-700 rounded-xl"
          >
            <div class="p-6 flex justify-center relative flex-col items-center">
              <a class="absolute w-full h-full" href="./Contact"> </a>
              <img class="w-20" src="Assets/Icons/PPC.svg" alt="" />
              <p class="mt-2 font-Custom font-medium text-white">PPC</p>
            </div>
          </div>

          <div
            class="overflow-hidden service hover:scale-105 transition-transform cursor-pointer bg-gray-800 drop-shadow-2xl border border-gray-700 rounded-xl"
          >
            <div class="p-6 flex justify-center relative flex-col items-center">
              <a class="absolute w-full h-full" href="./Contact"> </a>
              <img class="w-20 invert" src="Assets/Icons/brand.svg" alt="" />
              <p class="mt-2 font-Custom font-medium text-white">
                Brand Design
              </p>
            </div>
          </div>

          <div
            class="overflow-hidden service hover:scale-105 transition-transform cursor-pointer bg-gray-800 drop-shadow-2xl border border-gray-700 rounded-xl"
          >
            <div class="p-6 flex justify-center relative flex-col items-center">
              <a class="absolute w-full h-full" href="./Pages"> </a>
              <img class="w-20" src="Assets/Icons/SEO.svg" alt="" />
              <p class="mt-2 font-Custom font-medium text-white">SEO</p>
            </div>
          </div>

          <div
            class="overflow-hidden service hover:scale-105 transition-transform cursor-pointer bg-gray-800 drop-shadow-2xl border border-gray-700 rounded-xl"
          >
            <div class="p-6 flex justify-center relative flex-col items-center">
              <a class="absolute w-full h-full" href="./Pages/contact.html">
              </a>
              <img class="w-20" src="Assets/Icons/content.svg" alt="" />
              <p class="mt-2 font-Custom font-medium text-white">Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative py-12 overflow-hidden bg-gray-800 sm:py-16 lg:py-20 xl:py-24"
  >
    <img
      class="absolute top-0"
      src="/Assets/TexturesAndBreakers/SECTIONBREAKER.svg"
      alt=""
    />

    <div class="relative px-10 mx-auto sm:px-6 lg:px-8 max-w-7xl font-Poppins">
      <div class="max-w-md mx-auto text-center lg:max-w-2xl">
        <h2
          class="text-2xl font-normal text-white sm:text-4xl font-Custom fadeUp"
        >
          PROOFS IN THE PUDDING
        </h2>
        <p class="mt-1 text-lg font-normal text-gray-400 fadeUp">
          All our work from the past year
        </p>
      </div>

      <div
        class="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 work lg:grid-cols-4 sm:mt-16 lg:mt-20"
      >
        <div
          class="project flex flex-col cursor-pointer overflow-hidden transition-all duration-200 transform bg-KAIN rounded hover:-translate-y-2"
        >
          <a class="absolute w-full h-full" href="/OurWork/Dnbelectric"> </a>
          <img
            class="object-cover w-full rounded-lg"
            src="/Assets/Images/General/1Artboard1.jpg"
            alt=""
          />
          <div class="flex-1 px-4 py-5 sm:p-6">
            <p class="font-Custom font-semibold text-white">PyroguardFS</p>
            <p class="text-base font-normal text-gray-400">
              Creating a safer wales with fire and security
            </p>
          </div>
        </div>

        <div
          class="project flex flex-col relative cursor-pointer overflow-hidden transition-all duration-200 transform rounded hover:-translate-y-2"
        >
          <a class="absolute w-full h-full" href="/OurWork/Dnbelectric"> </a>
          <img
            class="object-cover w-full rounded-lg"
            src="/Assets/Images/General/1Artboard 2.jpg"
            alt=""
          />
          <div class="flex-1 px-4 py-5 sm:p-6">
            <p class="font-Custom font-semibold text-white">DNB Electric</p>
            <p class="text-base font-normal text-gray-400">
              Powering Your Future
            </p>
          </div>
        </div>

        <div
          class="project flex flex-col cursor-pointer overflow-hidden transition-all duration-200 transform rounded hover:-translate-y-2"
        >
          <a class="absolute w-full h-full" href="/OurWork/LockIn"> </a>
          <img
            class="object-cover w-full rounded-lg"
            src="/Assets/Images/General/1Artboard 4.jpg"
            alt=""
          />
          <div class="flex-1 px-4 py-5 sm:p-6">
            <p class="font-Custom font-semibold text-white">
              Lock-In Plastering
            </p>
            <p class="text-base font-normal text-gray-400">
              Finishing with Precision
            </p>
          </div>
        </div>

        <div
          class="project flex flex-col cursor-pointer overflow-hidden transition-all duration-200 transform rounded hover:-translate-y-2"
        >
          <a class="absolute w-full h-full" href="/OurWork/Dnbelectric"> </a>
          <img
            class="object-cover w-full rounded-lg"
            src="/Assets/Images/General/1Artboard 3.jpg"
            alt=""
          />
          <div class="flex-1 px-4 py-5 sm:p-6">
            <p class="text font-Custom font-semibold text-white">
              Solar cleaning wales
            </p>
            <p class="text-base font-normal text-gray-400">
              Restoring for effeciency
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 px2 bg-gray-800 sm:py-16 lg:py-20 xl:py-24">
    <div class="px-4 mx-auto sm:px-6 text- lg:px-8 max-w-7xl">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 relative lg:gap-x-16 gap-y-12"
      >
        <div
          class="text-left flex flex-col items-center sm:block lg:col-span-5 sm:text-left"
        >
          <h2
            class="text-2xl font-normal font-Custom text-white sm:text-4xl lg:text-5xl xl:text-6xlTitle"
          >
            WEBSITES
          </h2>
          <div class="h-4 w-[80%] bg-mainBlue loadingBar"></div>

          <p class="mt-8 font-normal text-gray-400 fadeUp">
            A website is a crucial asset for any business these days. It serves
            as the face of your company online, providing potential customers
            with their first impression of your brand and business. A
            well-crafted website not only can showcase your products and
            services but also builds credibility and trust. By having a
            professional designed and well functioning website, a businesses can
            engage visitors, encourage longer visits, and ultimately drive
            conversions. Additionally, a responsive design ensures that your
            site looks and functions perfectly on any device, meeting the needs
            of users who access your site via mobile phones, tablets, or
            desktops.
          </p>
          <p class="mt-8 font-normal text-gray-400 fadeUp">
            Moreover, a business website acts as a central hub where customers
            can easily find information about your company, such as your
            mission, values, and contact details. It allows for seamless
            communication and interaction, offering features like contact forms,
            live chat, and FAQs to enhance customer support. An up-to-date
            website reflects a business that is modern and forward-thinking,
            showing customers that you are committed to maintaining a strong
            online presence. Investing in a professional website not only
            enhances your online image but also supports your business goals by
            providing a reliable platform for growth and customer engagement.
          </p>

          <div
            class="relative inline-flex items-center justify-center mt-8 sm:mt-12 group"
          >
            <a
              href="/Contact"
              title=""
              class="inline-flex cursor-pointer items-center text-sm font-semibold text-white transition-all duration-200 group hover:text-mainBlue hover:underline"
            >
              Get in touch today
              <svg
                class="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div class="lg:col-span-7">
          <img
            class="w-full rounded-lg fadeIn"
            src="Assets/Images/Case Studies/DNB Electrical/DNB MOCKUP.png"
            alt=""
          />

          <div
            class="grid grid-cols-1 mt-12 text-left gap-y-8 sm:grid-cols-2 gap-x-16 sm:text-left"
          >
            <div>
              <h3 class="text-xl font-Custom font-normal text-white fadeUp">
                Responsive
              </h3>
              <p class="mt-3 text-base font-normal text-gray-400 fadeUp">
                Our websites are designed to be fully responsive, ensuring a
                seamless user experience on any device. Whether viewed on a
                smartphone, tablet, or desktop, your site will look and function
                perfectly, keeping visitors engaged and satisfied.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-Custom font-normal text-white fadeUp">
                High converting
              </h3>
              <p class="mt-3 text-base font-normal text-gray-400 fadeUp">
                We specialize in creating high-converting websites that turn
                visitors into customers. With intuitive navigation, compelling
                calls-to-action, and optimized design, our websites drive
                results and support your business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-40">
      <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 gap-y-12">
        <div
          class="text-left flex flex-col items-center sm:block order-1 lg:order-2 lg:col-span-5 sm:text-left"
        >
          <h2
            class="text-2xl font-normal font-Custom text-white sm:text-4xl lg:text-5xl xl:text-6xl fadeUp"
          >
            BRANDING
          </h2>
          <div class="h-4 w-[80%] bg-mainBlue loadingBar"></div>

          <p class="mt-8 font-normal text-gray-400 fadeUp">
            A strong brand is the foundation of any successful business. It
            represents your company's identity, values, and personality,
            creating a lasting impression on your audience. Through consistent
            use of logos, colour schemes, typography, and messaging, your brand
            becomes easily recognizable and memorable. This consistency builds
            trust and loyalty among customers, as they come to associate your
            brand with reliability and quality.
          </p>
          <p class="mt-8 font-normal text-gray-400 fadeUp">
            Moreover, branding allows you to tell your business's unique story.
            It conveys vision and the journey that sets you apart from
            competitors. By sharing your brand's narrative, you create an
            emotional connection with your audience, fostering deeper
            engagement. High-quality content, including blogs, videos, and
            customer testimonials, further enhances your brand's credibility and
            authority. Investing in a strong brand presence ensures that your
            business stands out in a crowded market, driving customer engagement
            and loyalty.
          </p>

          <div
            class="relative inline-flex items-center justify-center mt-8 sm:mt-12 group"
          >
            <a
              href="/Contact"
              title=""
              class="inline-flex cursor-pointer items-center text-sm font-semibold text-white transition-all duration-200 group hover:text-mainBlue hover:underline"
            >
              Get in touch today
              <svg
                class="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div class="lg:col-span-7 lg:order-1 order-2">
          <img
            class="w-full rounded-lg fadeIn"
            src="Assets/Images/Case Studies/DNB Electrical/branding.png"
            alt=""
          />

          <div
            class="grid grid-cols-1 mt-12 text-left gap-y-8 sm:grid-cols-2 gap-x-16 sm:text-left"
          >
            <div>
              <h3 class="text-xl font-Custom font-normal text-white fadeUp">
                Complete Rebrands
              </h3>
              <p class="mt-3 font-normal text-gray-400 fadeUp">
                Our branding services offer complete rebrands, transforming your
                business identity from top to bottom. We ensure every element
                reflects your new vision, creating a cohesive and powerful brand
                image.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-Custom font-normal text-white fadeUp">
                Be different
              </h3>
              <p class="mt-3 font-normal text-gray-400 fadeUp">
                Stand out in a crowded market with a unique and distinctive
                brand. We craft branding strategies that highlight what makes
                your business special, ensuring you capture attention and leave
                a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-40">
      <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 gap-y-12">
        <div
          class="text-left flex flex-col items-center sm:block lg:col-span-5 sm:text-left"
        >
          <h2
            class="text-2xl font-normal font-Custom text-white sm:text-4xl lg:text-5xl xl:text-6xl fadeUp"
          >
            CONTENT
          </h2>
          <div class="h-4 w-[80%] bg-mainBlue loadingBar"></div>

          <p class="mt-8 font-normal text-gray-400 fadeUp">
            High-quality content is the cornerstone of any effective digital
            strategy. It serves multiple purposes: attracting and engaging
            visitors, educating your audience, and establishing your ground in
            your industry. Well-crafted content, whether in the form of blog
            posts, articles, videos, or infographics, provides value to your
            audience, answering their questions and solving their problems. This
            not only keeps them coming back for more but also encourages them to
            share your content, expanding your reach and visibility.
          </p>
          <p class="mt-8 font-normal text-gray-400 fadeUp">
            Moreover, content plays a crucial role in shaping your brand's voice
            and personality. It allows you to communicate your unique
            perspective and expertise, creating a deeper connection with your
            audience. By consistently delivering informative and engaging
            content, you can foster trust and loyalty, positioning your business
            as a thought leader in your industry. Investing in strong content
            creation ensures that your message is clear, compelling, and
            resonates with your target audience, supporting your overall
            business goals.
          </p>

          <div
            class="relative inline-flex items-center justify-center mt-8 sm:mt-12 group"
          >
            <a
              href="/Contact"
              title=""
              class="inline-flex cursor-pointer items-center text-sm font-semibold text-white transition-all duration-200 group hover:text-mainBlue hover:underline"
            >
              Get in touch today
              <svg
                class="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div class="lg:col-span-7">
          <img
            class="w-full rounded-lg fadeIn"
            src="Assets/Images/Case Studies/DNB Electrical/content.png"
            alt=""
          />

          <div
            class="grid grid-cols-1 mt-12 text-left gap-y-8 sm:grid-cols-2 gap-x-16 sm:text-left"
          >
            <div>
              <h3 class="text-xl font-Custom font-normal text-white fadeUp">
                Across the board
              </h3>
              <p class="mt-3 text-base font-normal text-gray-400 fadeUp">
                Our content strategy ensures coverage across all areas of media,
                maintaining a unified voice and tone that aligns with your
                brand. By delivering high-quality content consistently, we
                engage and inform your audience no matter what media they choose
                to consume.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-Custom font-normal text-white fadeUp">
                Give value to customers
              </h3>
              <p class="mt-3 text-base font-normal text-gray-400 fadeUp">
                We focus on providing valuable content that truly benefits your
                customers. Our material is designed to answer their questions,
                solve their problems, and offer insights, ensuring they find
                genuine value in every interaction with your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative py-12 overflow-hidden bg-gray-800 sm:py-16 lg:py-20 xl:py-24"
    >
      <div
        class="absolute bottom-0 transform -translate-x-1/2 translate-y-96 left-1/2"
      ></div>

      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <div class="flex justify-center items-center flex-col">
            <h2
              class="text-2xl font-normal font-Custom text-center text-white sm:text-4xl lg:text-5xl xl:text-6xl Title"
            >
              MARKETING
            </h2>
            <div class="h-4 w-[50%] bg-mainBlue loadingBar"></div>
          </div>
        </div>

        <hr class="mt-12 border-white sm:mt-16 lg:mt-20 border-opacity-20" />

        <div
          class="grid grid-cols-1 gap-12 pr-12 mt-12 sm:mt-16 lg:mt-20 md:grid-cols-3 md:pr-0"
        >
          <div>
            <h3 class="text-xl font-normal text-white font-Custom fadeUp">
              Social Media
            </h3>
            <p class="mt-6 text-base font-normal text-gray-400 fadeUp">
              Our social media marketing strategies boost your brand's
              visibility and engagement across all platforms. By creating
              targeted content and managing interactions, we help build a
              vibrant online community that drives brand loyalty and growth.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-normal text-white font-Custom fadeUp">
              PPC
            </h3>
            <p class="mt-6 text-base font-normal text-gray-400 fadeUp">
              Our PPC marketing campaigns are meticulously crafted to maximize
              your ad spend and drive high-quality traffic to your site. We
              focus on precise targeting and continuous optimization to ensure
              you get the best return on investment and increased conversions.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-normal text-white font-Custom fadeUp">
              SEO
            </h3>
            <p class="mt-6 text-base font-normal text-gray-400 fadeUp">
              Our SEO marketing efforts enhance your website’s visibility in
              search engines, attracting more organic traffic and improving your
              search rankings. We implement effective strategies to increase
              your site's relevance and authority, driving more potential
              customers to your business..
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 bg-gray-700 sm:py-16 lg:py-20 xl:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div
        class="grid grid-cols-1 lg:grid-cols-8 lg:gap-x-16 xl:gap-x-24 gap-y-12"
      >
        <div class="lg:col-span-5 xl:pr-24 order-2">
          <div class="max-w-lg lg:max-w-none">
            <p class="text-base font-semibold text-white">Work with us</p>

            <h2
              class="mt-1 text-3xl font-semibold tracking-tight text-white lg:mt-3 sm:text-4xl lg:text-5xl font-Custom"
            >
              Creating stronger brands everyday
            </h2>
            <div class="h-4 w-[80%] bg-mainBlue loadingBar"></div>
            <p
              class="mt-4 text-base font-normal leading-7 text-white font-Poppins lg:text-lg lg:pr-24 lg:mt-6 lg:leading-8"
            >
              Giving companies the opportunity to create a strong and
              distinctive online presence that sets them apart from competitors.
            </p>
          </div>

          <div class="mt-12">
            <a
              href="GeneralPages/Contact"
              title=""
              class="inline-flex items-center text-sm font-semibold text-white transition-all duration-200 group hover:text-mainBlue hover:underline"
            >
              Get in touch today
              <svg
                class="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div class="lg:col-span-3 order-1 md:flex items-center justify-center">
          <img
            class="w-full max-w-[505px] xl:h-full"
            src="Assets/Images/General/SCREEN.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <section class="py-40 bg-gray-700">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div
        class="max-w-2xl mx-auto text-center flex flex-col justify-center items-center"
      >
        <h2
          class="mt-6 text-3xl font-normal font-Custom text-white sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          Let's Build Something Cool Together
        </h2>
        <p class="mt-2 text-lg font-normal text-white">
          Get a free assesment of your businesses online side today!
        </p>
      </div>
    </div>
  </section>

  <Animations />
</main>
