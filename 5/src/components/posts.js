import { useTheme } from "../context/theme"

const Posts = () => {
    const {theme} = useTheme()
    console.log(theme)
    return <div style={theme}>Posts</div>
}

export default Posts