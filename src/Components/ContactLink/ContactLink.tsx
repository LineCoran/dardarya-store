import { ReactNode } from 'react';
import './ContactLink.css';

interface IContactLink {
    link: string;
    name: string;
    children: ReactNode;
}

function ContactLink({link, name, children}: IContactLink) {
    return (
        <li className="contact-item">
            {children}
            <p className="contact-link">
                <a className="contact-link-text" href={link}>
                    {name}
                </a>
            </p>
        </li>
    )
}

export default ContactLink;