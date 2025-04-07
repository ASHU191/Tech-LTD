"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Img1 from "../public/images/Angular.png"
import Img2 from "../public/images/React.png"
import Img3 from "../public/images/Flutter.png"
import Img4 from "../public/images/C++.png"
import Img5 from "../public/images/Web.png"

export default function TechSection() {
  const orbitRef1 = useRef<HTMLDivElement>(null)
  const orbitRef2 = useRef<HTMLDivElement>(null)
  const orbitRef3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animation for the orbits
    const orbit1 = orbitRef1.current
    const orbit2 = orbitRef2.current
    const orbit3 = orbitRef3.current

    if (orbit1 && orbit2 && orbit3) {
      let rotation1 = 0
      let rotation2 = 180 // Start at different position
      let rotation3 = 90 // Start at different position

      const animate = () => {
        rotation1 += 0.3 // Outer orbit - faster
        rotation2 += 0.5 // Middle orbit - even faster
        rotation3 += 0.8 // Inner orbit - fastest

        orbit1.style.transform = `translate(-50%, -50%) rotate(${rotation1}deg)`
        orbit2.style.transform = `translate(-50%, -50%) rotate(${rotation2}deg)`
        orbit3.style.transform = `translate(-50%, -50%) rotate(${rotation3}deg)`

        requestAnimationFrame(animate)
      }

      animate()
    }
  }, [])

  return (
    <div id="services" className="relative bg-black text-white py-12 md:py-20 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              We Use Top Notch
              <br />
              100% Technologies
            </h2>
            <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto lg:mx-0">
              We leverage cutting-edge, 100% reliable technologies to deliver robust, high-performance solutions. Our
              focus on innovation ensures you get the best tools and systems tailored to your needs, driving success and
              efficiency.
            </p>
          </div>

          {/* Right side - Technology orbit */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] mx-auto w-full max-w-[350px] md:max-w-full">
            {/* Center company name */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-rose-400">Saylani</h3>
              <p className="text-base md:text-lg lg:text-xl">Tech limited</p>
            </div>

            {/* Orbit circles - Static borders - RESPONSIVE SIZES */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border border-gray-700 border-dashed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] rounded-full border border-gray-700 border-dashed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] rounded-full border border-gray-700 border-dashed"></div>

            {/* Rotating orbits with tech icons - RESPONSIVE SIZES */}
            {/* Outer orbit */}
            <div
              ref={orbitRef1}
              className="absolute top-1/2 left-1/2 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full"
              style={{ transform: "translate(-50%, -50%) rotate(0deg)" }}
            >
              {/* React - Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
                <Image
                  src={Img2 || "/placeholder.svg"}
                  alt="React"
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </div>

              {/* Angular - Right */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
                <Image
                  src={Img1 || "/placeholder.svg"}
                  alt="Angular"
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </div>

              {/* Red dot - Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
            </div>

            {/* Middle orbit */}
            <div
              ref={orbitRef2}
              className="absolute top-1/2 left-1/2 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] rounded-full"
              style={{ transform: "translate(-50%, -50%) rotate(180deg)" }}
            >
              {/* C++ - Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-blue-500 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
                <Image
                  src={Img4 || "/placeholder.svg"}
                  alt="C++"
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </div>

              {/* Web/JS - Left */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-blue-500 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
                <Image
                  src={Img5 || "/placeholder.svg"}
                  alt="Web"
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </div>

              {/* Red dot - Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>

              {/* Red dot - Right */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
            </div>

            {/* Inner orbit */}
            <div
              ref={orbitRef3}
              className="absolute top-1/2 left-1/2 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] rounded-full"
              style={{ transform: "translate(-50%, -50%) rotate(90deg)" }}
            >
              {/* Flutter - Left */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-blue-600 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
                <Image
                  src={Img3 || "/placeholder.svg"}
                  alt="Flutter"
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </div>

              {/* Red dot - Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>

              {/* Red dot - Right */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#000"
            d="M0,224L120,213.3C240,203,480,181,720,181.3C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

