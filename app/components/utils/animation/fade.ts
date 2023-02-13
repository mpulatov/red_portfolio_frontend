import { MotionProps } from 'framer-motion'

export const FADE_IN_LOGO: MotionProps = {
	initial: { x: -500, opacity: 0, scale: 0.5 },
	animate: { x: 0, opacity: 1, scale: 1 },
	transition: { duration: 1.5 }
}

export const FADE_IN_EMAIL: MotionProps = {
	initial: { x: 500, opacity: 0, scale: 0.5 },
	animate: { x: 0, opacity: 1, scale: 1 },
	transition: { duration: 1.5 }
}

export const FADE_IN_CIRCLES: MotionProps = {
	initial: { opacity: 0 },
	animate: {
		scale: [1, 2, 2, 3, 1],
		opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
		borderRadius: ['20%', '20%', '50%', '80%', '20%']
	},
	transition: { duration: 2.5 }
}

export const FADE_IN: MotionProps = {
	initial: { opacity: 0 },
	transition: { duration: 1.2 },
	whileInView: { opacity: 1 }
}
export const FADE_IN_PROFILE: MotionProps = {
	initial: { x: -200, opacity: 0 },
	transition: { duration: 1.2 },
	whileInView: { x: 0, opacity: 1 },
	viewport: { once: true }
}

export const FADE_IN_EXPERIENCE_CARD: MotionProps = {
	initial: { y: -100, opacity: 0 },
	transition: { duration: 1.2 },
	whileInView: { y: 0, opacity: 1 },
	viewport: { once: true }
}
