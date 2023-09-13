import React from 'react';
import Particles from 'react-tsparticles';
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import "./praticleBg.css";
import '../App.css';

// This is the PraticleBg component.
const PraticleBg = () => {
    // Declare two functions that will be used to initialize and load the particle system.
    const particlesInit = useCallback(async engine => {
        console.log(engine);
         // Load the particle system using the `loadSlim` function.  
         await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    // Returns the particle system UI.
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                //Configure the interactivity of the particle system.
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                        // Configure the modes for the onClick and onHover events.
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 300,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000",
                    },
                    links: {
                        color: "#000",
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 2,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1200,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default PraticleBg