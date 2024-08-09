import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";

import { BrickWall, Cpu, Fingerprint, Fuel, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] w-full flex flex-wrap justify-center lg:justify-start items-center">
        <div className="relative h-screen w-full overflow-hidden">
          <Image
            src="/spotlight-bg.webp"
            alt="Spotlight Background"
            layout="fill"
            objectFit="cover"
            className="z-[-1]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-start text-white lg:ms-12">
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2">Landing Page Title:<br />Rest of Title</p>
              <p className="text-xl mb-2">Jan. 01, 2024</p>
              <AnimatedButton variant="light">Learn More</AnimatedButton>
            </div>
          </div>
        </div>

      </section>

      <section className="flex flex-wrap justify-center text-center text-black topography-svg-bg">
        <div className="w-full text-4xl text-center font-bold my-4">Capabilities</div>
        <div className="w-full md:w-1/3 lg:w-1/5 text-lg font-semibold my-4"><BrickWall className="mx-auto" color="black" size={48} />Construction</div>
        <div className="w-full md:w-1/3 lg:w-1/5 text-lg font-semibold my-4"><Fuel className="mx-auto" color="black" size={48} />Bulk Fuel Services</div>
        <div className="w-full md:w-1/3 lg:w-1/5 text-lg font-semibold my-4"><Shield className="mx-auto" color="black" size={48} />Base Ops Support</div>
        <div className="w-full md:w-1/3 lg:w-1/5 text-lg font-semibold my-4"><Fingerprint className="mx-auto" color="black" size={48} />Security & Protection</div>
        <div className="w-full md:w-1/3 lg:w-1/5 text-lg font-semibold my-4"><Cpu className="mx-auto" color="black" size={48} />Cyber & IT</div>
      </section>

      <section className="flex flex-wrap justify-center p-4">
        <div className="w-full lg:w-1/3 min-h-72 rounded-xl shadow overflow-hidden">
          <Image
            src="/ftproject-bg.webp"
            alt="Test"
            width={1000}
            height={1000}
            // layout="fill"
            // objectFit="cover"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <p className="text-xl font-bold">Featured Past Performance</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laboriosam alias exercitationem neque impedit culpa vel non sequi molestiae tempore, perspiciatis, amet reiciendis quibusdam ut voluptas, odit harum accusamus fugit laudantium soluta dolorum incidunt sit optio. Architecto, dignissimos. Ipsum, veniam quisquam. Explicabo ipsa minus dolor fuga quia quasi laboriosam quibusdam!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum hic harum cumque dolorem, earum possimus officia voluptatibus maxime voluptatem a excepturi facere optio illum expedita quidem quis fugiat labore minus.</p>
          <AnimatedButton variant="light">Learn More</AnimatedButton>
        </div>
      </section>

      <section className="flex flex-wrap justify-center topography-svg-bg p-4">
        <div className="w-full text-4xl text-center font-bold my-4">Corporate in Numbers</div>
        <div className="w-full lg:w-1/3 text-center">test</div>
        <div className="w-full lg:w-1/3 text-center">test</div>
        <div className="w-full lg:w-1/3 text-center">test</div>
      </section>

      <section className="flex flex-wrap justify-center p-4">
        <div className="w-full lg:w-1/3 min-h-72 rounded-xl shadow overflow-hidden">
          <Image
            src="/ftproject-bg.webp"
            alt="Test"
            width={1000}
            height={1000}

          />
        </div>
        <div className="w-full lg:w-2/3">
          <p className="text-xl font-bold">Equal Employment Opportunity</p>
          <p>Corporate is committed to providing equal employment opportunities to all qualified individuals without regard to race, color, religion, sex, national origin, age, disability, sexual orientation, gender identity, or any other characteristic protected by applicable laws. This policy applies to all aspects of employment, including but not limited to recruitment, hiring, promotions, transfers, termination, and employee benefits.</p>
          <p>Read more to understand how Corporate adheres to state, national, and international standards to ensure it offers an equal employment opportunity to all candidates</p>
          <AnimatedButton variant="light">Learn More</AnimatedButton>
        </div>
      </section>

      {/* <section>
        <div className="h-96 lg:h-[100px]">
          <iframe src="google_maps_link" width="100%" height="100%" loading="lazy" title="Map location of HQ office." data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="center-bottom"></iframe>
        </div>
      </section> */}
    </>
  );
}
