import UserItem from "@/components/userItem"
import { fetchUsers } from "@/services/user.service"

const Users = async () => {
    const res = await fetchUsers()

    return (
        <div>
            {res.map((user) => <UserItem key={user._id} user={user} />)}
        </div>
    )
}

export default Users