import React, { ReactElement } from 'react'

interface Props {
	children: ReactElement
}

export default function Body({ children }: Props): ReactElement {
	return (
		<main className='bg-gray-100 w-full md:flex flex-grow md:self-center max-w-full md:max-w-4xl'>
			{children}
		</main>
	)
}
