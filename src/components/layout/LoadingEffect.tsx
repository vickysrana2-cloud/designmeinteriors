"use client";

import { useEffect, useState } from "react";

export function LoadingEffect() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep the loader visible for the initial animation.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Logo */}
        <div className="logo-wrapper">
          <img
            src="/designMeLogo.svg"
            alt="DesignMe Interiors"
            className="loading-logo"
          />
        </div>

        {/* Loading line */}
        <div className="loading-progress">
          <div className="loading-progress-bar" />
        </div>

        <p className="loading-text">Creating your space...</p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 99999;
          width: 100%;
          height: 100vh;
          background: #F5F2EC;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          animation: screenFadeOut 0.6s ease 1.8s forwards;
        }

        .loading-content {
          width: min(80%, 420px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          animation: logoReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .loading-logo {
          width: min(360px, 80vw);
          height: auto;
          display: block;
          opacity: 0;
          transform: scale(0.85);
          animation: logoAppear 1s ease 0.15s forwards;
        }

        .loading-progress {
          width: min(260px, 65vw);
          height: 2px;
          margin-top: 34px;
          background: #E8E1D7;
          overflow: hidden;
          position: relative;
        }

        .loading-progress-bar {
          position: absolute;
          left: 0;
          top: 0;
          width: 0%;
          height: 100%;
          background: #242321;
          animation: progress 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        .loading-text {
          margin-top: 16px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #706B63;
          opacity: 0;
          animation: textAppear 0.6s ease 0.7s forwards;
        }

        @keyframes logoAppear {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          60% {
            opacity: 1;
            transform: scale(1.03);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes logoReveal {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes textAppear {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes screenFadeOut {
          from {
            opacity: 1;
            visibility: visible;
          }
          to {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loading-logo,
          .logo-wrapper,
          .loading-progress-bar,
          .loading-text,
          .loading-screen {
            animation: none;
          }
          .loading-logo {
            opacity: 1;
            transform: none;
          }
          .loading-text {
            opacity: 1;
          }
          .loading-progress-bar {
            width: 100%;
          }
        }
      ` }} />
    </div>
  );
}

export default LoadingEffect;
