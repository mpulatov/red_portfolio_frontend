import { Inter } from '@next/font/google'
import type { NextPage } from 'next'

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
		</Layout>
	)
}

export default Home
