"use client";

import React, { useRef, useState } from "react";
import { allCocktails } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      ".cocktail img",
      {
        opacity: 9,
        xPercent: -100,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details h2",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details p",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);

  const totalCocktails = allCocktails.length;

  const getCoktailAt = (indexOffset) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCoktailAt(0);
  const prevCocktail = getCoktailAt(-1);
  const nextCocktail = getCoktailAt(1);

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              onClick={() => goToSlide(index)}
              className={
                isActive
                  ? "text-white border-white "
                  : "text-white/50 border-white/50 "
              }
              key={index}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content ">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt="cocktail"
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div className="info" ref={contentRef}>
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
