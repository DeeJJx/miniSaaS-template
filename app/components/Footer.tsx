import Image from 'next/image';
import Link from 'next/link';
import dl3StudioLogo from '../../public/dl3-studios.svg';

export default function Footer() {
 return (
    <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
            <Image src={dl3StudioLogo} alt="DL3 Studios Logo" width={200} height={200} />
            <p>
            DL3 Studios Ltd.      
            </p>
        </aside>
        <nav>
            <h6 className="footer-title">Services</h6>
            <Link href="/services/design" className="link link-hover">Design</Link>
            <Link href="/services/advertisement" className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <Link href="/company/about-us" className="link link-hover">About Us</Link>
            <Link href="/company/contact" className="link link-hover">Contact</Link>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <Link href="/legal/terms-conditions" className="link link-hover">Terms and Conditions</Link>
            <Link href="/legal/privacy" className="link link-hover">Privacy Policy</Link>
            <Link href="/legal/cookies" className="link link-hover">Cookie Policy</Link>
        </nav>
    </footer>
 )
}