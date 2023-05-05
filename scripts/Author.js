export const Author = async () => {
    const response = await fetch("http://localhost:8088/authors")
    return await response.json()
}

