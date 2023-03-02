import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    return (
        <header>
            <div>
                <div className="topNav">
                    <Image src={'/images/logo.jpg'} width={70} height={50} alt="logo" />
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/events">Events</Link>
                            </li>
                            <li>
                                <Link href="/about-us">About us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p className="title">Sed ut perspiciatis unde omnis</p>
            </div>
        </header>
    );
}
