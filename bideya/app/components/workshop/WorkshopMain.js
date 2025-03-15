import { Montserrat } from 'next/font/google';

// Configure Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500'], // Medium weight
});

export default function WorkshopMain() {
  return (
    <section className="p-8 text-center">
      {/* Headline with Rectangle Inside */}
      <div className="relative inline-block">
        {/* Rectangle */}
        <div className="absolute -left-4 w-[460px] h-[90%] bg-[#F9BE01] rounded-[20px] -z-10"></div>

        {/* Headline Text */}
        <h1 className="text-[45px] font-semibold text-[#013069] relative z-10">
          Practical workshops
        </h1>
      </div>

       {/* Description */}
  <p className={`text-black/50 max-w-xl mx-auto mt-4 ${montserrat.className} font-medium text-center`}>
    Explore our interactive workshops to develop your key skills and build your confidence.
    <br /> {/* Line break */}
    Participate in hands-on activities tailored to your needs.
  </p>

      
    </section>
  );
}