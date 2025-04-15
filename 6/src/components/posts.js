import { useEffect, useState } from "react"
import { useTheme } from "../context/theme"

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            const postsResult = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'GET'
            })
            const posts = await postsResult.json()
            setPosts(posts)
            setIsLoading(false)
        }
        fetchPosts()
    //     setIsLoading(true)
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'GET'
    //     })
    //     .then((result) => result.json())
    //     .then((result) => setPosts(result))
    //     .finally(() => setIsLoading(false))
    }, [])

    const {theme} = useTheme()
    console.log(theme)
    return <div style={theme}>
        {isLoading ? (
            <div>Loading</div>
        ) : posts.map((post) => {
            return (
                <div>{post.title}</div>
            )
        })}
    </div>
}

export default Posts

// GET, POST, PUT, PATCH, DELETE