import { FC } from 'react'

import styles from './Header.module.scss'
import Email from '@/ui/Layout/header/Email'
import Logo from '@/ui/Layout/header/Logo'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Email />
		</header>
	)
}

export default Header
