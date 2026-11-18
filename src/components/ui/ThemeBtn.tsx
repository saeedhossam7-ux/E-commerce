import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
export default function ThemeBtn() {
    const { theme, setTheme } = useTheme();
    return (
        <button
            className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded cursor-pointer"
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
            }}
        >
            {theme === "dark" ? <span>
                <FontAwesomeIcon icon={faSun} />
            </span> : <span><FontAwesomeIcon icon={faMoon} /></span>}
        </button>
    );
}