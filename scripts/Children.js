export const Children = async () => {
    const response = await fetch("http://localhost:8088/children")
    return await response.json()
}