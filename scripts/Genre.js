export const Genre = async () => {
    const response = await fetch("http://localhost:8088/genres")
    return await response.json()
}