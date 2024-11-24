'use client';

import OrbitingCircles from './ui/orbiting-circles';

export function OrbitingCirclesBodies() {
  return (
 <div className='py-10'>
    <h2 className="text-3xl lg:text-5xl  text-center mb-2 font-sans">
          We <span className="text-primary font-bold">Work</span> with
        </h2>
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles
        className="h-24 w-24 border-none bg-transparent"
        duration={33.3}
        delay={20}
        radius={80}
      >
        <Icons.c1 />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-24 w-24 border-none bg-transparent"
        duration={33.3}
        delay={10}
        radius={80}
      >
        <Icons.c2 />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-24 w-24 border-none bg-transparent"
        duration={33.3}
        delay={0}
        radius={80}
      >
        <Icons.c3 />
      </OrbitingCircles>

      {/* Outer Orbit with 3 Icons */}
      <OrbitingCircles
        className="h-20 w-20 border-none bg-transparent"
        radius={180}
        delay={30}
        duration={33.3}
        reverse
      >
        <Icons.c4 />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-20 w-20 border-none bg-transparent"
        radius={180}
        duration={33.3}
        delay={20}
        reverse
      >
        <Icons.c5 />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-20 w-20 border-none bg-transparent"
        radius={180}
        duration={33.3}
        delay={10}
        reverse
      >
        <Icons.c6 />
      </OrbitingCircles>
    </div>
    </div>
  );
}

const Icons = {
  c1: () => (
    <div className="h-full w-full flex items-center justify-center bg-white p-3 rounded-full shadow-md">
      <img src="/images/c1.png" alt="c1" className="h-full w-full object-contain" />
    </div>
  ),
  c2: () => (
    <div className="h-full w-full flex items-center justify-center bg-white p-3 rounded-full shadow-md">
      <img src="/images/c2.png" alt="c2" className="h-full w-full object-contain" />
    </div>
  ),
  c3: () => (
    <div className="h-full w-full flex items-center justify-center bg-white p-3 rounded-full shadow-md">
      <img src="/images/c3.png" alt="c3" className="h-full w-full object-contain" />
    </div>
  ),
  c4: () => (
    <div className="h-full w-full flex items-center justify-center bg-white p-3 rounded-full shadow-md">
      <img src="/images/c4.png" alt="c4" className="h-full w-full object-contain" />
    </div>
  ),
  c5: () => (
    <div className="h-full w-full flex items-center justify-center bg-white p-3 rounded-full shadow-md">
      <img src="/images/c5.png" alt="c5" className="h-full w-full object-contain" />
    </div>
  ),
  c6: () => (
    <div className="h-full w-full flex items-center justify-center bg-white p-3 rounded-full shadow-md">
      <img src="/images/c6.png" alt="c6" className="h-full w-full object-contain" />
    </div>
  ),
};
