import { Inter } from '@next/font/google'
import type { NextPage } from 'next'

import Layout from '@/ui/Layout/Layout'
import Hero from '@/ui/Layout/main/hero/Hero'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
	return (
		<Layout title='MP is Portfolio'>
			<Hero />
		</Layout>
	)
}

export default Home
