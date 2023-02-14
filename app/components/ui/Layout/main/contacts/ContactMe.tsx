import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './ContactMe.module.scss'

type Inputs = {
	name: string
	email: string
	subject: string
	message: string
}
const ContactMe: FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = data => {
		window.location.href = `mailto:mpulatov9595@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`
	}

	return (
		<section id='contact' className={styles.contact}>
			<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
				<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
					Contact
				</h3>

				<div className='flex flex-col space-y-10'>
					<h4 className='text-4xl font-semibold text-center'>
						I have got just what you need.{' '}
						<span className='decoration-[#F7AB0A]/50 underline'>
							Lets Talk.
						</span>
					</h4>

					<div className='space-y-10'>
						<div className='flex items-center space-x-5 justify-center'>
							<PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
							<p className='text-2xl'>+992800008016</p>
						</div>

						<div className='flex items-center space-x-5 justify-center'>
							<EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
							<p className='text-2xl'>mpulatov9595@gmail.com</p>
						</div>

						<div className='flex items-center space-x-5 justify-center'>
							<MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
							<p className='text-2xl'>123 Developer Lane</p>
						</div>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col space-y-2 w-fit mx-auto'
					>
						<div className='flex space-x-5'>
							<input
								{...register('name')}
								className={styles.input}
								placeholder='Name'
								type='text'
							/>
							<input
								{...register('email')}
								className={styles.input}
								placeholder='Email'
								type='email'
							/>
						</div>

						<input
							{...register('subject')}
							className={styles.input}
							placeholder='Subject'
							type='text'
						/>
						<textarea
							{...register('message')}
							className={styles.input}
							placeholder='Message'
						/>
						<button
							type='submit'
							className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactMe
