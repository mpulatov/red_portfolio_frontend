import { motion } from 'framer-motion'
import { FC } from 'react'

import { FADE_IN_CIRCLES } from '@/components/utils/animation/fade'

import styles from './Hero.module.scss'

const BackgroundCircles: FC = () => {
	return (
		<motion.div className={styles.backgroundCircles} {...FADE_IN_CIRCLES}>
			<div className='absolute rounded-full border border-[#333333]  h-[200px] w-[200px] mt-52 animate-ping' />
			<div className='absolute rounded-full border border-[#333333]  h-[300px] w-[300px] mt-52' />
			<div className='absolute rounded-full border border-[#333333]  h-[500px] w-[500px] mt-52' />
			<div className='absolute rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse' />
			<div className='absolute rounded-full border border-[#333333]  h-[800px] w-[800px] mt-52 animate-ping' />
		</motion.div>
	)
}

export default BackgroundCircles
