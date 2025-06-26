import React from "react";
import { openingHours } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("h2", {
      type: "words",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        yPercent: 100,
        opacity: 0,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  }, []);
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="left-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-right"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>Thecho, Lalitpur</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>+977 - 9843 982 781</p>
          <p>info@mojito.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((openingHour, index) => (
            <p key={index}>
              {openingHour.day} - {openingHour.time}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
