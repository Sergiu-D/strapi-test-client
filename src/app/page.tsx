import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
// import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
// import { Video } from "@/components/Video";
// import { Testimonials } from "@/components/Testimonials";
// import { Faq } from "@/components/Faq";
// import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

const getHomePage = async () => {
  const res = await fetch(
    "http://127.0.0.1:1337/api/home-page?populate[blocks][on][blocks.hero][populate][image]=true&populate[blocks][on][blocks.hero][populate][cta]=true&populate[blocks][on][blocks.benefits][populate][items][populate][icon]=true&populate[blocks][on][blocks.benefits][populate][image]=true"
  );
  return res.json();
};

const Home = async () => {
  const {data} = await getHomePage();
  console.dir(data, {depth: null});
  return (
    <Container>
      {
        data.blocks.map((block: any) =>{
          if (block.__component === "blocks.hero") {
            return <Hero key={block.id} data={block} />;
          }

          if (block.__component === "blocks.benefits") {
            return <Benefits key={block.id} data={block} />;
          }
        })
      }
      {/* <Hero /> */}
      {/* <SectionTitle
        preTitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle> */}




      {/* <Benefits data={benefitOne} /> */}
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta /> */}
    </Container>
  );
}
export default Home;
