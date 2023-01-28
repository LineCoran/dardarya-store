import './MyButton.css';

interface IMyButton {
    text: string;
    color: string;
}

function MyButton({ text, color }: IMyButton) {
    return (
        <button className={`mybutton mybutton-${color}`}>
            {text}
        </button>
    )
}

export default MyButton;
