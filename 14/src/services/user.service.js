
export const fetchUsers = async () => {
    const response = await fetch('http://localhost:8888/user', {
        cache: 'force-cache',
        next: {
            tags: ['users']
        }
    });
    return response.json()
}

export const fetchUser = async (userId) => {
    const response = await fetch(`http://localhost:8888/user/${userId}`, {
        cache: 'force-cache',
        next: {
            tags: ['users']
        }
    });
    return response.json()
}