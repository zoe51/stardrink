
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk theme colors
				cyber: {
					purple: '#9b87f5',
					'dark-purple': '#1A1F2C',
					'vivid-purple': '#8B5CF6', 
					pink: '#D946EF',
					orange: '#F97316',
					blue: '#1EAEDB',
					black: '#221F26',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow': {
					'0%, 100%': { 
						textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #9b87f5, 0 0 40px #9b87f5' 
					},
					'50%': { 
						textShadow: '0 0 4px #fff, 0 0 10px #fff, 0 0 18px #D946EF, 0 0 38px #D946EF' 
					}
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-5px, 5px)' },
					'40%': { transform: 'translate(-5px, -5px)' },
					'60%': { transform: 'translate(5px, 5px)' },
					'80%': { transform: 'translate(5px, -5px)' },
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pour': {
					'0%': { height: '0%', opacity: '0' },
					'100%': { height: '100%', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'glitch': 'glitch 0.5s ease infinite',
				'spin-slow': 'spin-slow 6s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'pour': 'pour 2s forwards'
			},
			backgroundImage: {
				'cyber-gradient': 'linear-gradient(45deg, #1A1F2C 0%, #221F26 100%)',
				'neon-glow': 'linear-gradient(90deg, #9b87f5 0%, #D946EF 100%)',
				'drink-blue': 'linear-gradient(90deg, rgba(30, 174, 219, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)',
				'drink-pink': 'linear-gradient(90deg, rgba(217, 70, 239, 0.8) 0%, rgba(249, 115, 22, 0.8) 100%)',
				'drink-purple': 'linear-gradient(90deg, rgba(139, 92, 246, 0.8) 0%, rgba(217, 70, 239, 0.8) 100%)',
				'drink-orange': 'linear-gradient(90deg, rgba(249, 115, 22, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)',
				'drink-green': 'linear-gradient(90deg, rgba(16, 185, 129, 0.8) 0%, rgba(34, 197, 94, 0.8) 100%)',
				'drink-slate': 'linear-gradient(90deg, rgba(71, 85, 105, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
