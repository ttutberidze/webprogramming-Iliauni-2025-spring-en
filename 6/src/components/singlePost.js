import {useParams} from 'react-router'

const SinglePost = () => {
    const params = useParams()
    console.log(params)
    return <div>Post with ID: {params.id}</div>
}
export default SinglePost;