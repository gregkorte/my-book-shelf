// HTML ex... "${child} checked out a ${genre} titled ${book}"
    // need multiple loops to access a genre on a book
    export const BookLog = async () => {
        const response = await fetch("http://localhost:8088/bookLogs")
        return await response.json()
    }