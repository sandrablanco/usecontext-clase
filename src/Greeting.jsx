import { useLanguage } from "./LanguageContext";

const Greeting = () => {
    const { language } = useLanguage();
    const greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
        de: 'Hallo',
        it: 'Ciao',
        pt: 'Olá'
    }
    return (
        <>
    <h2>{greetings[language]}</h2>
    </>);
}

export default Greeting;