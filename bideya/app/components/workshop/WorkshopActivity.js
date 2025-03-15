import { Montserrat } from 'next/font/google';
import Image from 'next/image'; // Import the Image component from Next.js

// Configure Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'], // Semi-bold
});

export default function WorkshopActivity() {
  return (
    <section className="p-8.5">
      {/* Blue Rectangle Container */}
      <div
  style={{
    width: '1300px', // Smaller width for the blue rectangle
    height: '240px', // Smaller height for the blue rectangle
    backgroundColor: '#AAC6FC', // Blue color
    position: 'relative', // Relative positioning for child elements
    left:'80px',
    top:'-10px',
    borderRadius: '20px', // Coins arrondis
    
  }}
>
       {/* Flex container for text and images */}
<div className="flex items-start justify-between relative">
  {/* Left Side: Text */}
  <div
    className="flex-1"
    style={{
      position: 'absolute', // Use absolute positioning
      left: '20px', // Move the text to the left
      top: '20px', // Move the text down from the top
    }}
  >
    {/* Section Title */}
    <h2 className={`text-[36px] font-semibold text-black ${montserrat.className}`}>
      Interactive activity area
    </h2>

    {/* Description */}
    <p className="text-[16px] text-[#7F7F7F] mt-5 max-w-xl">
      Workshops designed to provide you with hands-on experience in technology, art, science, and more.
    </p>
  </div>

  {/* Right Side: Images */}
  <div
    className="flex space-x-5"
    style={{
      position: 'absolute', // Use absolute positioning
      right: '20px', // Move the images to the right
      top: '20px', // Move the images down from the top
    }}
  >
    {/* Image 1 Container */}
    <div
      style={{
        border: '8px solid white', // White stroke
        borderRadius: '20px', // Border radius
        overflow: 'hidden', // Ensure the image respects the border radius
        position: 'relative', // Use relative positioning for further adjustments
        left: '0', // Adjust left position
        top: '0', // Adjust top position
      }}
    >
      <Image
        src="/Workshop1.png" // Use the imported image
        alt="Workshop 1"
        width={187.83}
        height={188.65}
        className="object-cover"
      />
    </div>

    {/* Image 2 Container */}
    <div
      style={{
        border: '8px solid white', // White stroke
        borderRadius: '20px', // Border radius
        overflow: 'hidden', // Ensure the image respects the border radius
        position: 'relative', // Use relative positioning for further adjustments
        left: '0', // Adjust left position
        top: '0', // Adjust top position
      }}
    >
      <Image
        src="/Workshop2.png" // Use the imported image
        alt="Workshop 2"
        width={187.83}
        height={188.65}
        className="object-cover"
      />
    </div>

    {/* Image 3 Container */}
    <div
      style={{
        border: '8px solid white', // White stroke
        borderRadius: '20px', // Border radius
        overflow: 'hidden', // Ensure the image respects the border radius
        position: 'relative', // Use relative positioning for further adjustments
        left: '0', // Adjust left position
        top: '0', // Adjust top position
      }}
    >
      <Image
        src="/Workshop3.png" // Use the imported image
        alt="Workshop 3"
        width={187.83}
        height={188.65}
        className="object-cover"
      />
    </div>
  </div>
</div>
        </div>
    
    </section>
  );
}