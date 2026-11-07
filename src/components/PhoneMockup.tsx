import React, { useRef, useEffect } from 'react';

export type FeatureKey = 'attendance' | 'exams' | 'fees' | 'payroll';

export interface PhoneMockupProps {
  className?: string;
  activeFeature?: FeatureKey;
  mode?: 'fixed' | 'inline';
}

interface DemoItem {
  id: FeatureKey;
  webm: string;
  webp: string;
  gif: string;
  alt: string;
}

const DEMOS: DemoItem[] = [
  {
    id: 'attendance',
    webm: '/assets/attendance-screen.webm',
    webp: '/assets/attendance-screen.webp',
    gif: '/assets/attendance-screen.gif',
    alt: 'Attendance Feature Demo',
  },
  {
    id: 'exams',
    webm: '/assets/exams-screen.webm',
    webp: '/assets/exams-screen.webp',
    gif: '/assets/exams-screen.gif',
    alt: 'Exams Feature Demo',
  },
  {
    id: 'fees',
    webm: '/assets/fees-screen.webm',
    webp: '/assets/fees-screen.webp',
    gif: '/assets/fees-screen.gif',
    alt: 'Fees Feature Demo',
  },
  {
    id: 'payroll',
    webm: '/assets/payroll-screen.webm',
    webp: '/assets/payroll-screen.webp',
    gif: '/assets/payroll-screen.gif',
    alt: 'Teachers Payroll Feature Demo',
  },
];

const VideoDemo: React.FC<{
  demo: DemoItem;
  isActive: boolean;
}> = ({ demo, isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-full object-fill select-none pointer-events-none"
      aria-label={demo.alt}
    >
      <source src={demo.webm} type="video/webm" />
      <source src={demo.webp} type="image/webp" />
      <img
        src={demo.gif}
        alt={demo.alt}
        className="w-full h-full object-fill select-none pointer-events-none"
      />
    </video>
  );
};

/**
 * iPhone Pro Phone Mockup with Dynamic Feature Demos
 *
 * Optimized for mobile & desktop:
 * - Pixel-perfect screen alignment with CSS mask clipping (no overflow/leak below frame)
 * - Ground shadow kept outside frame aspect ratio to eliminate letterbox shift
 * - High-speed hardware-accelerated WebM video with WebP/GIF fallback
 * - Seamless opacity cross-fade
 * - Standalone inline mode for mobile sections (renders only 1 demo per section)
 */
export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  className = '',
  activeFeature = 'attendance',
  mode = 'inline',
}) => {
  // On mobile inline sections, only render the specific feature to optimize performance & memory
  const visibleDemos = mode === 'inline' 
    ? DEMOS.filter((d) => d.id === activeFeature) 
    : DEMOS;

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Device Frame Wrapper: Fixed strict 389/800 aspect ratio */}
      <div
        className="relative w-[260px] xs:w-[285px] sm:w-[310px] md:w-[330px] lg:h-[min(580px,68vh)] lg:w-auto max-w-[88vw] aspect-[389/800] shrink-0"
      >
        {/* ======================================================
            LAYER 1: SCREEN DEMO DISPLAY
            - Screen Mask (389x800) clips the inner boundary so 0 corner pixels ever leak outside the phone frame.
            - Inside it, the Screen Demo is positioned precisely at the screen cutout (left: 4.63%, top: 1.75%, width: 91%, height: 96.5%)
              so the entire mobile app UI fits edge-to-edge with no cropping!
           ====================================================== */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden z-10"
          style={{
            WebkitMaskImage: "url('/assets/screen-mask.png')",
            maskImage: "url('/assets/screen-mask.png')",
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
          aria-label={`Current demo: ${activeFeature}`}
        >
          {/* Inner Screen Area - precisely positioned at 354x772 cutout, masked seamlessly by screen-mask without artificial border-radius clipping */}
          <div
            className="absolute overflow-hidden flex items-center justify-center bg-black"
            style={{
              top: '1.75%',
              bottom: '1.75%',
              left: '4.63%',
              right: '4.37%',
            }}
          >
            {visibleDemos.map((demo) => {
              const isActive = activeFeature === demo.id;
              return (
                <div
                  key={demo.id}
                  className="absolute inset-0 w-full h-full will-change-[opacity]"
                  style={{
                    transition: 'opacity 350ms ease-in-out',
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? 'auto' : 'none',
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  <VideoDemo demo={demo} isActive={isActive} />
                </div>
              );
            })}

            {/* Subtle Screen Ambient Glass Glare */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent z-25"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ======================================================
            LAYER 2: IPHONE PRO FRAME (Titanium Rim + Dynamic Island)
           ====================================================== */}
        <img
          src="/assets/iphone-frame.webp"
          alt="iPhone Pro Frame"
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-30 drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          loading="eager"
        />
      </div>

      {/* Soft Physical Ambient Ground Shadow (Positioned outside frame box) */}
      <div
        className="w-[72%] h-5 sm:h-7 bg-black/35 blur-xl rounded-full -mt-2 sm:-mt-3 pointer-events-none z-0"
        aria-hidden="true"
      />
    </div>
  );
};
