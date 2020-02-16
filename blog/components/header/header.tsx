import { NextComponentType } from 'next'
import Link from 'next/link'

const Header: NextComponentType = () => {
    return (
        <div>
            <div>header</div>
            <Link href="/">
                <a>home</a>
            </Link>
            <Link href="/archives">
                <a>archives</a>
            </Link>
        </div>
    )
}

export default Header