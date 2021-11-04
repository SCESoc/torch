import React, { ReactElement } from 'react'
import Link from 'next/link'
import NavBarItem from './NavBarItem'

interface Props {

}

export default function NavBar({ }: Props): ReactElement {
	return (
		<nav className='bg-green-300 flex justify-center'>
			<div className='flex flex-1 justify-between max-w-screen-lg'>
				<Link href='/'><a>Candle</a></Link>
				<ul className='space-x-5 flex'>
					<NavBarItem href='#'>Home</NavBarItem>
					<NavBarItem href='#'>About</NavBarItem>
					<NavBarItem href='#'>Contact</NavBarItem>
				</ul>
			</div>
		</nav>
	)
}