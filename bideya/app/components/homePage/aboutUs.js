// components/WhyBideya.js
const WhyBideya = () => {
    return (
      <section className="flex justify-center items-center bg-white p-6">
        <div className="w-full max-w-5xl space-y-8">
  
          {/* Titre encadré */}
          <div className="text-center">
            <h2 className="inline-block bg-yellow-500 text-black text-2xl md:text-3xl font-bold px-6 py-2 rounded-lg">
              Why Bideya Boost ?
            </h2>
          </div>
  
          {/* Personalized Career Guidance */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="flex justify-center">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-cover bg-center rounded-lg shadow-lg"
                   style={{ backgroundImage: "url('/brand-guidelines-concept-illustration.png')" }}>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-black">
                Personalized Career Guidance
              </h3>
              <p className="text-gray-700 text-lg">
                Bideya Boost helps students discover their strengths through interactive tests and personalized recommendations, guiding them toward the best educational and career choices.
              </p>
            </div>
          </div>
  
          {/* Section des avantages */}
          <div className="space-y-10">
            {[
              {
                title: "Hands-on Learning and Skill Development",
                description:
                  "The platform offers practical workshops, simulations, and interactive sessions to develop technical and soft skills, boosting confidence for future careers.",
                image: "/web.webp",
                borderColor: "border-blue-500",
                reverse: false
              },
              {
                title: "Access to Exclusive Opportunities",
                description:
                  "Students can join internships, hackathons, and networking events, connecting with professionals to gain real-world experience and improve their job prospects.",
                image: "/4.webp",
                borderColor: "border-yellow-500",
                reverse: true
              },
              {
                title: "Innovative Learning Experience",
                description:
                  "With chatbots, and gamification, Bideya Boost makes learning interactive and fun, keeping students engaged with leaderboards, rewards, and smart notifications.",
                image: "/3.webp",
                borderColor: "border-gray-400",
                reverse: false
              }
            ].map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${item.reverse ? "md:flex-row-reverse" : ""} items-center gap-6`}>
                
                {/* Texte */}
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {item.description}
                  </p>
                </div>
  
                {/* Image avec bordure */}
                <div className={`relative flex justify-center flex-1`}>
                  <div className={`absolute left-0 top-0 h-full w-1 ${item.borderColor}`} />
                  <div className="w-36 h-36 bg-cover bg-center rounded-lg shadow-lg"
                    style={{ backgroundImage: `url('${item.image}')` }}>
                  </div>
                </div>
  
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default WhyBideya;
  