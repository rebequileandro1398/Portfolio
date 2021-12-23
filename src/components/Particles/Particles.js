import React from 'react'
import Particles from "react-tsparticles";
export const ParticlesComponent = () => {
    const particlesInit = (main) => {
        console.log(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
      return (
      <div>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
            fpsLimit: 60,
            background: {
                color: "#021418"
            },
            fullScreen: {
                enable: true,
                zIndex: -1 
            },
            interactivity: {
                events: {
                onClick: { enable: true, mode: "push" },
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                          opacity: 0.1
                        }
                    }
                }
            },
            particles: {
                color: { value: "#ffffff" },
                move: {
                direction: "none",
                enable: true,
                outModes: "out",
                random: false,
                speed: 2,
                straight: false
                },
                number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 50
                },
                opacity: {
                animation: {
                    enable: true,
                    speed: 0.05,
                    sync: true,
                    startValue: "max",
                    count: 1,
                    destroy: "min"
                },
                value: {
                    min: 0,
                    max: 0.5
                }
                },
                shape: {
                type: "polygon"
                },
                size: {
                value: { min: 0.5, max: 3 }
                }
            }
            }}
        />
      </div>
      );
}
