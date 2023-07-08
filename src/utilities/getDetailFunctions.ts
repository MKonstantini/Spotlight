// Get Genre
const genres = [
    { id: 12, name: "Adventure" },
    { id: 14, name: "Fantasy" },
    { id: 16, name: "Animation" },
    { id: 18, name: "Drama" },
    { id: 27, name: "Horror" },
    { id: 28, name: "Action" },
    { id: 35, name: "Comedy" },
    { id: 36, name: "History" },
    { id: 37, name: "Western" },
    { id: 53, name: "Thriller" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 878, name: "Science Fiction" },
    { id: 9648, name: "Mystery" },
    { id: 10402, name: "Music" },
    { id: 10749, name: "Romance" },
    { id: 10751, name: "Family" },
    { id: 10752, name: "War Movie" },
    { id: 10759, name: "Anime" },
    { id: 10762, name: "Kids" },
    { id: 10763, name: "News" },
    { id: 10764, name: "Reality" },
    { id: 10765, name: "Sci-Fi / Fantasy" },
    { id: 10766, name: "Soap" },
    { id: 10767, name: "Talk" },
    { id: 10768, name: "War & Politics" },
    { id: 10770, name: "TV-Film" }
]
export function getGenre(subjectsArr: any[], position:number, genreNum:number) {
    const grenreId1 = subjectsArr[position].genre_ids[0]
    const grenreId2 = subjectsArr[position].genre_ids[1]
    let genreName1, genreName2;
    for (let i = 0; i < genres.length; i++) {
        if (genres[i].id === grenreId1) genreName1 = genres[i].name;
    }
    for (let i = 0; i < genres.length; i++) {
        if (genres[i].id === grenreId2) genreName2 = genres[i].name;
    }

    if (genreNum === 1) {
        return (genreName1)
    }
    else {
        return (genreName2)
    }
}

// Get Release Date
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export function getReleaseDate(subjectsArr: any[], position:number) {
    let releaseDate = new Date(subjectsArr[position].release_date).toJSON()
    const month = releaseDate.slice(6, 7)
    const year = releaseDate.slice(0, 4)
    const monthName = months[Number(month) - 1];
    releaseDate = `${monthName} ${year}`

    return (releaseDate)
}

