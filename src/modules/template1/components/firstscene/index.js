import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const FirstScene = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });

      tl.set("#bus", { autoAlpha: 0 })
        .set("#text", { scaleY: 0, overflow: "hidden" })
        .to("#arrow-2", { width: 60, duration: 0.2 }, "initial")
        .set(
          "#arrow-2",
          {
            innerHTML: `<svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" />
              </svg>`,
          },
          "initial+=0.1"
        )
        .to("#arrow-3", { width: 60, duration: 0.2 }, "initial")
        .set(
          "#arrow-3",
          {
            innerHTML: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>`,
          },
          "initial+=0.1"
        )
        .to(
          ["#arrow-1", "#arrow-2", "#arrow-3", "#arrow-4"],
          { rotate: 90, duration: 0.2 },
          "initial+=0.2"
        )
        .to(["#arrow-1", "#arrow-2"], { y: 38, duration: 0.2 }, "initial+=0.2")
        .to(["#arrow-3", "#arrow-4"], { y: -38, duration: 0.2 }, "initial+=0.2")
        .to(
          ["#arrow-1", "#arrow-2", "#arrow-3", "#arrow-4"],
          { rotate: 180, duration: 0.1 },
          "initial+=0.4"
        )
        .to(
          ["#arrow-1", "#arrow-2"],
          { x: -172, duration: 0.3 },
          "initial+=0.5"
        )
        .to(["#arrow-3", "#arrow-4"], { x: 172, duration: 0.3 }, "initial+=0.5")
        .to("#bus", { autoAlpha: 1, duration: 0.2 }, "initial+=0.75")
        .to("#text", { scaleY: 1, duration: 0.2 }, "initial+=0.95");
    },
    { scope: container }
  );

  return (
    <section
      className="font-poppins absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-4"
      ref={container}
    >
      <div className="flex w-4/5 items-center">
        <div className="flex flex-[70%] justify-end gap-2">
          <div
            className="rounded-full border-2 border-[#FE4C1A] p-4 text-[#FE4C1A]"
            id="arrow-1"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" />
            </svg>
          </div>
          <div
            className="w-fit rounded-full border-2 border-[#FE4C1A] bg-[#FE4C1A] p-4 text-white"
            id="arrow-2"
          >
            Dentals
          </div>
        </div>
        <div className="flex-[30%]" />
      </div>
      <div className="flex w-4/5 items-center">
        <div className="flex-[30%]" />
        <div className="flex flex-[70%] justify-start gap-2">
          <div
            className="w-fit rounded-full border-2 border-[#FE4C1A] bg-[#FE4C1A] p-4 text-white"
            id="arrow-3"
          >
            Assistance
          </div>
          <div
            className="rounded-full border-2 border-[#FE4C1A] p-4 text-[#FE4C1A]"
            id="arrow-4"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-[100] size-[200px] -translate-x-1/2 -translate-y-1/2 bg-white" />
      <div className="absolute left-1/2 top-1/2 z-[1000] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <div
          className="size-fit rounded-full bg-[#FE4C1A] p-4 text-white"
          id="bus"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.259,11.948C21.683,11.832,22,11.46,22,11V8c0-0.551-0.445-0.997-0.996-0.999V6H21c0-2.206-1.794-4-4-4H7 C4.794,2,3,3.794,3,6v1C2.447,7,2,7.448,2,8v3c0,0.461,0.317,0.832,0.742,0.948c-0.474,0.67-0.742,1.46-0.741,2.298l0.004,3.757 C2.006,18.736,2.409,19.372,3,19.719V21c0,0.552,0.447,1,1,1h1c0.553,0,1-0.448,1-1v-1h12v1c0,0.552,0.447,1,1,1h1 c0.553,0,1-0.448,1-1v-1.274c0.15-0.087,0.295-0.187,0.421-0.313c0.377-0.378,0.585-0.881,0.584-1.415l-0.004-3.759 C22,13.403,21.73,12.615,21.259,11.948z M5,18H4.005l-0.004-3.757C4,13.784,4.162,13.353,4.444,13h6.56h2h6.551 c0.283,0.353,0.445,0.783,0.446,1.242L20.006,18H20h-1H5z M11.004,8v3H5V8H11.004z M19,11h-5.996V8H19V11z M7,4h10 c1.103,0,2,0.897,2,2h-4V5H9v1H5C5,4.897,5.897,4,7,4z" />
            <circle cx="6.5" cy="15.5" r="1.5" />
            <circle cx="17.5" cy="15.5" r="1.5" />
          </svg>
        </div>
        <div className="text-2xl font-bold text-[#FE4C1A]" id="text">
          DENTYTECH
        </div>
      </div>
    </section>
  );
};

export default FirstScene;
