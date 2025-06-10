import { fetchUser } from "@/services/user.service"

const UserPage = async ({params}) => {
    const id = (await params).id
    const user = await fetchUser(id)
    return (
        <div>{user.name}</div>
    )
}

export default UserPage