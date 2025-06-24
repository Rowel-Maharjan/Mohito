import React from "react";
import { featureLists, goodLists } from "../../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ArtSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom top",
        pin: true,
        scrub: 1.5,
      },
    });

    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 4,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
      });
  }, []);
  return (
    <div className="container mx-auto h-full pt-20" id="art">
      <h2 className="will-fade">The ART</h2>

      <div className="content">
        <ul className="space-y-4 will-fade">
          {goodLists.map((goodList, index) => (
            <li key={index} className="flex items-center gap-2">
              <img src="/images/check.png" alt="check" />
              <p>{goodList}</p>
            </li>
          ))}
        </ul>
        <div className="cocktail-img">
          <img
            src="/images/under-img.jpg"
            className="abs-center masked-img size-full object-contain"
            alt="cocktail"
          />
        </div>
        <ul className="space-y-4 will-fade">
          {featureLists.map((featureList, index) => (
            <li key={index} className="flex items-center justify-start gap-2">
              <img src="/images/check.png" alt="check" />
              <p>{featureList}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="masked-container">
        <h2 className="will-fade">Sip-Worthy Perfection</h2>
        <div id="masked-content">
          <h3>Made with Craft, Poured with Passion</h3>
          <p>
            This isn't just a drink. It's a carefully crafted moment made just
            for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtSection;
