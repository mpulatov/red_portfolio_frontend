import { motion } from 'framer-motion'
import { FC } from 'react'
import { SocialIcon } from 'react-social-icons'

import { FADE_IN_LOGO } from '@/components/utils/animation/fade'

import styles from './Header.module.scss'

const Logo: FC = () => {
	return (
		<motion.div className={styles.logo} {...FADE_IN_LOGO}>
			<SocialIcon
				url='https://telegram.com'
				fgColor='gray'
				bgColor='transparent'
			/>
			<SocialIcon
				url='https://github.com'
				fgColor='gray'
				bgColor='transparent'
			/>
			<SocialIcon
				url='https://instagram.com'
				fgColor='gray'
				bgColor='transparent'
			/>
		</motion.div>
	)
}

export default Logo
