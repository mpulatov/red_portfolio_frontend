import { motion } from 'framer-motion'
import { FC } from 'react'

import { FADE_IN, FADE_IN_PROFILE } from '@/components/utils/animation/fade'

import styles from './About.module.scss'

const About: FC = () => {
	return (
		<section id='about' className={styles.about}>
			<motion.div
				className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center'
				{...FADE_IN}
			>
				<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
					About
				</h3>

				<motion.img
					src='/Photo.jpg'
					alt='Picture'
					className={styles.image}
					{...FADE_IN_PROFILE}
				/>

				<div className='space-y-10 px-0 md:px-10'>
					<h4 className='text-4xl font-semibold'>
						Here is a{' '}
						<span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
						background
					</h4>
					<p className='text-base'>
						Давно выяснено, что при оценке дизайна и композиции читаемый текст
						мешает сосредоточиться. Lorem Ipsum используют потому, что тот
						обеспечивает более или менее стандартное заполнение шаблона, а также
						реальное распределение букв и пробелов в абзацах, которое не
						получается при простой дубликации.
					</p>
				</div>
			</motion.div>
		</section>
	)
}

export default About
