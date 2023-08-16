import Hero from "@/components/Hero";
import HowWeWork from "@/components/How_we_work";
import Testominal from "@/components/Testominal";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testominal
        testominalText="It would have taken months to build the product team that we
            inherited overnight with thrive. They’re built for startup speed,
            and they have consistently delivered a well-engineered product for
            us. Google is my second partnership with thrive, and they have
            earned my trust."
        companyName="Google"
        imageUrl="https://indiacsr.in/wp-content/uploads/2023/02/Sundar-Pichai.jpg"
        name="Sundar Pichai"
        position="CEO"
      />
      <HowWeWork />
    </div>
  );
}
