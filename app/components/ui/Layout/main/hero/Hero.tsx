import { FC } from 'react'

import styles from './Hero.module.scss'
import Typewriter from '@/ui/Layout/main/hero/Typewriter'

const Hero: FC = () => {
	return (
		<section id='hero' className={styles.hero}>
			<Typewriter />
		</section>
	)
}

export default Hero
