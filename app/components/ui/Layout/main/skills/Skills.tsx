import { motion } from 'framer-motion'
import { FC } from 'react'

import { FADE_IN } from '@/components/utils/animation/fade'

import styles from './Skills.module.scss'
import Skill from '@/ui/Layout/main/skills/Skill'

const Skills: FC = () => {
	return (
		<section id='Skills' className={styles.skills}>
			<motion.div className={styles.container} {...FADE_IN}>
				<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
					Skills
				</h3>

				<h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
					Hover over a skill for currency proficiency
				</h3>

				<div className='grid grid-cols-3 gap-5'>
					<Skill />
					<Skill />
					<Skill />
					<Skill />
					<Skill />
					<Skill />
					<Skill />
					<Skill />
					<Skill />
					<Skill />
				</div>
			</motion.div>
		</section>
	)
}

export default Skills
