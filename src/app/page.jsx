"use client"
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import codigo1 from "./images/codigo1.webp";
import codigo2 from "./images/codigo2.webp";
import codigo3 from "./images/codigo3.webp";
import codigo4 from "./images/codigo4.webp";
import codigo5 from "./images/codigo5.webp";
import codigo6 from "./images/codigo6.webp";
import codigo7 from "./images/codigo7.webp";
import codigo8 from "./images/codigo8.webp";

export default function Page() {
  const [hoverStates, setHoverStates] = useState([false, false, false, false, false, false, false, false]);
  const controls = useAnimation();
  const textControls = useAnimation();



  const handleHover = async (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
    await controls.start({ scale: 1.8 });
    await textControls.start({ y: -250 });
  };

  const handleHoverExit = async (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
    await controls.start({ scale: 1 });
    await textControls.start({ y: 0 });
  };

  const textSize = 'sm';


  const roundedDivs = [
    { image: codigo1, text: "With over 200 digital projects and counting, we get what users want and need pretty easily. UX is the core to everything we build. In Codigo, we take user research, competitive analysis, wireframes, user flows, content maps very seriously.", text2:"User Experience" , backgroundColor: "yellow"},
    { image: codigo2, text: "We have pixel OCD. We keep ourselves constantly inspired with the hype and trends in the design industry to craft gorgeous interactions for your brand.", backgroundColor: '#E2C4D5' , text2: " Interface Design"},
    { image: codigo3, text: "Ready to take the first step? Let us help with a minimum viable product. Tap on our brains and experience to create a semi-product to test the waters. Consult us on user experience, how the product could look like and turn it into a rapid prototype." , backgroundColor: '#c4443f', text2:"Consultancy"},
    { image: codigo4, text: "Native, ReactNative, payment gateway integration, bespoke CMS, consuming APIs from existing sources and all things mobile app relevant. We have mostly done it all." , text2:"Mobile Development", backgroundColor:"#0D67F2"},
    { image: codigo5, text: "Web portals, microsites (yes, they still exist), web apps - responsive, powered by WordPress or supported by a bespoke CMS. No screen sizes scare us, only IE does.", text2:"Web Development" ,backgroundColor: "#CA6C35"},
    { image: codigo6, text: "All bespoke CMS we build comes with a dashboard so you can monitor the activities on your product. Edit or add content at your convenience - we will customise everything to your wants and needs.", text2:"CMS", backgroundColor:"#0A681E"},
    { image: codigo7, text: "Bluetooth, beacon, NFC, Augmented reality, IoT and more - we know and we have all these buzzwords in our office. We put Superman in AR before Pokemon Go did.", text2:"Emerging Tech" , backgroundColor:"#50273E"},
    { image: codigo8, text: "Attend our Masterclasses with the Codigo syllabus or talk to us to customise sessions just for your business teams. Learn more here", text2:"Coaching", backgroundColor:"#680A54" },
  ];

  return (
    <div>
      <div>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='font-extrabold md:text-[63px] text-[30px] md:w-[40%] w-full ml-[5%] mt-[7%]'
  >
    We build digital
    <div className='text-red-600'>for a living.</div>
  </motion.p>
        <div>
        <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='ml-[5%] md:w-[51.5%] mt-4'
    >
      Codigo comprises a team of brilliant minds and innovative individuals who create digital products people love to use.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className='ml-[5%] my-3 md:w-[51.5%]'
    >
      We believe that seamless, user-centric and meaningful experiences transcend mediums and touchpoints.
    </motion.p>
        </div>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 p-20 gap-y-32 mt-[9%] '>
        {roundedDivs.map((roundedDiv, index) => (
          <motion.div
            key={index}
            className={`rounded-full ml-[12%] border-yellow-400 w-[250px] h-[250px] mb-4 relative rounded-div`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHoverExit(index)}
            style={{ backgroundColor: roundedDiv.backgroundColor }}
            initial={{ scale: 1 }}
            animate={hoverStates[index] ? { scale: 1.3, y: 100 } : { scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 10 }}
          >
            {hoverStates[index] && (
              <motion.div
                className={`absolute inset-0 flex justify-center hover:text-${textSize} items-center text-center text-white font-bold text-${textSize}`}
                style={{ fontSize: "6px", marginTop: "30px", width: "100px", textAlign: "center", marginLeft: "70px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                {roundedDiv.text}
              </motion.div>
            )}
            <motion.div
              initial={{ scale: 1 }}
              animate={hoverStates[index] ? { scale: 0.5, y: 100 } : { scale: 1, y: 0 }}
              className="absolute inset-0"
            >
              <Image src={roundedDiv.image} alt='codigo' width={150} height={150} className='mx-auto mt-3' loading='lazy'></Image>
            </motion.div>
            <motion.div
              className='font-bold mt-[100%] text-center'
            >
              {roundedDiv.text2}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}