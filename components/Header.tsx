import Image from 'next/image'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Link } from '@nextui-org/react'
import GithubButton from './GithubButton'
import Logo from './Logo'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-background px-32 py-8 text-foreground">
      <nav className="flex items-center justify-between">
        <Logo />
        {/* TODO add Login and sign up flow hare */}
        <ul className="flex items-center gap-4">
          <li className="rounded-md bg-purple/50 px-8 py-2 text-sm font-light hover:cursor-pointer hover:bg-purple/80">
            <Link href={'/dashboard'}>Dashboard</Link>
          </li>
          <li className="text-sm font-light hover:opacity-70">
            <Link href={'/dashboard'}>Signup</Link>
          </li>
          <li className="hover:opacity-80">
            <Link href={'https://github.com/0pen1Labs/RefLink'} isExternal>
              <GithubButton />
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  )
}