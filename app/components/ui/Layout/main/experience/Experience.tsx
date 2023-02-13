import { motion } from 'framer-motion'
import { FC } from 'react'

import { FADE_IN } from '@/components/utils/animation/fade'

import styles from './Experience.module.scss'
import ExperienceCard from '@/ui/Layout/main/experience/ExperienceCard'

const Experience: FC = () => {
	return (
		<section id='experience' className={styles.experience}>
			<motion.div className={styles.container} {...FADE_IN}>
				<h3 className={styles.title}>Experience</h3>

				<div className={styles.card}>
					<ExperienceCard />
					<ExperienceCard />
					<ExperienceCard />
					<ExperienceCard />
				</div>
			</motion.div>
		</section>
	)
}

export default Experience
