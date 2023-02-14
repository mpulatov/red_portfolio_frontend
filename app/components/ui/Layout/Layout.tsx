import { FC, PropsWithChildren } from 'react'

import Meta from '@/components/utils/meta/Meta'
import { IMeta } from '@/components/utils/meta/meta.interface'

import styles from './Layout.module.scss'
import Header from '@/ui/Layout/header/Header'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	return (
		<div>
			<Meta {...meta} />
			<div
				className='bg-primary text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
			 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
			>
				<Header />
				<main className={styles.main}>{children}</main>
			</div>
		</div>
	)
}

export default Layout
