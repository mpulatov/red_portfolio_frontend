import { motion } from 'framer-motion'
import { FC } from 'react'

type Props = {
	directionLeft?: boolean
}

const Skill: FC = ({ directionLeft }: Props) => {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img
				src='/sass.png'
				alt='typescript'
				initial={{ x: directionLeft ? -200 : 150, opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				className='rounded-full border border-gray-500 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
				filter group-hover:grayscale object-cover transition duration-300 ease-in-out'
			/>

			<div
				className='absolute opacity-0 group-hover:opacity-80 transition duration-300
			 group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'
			>
				<div className='flex items-center justify-center h-full'>
					<p className='text-3xl font-bold text-black opacity-100'>100%</p>
				</div>
			</div>
		</div>
	)
}

export default Skill