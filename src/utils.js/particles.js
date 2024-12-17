export default {
  background: {
    color: {
      value: "#e8c1d8", // Dark background to simulate a rainy atmosphere
      
    },
  },
  
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#ffff", "#f90a99"], // Light grey color for the raindrops
    },
    links: {
      enable: false, // Disable the connecting lines between particles
    },
    collisions: {
      enable: false, // Disable collisions
    },
    move: {
      direction: "bottom", // Move particles downwards (like raindrops)
      enable: true,
      outModes: {
        default: "out", // Particles will disappear when they move out of the screen
      },
      random: false,
      speed: 5, // Speed of the raindrops
      straight: true, // Raindrops fall straight down
    },
    number: {
      density: {
        enable: true,
        area: 800, // Defines the area for particle density
      },
      value: 100, // Number of raindrops
    },
    opacity: {
      value: 2, // Semi-transparent raindrops
    },
    shape: {
      type: "circle", // Make the raindrops circular
    },
    size: {
      value: { min: 2, max: 5 }, // Size of the raindrops
    },
  },
  detectRetina: true, // Detect retina screens for optimal display
};
