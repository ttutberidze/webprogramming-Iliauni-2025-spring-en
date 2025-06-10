'use client'
import { useRouter } from "next/navigation"

const UserItem = ({user}) => {
    const router = useRouter()
    return (
        <div style={{border: '1px solid lime', padding: 10}}>
            <p>Name: {user.name}</p>
            <p>Skills: {user.skills && user.skills.join(', ')}</p>
            <button onClick={() => router.push(`/users/${user._id}`)}>View Details</button>
        </div>
    )
}

export default UserItem