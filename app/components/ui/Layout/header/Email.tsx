import { motion } from 'framer-motion'
import { FC } from 'react'
import { SocialIcon } from 'react-social-icons'

import { FADE_IN_EMAIL } from '@/components/utils/animation/fade'

import styles from './Header.module.scss'

const Email: FC = () => {
	return (
		<motion.div className={styles.gmail} {...FADE_IN_EMAIL}>
			<SocialIcon
				className='cursor-pointer'
				network='email'
				fgColor='gray'
				bgColor='transparent'
			/>
			<p>Get In Touch</p>
		</motion.div>
	)
}

export default Email
