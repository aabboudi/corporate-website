import Image from "next/image";
import { BrickWall, Cpu, Fingerprint, Fuel, Shield } from "lucide-react";

import AnimatedButton from "@/components/AnimatedButton";
import { GlobeHero } from "@/components/globe-hero";

export default function Home() {
  return (
    <>
      <section className="min-h-screen max-w-8xl mx-auto px-8">
        <GlobeHero />
      </section>

      <section className="flex flex-wrap min-h-96 justify-center text-center topography-svg-bg">
        <div className="w-full flex justify-center items-center">
          <h2 className="text-5xl text-center font-bold my-4">Capabilities</h2>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/5 text-lg font-semibold my-4">
          <BrickWall className="mx-auto" color="currentColor" size={48} />
          Construction
        </div>
        <div className="w-full md:w-1/3 lg:w-1/5 text-lg font-semibold my-4">
          <Fuel className="mx-auto" color="currentColor" size={48} />
          Bulk Fuel Services
        </div>
        <div className="w-full md:w-1/3 lg:w-1/5 text-lg font-semibold my-4">
          <Shield className="mx-auto" color="currentColor" size={48} />
          Base Ops Support
        </div>
        <div className="w-full md:w-1/3 lg:w-1/5 text-lg font-semibold my-4">
          <Fingerprint className="mx-auto" color="currentColor" size={48} />
          Security & Protection
        </div>
        <div className="w-full md:w-1/3 lg:w-1/5 text-lg font-semibold my-4">
          <Cpu className="mx-auto" color="currentColor" size={48} />
          Cyber & IT
        </div>
      </section>

      <section className="grid lg:grid-cols-5 justify-between gap-12 p-12 lg:p-36">
        <div className="lg:col-span-2 h-72 md:min-h-48 rounded-xl shadow overflow-hidden">
          <Image
            alt="Test"
            height={1000}
            priority={false}
            src="/ftproject-bg.webp"
            width={1000}
            // layout="fill"
            // objectFit="cover"
          />
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-5xl text-center lg:text-start font-bold mb-4">
            Featured Past Performance
          </h2>
          <p className="md:text-justify mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            laboriosam alias exercitationem neque impedit culpa vel non sequi
            molestiae tempore, perspiciatis, amet reiciendis quibusdam ut
            voluptas, odit harum accusamus fugit laudantium soluta dolorum
            incidunt sit optio. Architecto, dignissimos. Ipsum, veniam quisquam.
            Explicabo ipsa minus dolor fuga quia quasi laboriosam quibusdam!
          </p>
          <p className="md:text-justify mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            ratione modi aut tempore distinctio quibusdam ducimus minus
            temporibus perspiciatis quam saepe commodi ut vitae autem quos
            exercitationem libero harum, porro labore! Iste non perferendis
            dolorem quia animi adipisci labore totam earum. Tenetur, nihil
            natus.
          </p>
          <AnimatedButton variant="light">Learn More</AnimatedButton>
        </div>
      </section>

      <section className="topography-svg-bg px-4 py-10 sm:px-6 lg:px-16 lg:py-14 mx-auto">
        <div className="w-full text-4xl text-center font-bold my-4">
          Corporate in Numbers
        </div>
        <div className="grid gap-6 grid-cols-1 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Accuracy rate
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
              99.95%
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              in fulfilling orders
            </p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Startup businesses
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
              2,000+
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              partner with Preline
            </p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Happy customer
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
              85%
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              this year alone
            </p>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-5 justify-between gap-12 p-12 lg:p-36">
        <div className="lg:col-span-2 order-1 lg:order-2 h-72 md:min-h-48 rounded-xl shadow overflow-hidden">
          <Image
            alt="Test"
            height={1000}
            priority={false}
            src="/ftproject-bg.webp"
            width={1000}
            // layout="fill"
            // objectFit="cover"
          />
        </div>
        <div className="lg:col-span-3 order-2 lg:order-1">
          <h2 className="text-5xl text-center lg:text-start font-bold mb-4">
            Equal Employment Opportunity
          </h2>
          <p className="md:text-justify mb-4">
            Corporate is committed to providing equal employment opportunities
            to all qualified individuals without regard to race, color,
            religion, sex, national origin, age, disability, sexual orientation,
            gender identity, or any other characteristic protected by applicable
            laws. This policy applies to all aspects of employment, including
            but not limited to recruitment, hiring, promotions, transfers,
            termination, and employee benefits.
          </p>
          <p className="md:text-justify mb-4">
            Read more to understand how Corporate adheres to state, national,
            and international standards to ensure it offers an equal employment
            opportunity to all candidates
          </p>
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
