import { Inter } from '@next/font/google'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/ui/Layout/Layout'
import About from '@/ui/Layout/main/about/About'
import ContactMe from '@/ui/Layout/main/contacts/ContactMe'
import Experience from '@/ui/Layout/main/experience/Experience'
import Hero from '@/ui/Layout/main/hero/Hero'
import Projects from '@/ui/Layout/main/projects/Projects'
import Skills from '@/ui/Layout/main/skills/Skills'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
	return (
		<Layout title='MP is Portfolio'>
			<Hero />
			<About />
			<Experience />
			<Skills />
			<Projects />
			<ContactMe />
			<Link href='#hero'>
				<footer className='sticky bottom-5 w-full cursor-pointer'>
					<div className='flex items-center justify-center'>
						<Image
							src='/Photo.jpg'
							alt='avatar'
							width={50}
							height={50}
							className='rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover object-center'
						/>
					</div>
				</footer>
			</Link>
		</Layout>
	)
}

export default Home
