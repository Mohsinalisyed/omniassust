import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
      "4xl": "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "80px",
      },
      screens: {
        md: "100%",
        lg: "1440px",
      },
    },

    extend: {
      fontFamily: {
        fontGilroy: ["var(--font-gilroy)", "sans-serif"],
      },
      height: {
        inherit: "inherit",
      },
      colors: {
        primary_one: "#3FB7F3",
        primary_two: "#3CE8B6",
        white: "#FFFFFF",
        dark: "#010101",
        gray_one: "#1A1A1A",
        gray_two: "#FFFFFFA3",
        gray_three: "#252323",
        gray_four: "#555555",
        gray_five: "#ffffff1f",
        card_background: "#ffffff06",
        orange: "#FB491E",
        orange_hover:"#C82A04",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "testimonial-gradient":
          "linear-gradient(90deg, #8266F2 0%, #8266F2 58.09%, rgba(255, 255, 255, 0.8) 73.5%, #8266F2 88.51%, #9488C3 100%)",
        text_gradient_one:
          "linear-gradient(93.21deg, #FB491E 0%, #FBCA1E 100%)",
        borderGradient: `linear-gradient(
            142.08deg, 
            rgba(255, 255, 255, 0.7) -5.03%, 
            rgba(188, 188, 188, 0.85) 21.3%, 
            rgba(13, 16, 35, 0.2) 49.04%, 
            rgba(187, 187, 187, 0.5) 70.19%)`,
      },
      fontSize: {
        "14": [
          "0.875rem",
          {
            lineHeight: "0.875rem",
          },
        ],
        "16": [
          "1rem",
          {
            lineHeight: "1rem",
          },
        ],
        "20": [
          "1.25rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        "24": [
          "1.5rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        "28": [
          "1.75rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        "32": [
          "2rem",
          {
            lineHeight: "2rem",
          },
        ],
        "40": [
          "2.5rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        "48": [
          "3rem",
          {
            lineHeight: "3.6rem",
          },
        ],
        "56": [
          "3.5rem",
          {
            lineHeight: "4.2rem",
          },
        ],
        "64": [
          "4rem",
          {
            lineHeight: "4.8rem",
          },
        ],
        "16_2": [
          "1rem",
          {
            lineHeight: "1.3rem",
          },
        ],
      },
      boxShadow: {
        "button-shadow": "inset 0px 0px 8px 0px rgba(255, 255, 255, 0.25)",
        "progressbar-shadow":
          "0px 0px 12px 0px #8266F2CC,0px 0px 16px 2px #8266F2CC",
        "progressbar-inner-shadow": "0 0 16px 2px rgba(130,102,242,0.8)",
        "social-icon-shadow":
          "0px 4px 24px 0px #FFFFFF3D inset, 0px 8px 12px 0px #FFFFFFB8 inset",
      },
      keyframes: {
        slideFromTop: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        slideToTop: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-110%)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        pulse: {
          "0%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 0px 0px #8266F266, 0px 0px 0px 0px #8266F27A, 0px 0px 0px 0px #8266F27A",
          },
          "20%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 40px 0px #8266F266, 0px 0px 20px 0px #8266F27A, 0px 0px 80px 0px #8266F27A",
          },
          "40%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 20px 0px #8266F266, 0px 0px 70px 0px #8266F27A, 0px 0px 100px 0px #8266F27A",
          },
          "60%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 70px 0px #8266F266, 0px 0px 80px 0px #8266F27A, 0px 0px 200px 0px #8266F27A",
          },
          "80%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 40px 0px #8266F266, 0px 0px 100px 0px #8266F27A, 0px 0px 150px 0px #8266F27A",
          },
          "100%": {
            boxShadow:
              "0px 4px 32px 0px #8266F2 inset, 0px 0px 0px 0px #8266F266, 0px 0px 40px 0px #8266F27A, 0px 0px 0px 0px #8266F27A",
          },
        },
        moveDiagonal: {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(150px, -150px)",
          },
        },
        moveVertical: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(150px)",
          },
        },
        spinReverse: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "spin-reverse-slow": "spinReverse 30s linear infinite",
        "slide-from-top": "slideFromTop 1.5s ease-out",
        "slide-to-top": "slideToTop 1.5s ease-out",
        "fade-in": "fadeIn 1.5s ease-in-out",
        "fade-out": "fadeOut 1.5s ease-in-out",
        pulse: "pulse 4s infinite",
        "move-diagonal": "moveDiagonal 2s ease-in-out infinite",
        "move-vertical": "moveVertical 2s ease-in-out infinite",
      },
      rotate: {
        "180": "180deg",
        "270": "270deg",
        "-180": "-180deg",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
} satisfies Config;
