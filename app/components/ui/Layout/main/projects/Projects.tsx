import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { FADE_IN } from '@/components/utils/animation/fade'

import styles from './Projects.module.scss'

const Projects: FC = () => {
	const projects = ['1', '2', '3', '4', '5']
	return (
		<section id='projects' className={styles.project}>
			<motion.div
				className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
				{...FADE_IN}
			>
				<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
					Projects
				</h3>

				<div
					className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
				 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
				>
					{projects.map((project, i) => (
						<div
							key={i}
							className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
						>
							<Image src='/Avatar.jpg' alt='avatar' height={100} width={100} />

							<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
								<h4 className='text-4xl font-bold text-center'>
									<span className='underline decoration-[#F7AB0A]/50'>
										Case Study {i + 1} of {projects.length}:{' '}
									</span>
									UPS clone
								</h4>

								<p className='text-lg text-center md:text-left'>
									Давно выяснено, что при оценке дизайна и композиции читаемый
									текст мешает сосредоточиться. Lorem Ipsum используют потому,
									что тот обеспечивает более или менее стандартное заполнение
									шаблона, а также реальное распределение букв и пробелов в
									абзацах, которое не получается при простой дубликации.
								</p>
							</div>
						</div>
					))}
				</div>

				<div className='w-full absolute top-[30%] bg-[#D7AB0A]/10 left-0 h-[500px] -skew-y-12' />
			</motion.div>
		</section>
	)
}

export default Projects
