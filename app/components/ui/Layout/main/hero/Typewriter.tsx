import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import styles from './Hero.module.scss'
import BackgroundCircles from '@/ui/Layout/main/hero/BackgroundCircles'

const Typewriter: FC = () => {
	const [text, count] = useTypewriter({
		words: [
			'Привет, меня зовут Мухаммад Пулатов',
			'Парень, который любит next.tsx и nest.tsx',
			'<НоЛюбитКодироватьБольше />'
		],
		loop: true,
		delaySpeed: 2000
	})
	return (
		<div className={styles.typewriter}>
			<BackgroundCircles />
			<Image
				src='/favicon.ico'
				alt='Avatar'
				width={50}
				height={50}
				className={styles.image}
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
					Software Engineer
				</h2>
				<h1 className='text-4xl lg:text-5xl font-semibold px-10'>
					<span className='mr-3'>{text}</span>
					<Cursor cursorColor='#F7AB0A' />
				</h1>

				<div className='pt-5'>
					<Link href='#about'>
						<button className={styles.hero__button}>About</button>
					</Link>
					<Link href='#experience'>
						<button className={styles.hero__button}>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className={styles.hero__button}>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className={styles.hero__button}>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Typewriter
