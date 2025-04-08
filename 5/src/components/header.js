import { useTheme } from "../context/theme"

const Header = () => {
    const {toggle} = useTheme()
    return (
        <div>
            Header
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}
export default Header