import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { FADE_IN_EXPERIENCE_CARD } from '@/components/utils/animation/fade'

import styles from './Experience.module.scss'

const ExperienceCard: FC = () => {
	return (
		<article className={styles.experience_card}>
			<motion.img
				src='/Avatar.jpg'
				alt='avatar'
				className={styles.image}
				{...FADE_IN_EXPERIENCE_CARD}
			/>

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>CEO of OAO</h4>
				<p className='font-bold text-2xl mt-1'>OAO</p>
				<div className='flex space-x-2 my-2'>
					<Image
						src='/typescript.png'
						alt='nest'
						width={20}
						height={20}
						className='rounded-full'
					/>
					<Image
						src='/nest.png'
						alt='nest'
						width={20}
						height={20}
						className='rounded-full'
					/>
					<Image
						src='/sass.png'
						alt='nest'
						width={20}
						height={20}
						className='rounded-full'
					/>
				</div>
				<p className='uppercase py-5 text-gray-300'>
					Started work... - Ended...
				</p>
				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>Summary points Summary points Summary points</li>
					<li>Summary points Summary points Summary points</li>
					<li>Summary points Summary points Summary points</li>
					<li>Summary points Summary points Summary points</li>
					<li>Summary points Summary points Summary points</li>
				</ul>
			</div>
		</article>
	)
}

export default ExperienceCard
