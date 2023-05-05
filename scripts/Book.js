export const Book = async () => {
    const response = await fetch("http://localhost:8088/books")
    return await response.json()
}