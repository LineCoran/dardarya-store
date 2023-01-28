import './ContactLink.css';

interface IContactLink {
    link: string;
    name: string;
    imgSrc: string;
}

function ContactLink({link, name, imgSrc}: IContactLink) {
    return (
        <li className="contact-item">
            <img src={imgSrc} height="40px" width="40px" alt="" />
            <p className="contact-link">
                <a className="contact-link-text" href={link}>
                    {name}
                </a>
            </p>
        </li>
    )
}

export default ContactLink;