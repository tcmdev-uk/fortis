<script> 
import Header from "../_Components/header.svelte";
import Helped from "../_Components/helped.svelte";
export let imageUrl = "/Assets/Images/Case Studies/DNB Electrical/electrical.jpg" 
export let logoPath = "/Assets/Images/Case Studies/DNB Electrical/dnbLogo.svg"

export let helpedData = [
    {
        icon: "/Assets/Icons/website.svg",
        title: "A Marketable Sites",
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

export let intro = "DNB Electrical, established in 2021, launched as a fresh competitor in the electrical services market. They quickly gained a solid reputation and successfully built a strong presence on Facebook through engaging content and positive client interactions. However, to further enhance their brand and reach, they sought our help to develop an even better online presence. We created a dynamic website with a memorable brand identity, complementing their successful Facebook page. This approach not only reinforces their established reputation but also extends their professional image across multiple platforms, helping DNB Electrical attract new clients and strengthen their position in the industry"



</script>

<main> 
<Header {imageUrl} {logoPath} />

<Helped {helpedData} {intro} />
</main>