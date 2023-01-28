import './MyButton.css';

interface IMyButton {
    page: string;
    text: string;
    color: string;
    showPage: (value: string) => void
}

function MyButton({ page, text, color, showPage }: IMyButton) {
    return (
        <button onClick={() => showPage(page)} className={`mybutton mybutton-${color}`}>
            {text}
        </button>
    )
}

export default MyButton;
