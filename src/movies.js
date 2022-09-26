// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let allDirectors = moviesArray.map((eachDirector) => {
        return eachDirector.director
    })

    return allDirectors
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let movies = "";
    let moviesSpielberg = moviesArray.filter((eachMovie)=>{
        if(eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')){
            return true
        }
    })
    return moviesSpielberg.length   
}
 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length===0){
        return 0
    }

    let allScoresAverage = moviesArray.reduce((acc, eachMovie)=>{
        if(eachMovie.score === undefined){
            return acc
        } else {
            let num = Number(eachMovie.score)
            return acc + num
        }
    },0)
    let average = allScoresAverage/ moviesArray.length
    return Number(average.toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaMovies = moviesArray.filter((eachMovie)=>{
            return eachMovie.genre.includes('Drama');
    });

        dramaScoreAverage = scoresAverage(dramaMovies);
            return dramaScoreAverage;
        }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    // let cloneArray1 = structuredClone (moviesArray)
    
//     let  orderedMovies = cloneArray1.sort((movie2.year, movie1.year)=>{
//         if(movie2.year > movie1.year){
//             return 1;
//         } else if (movie1.year> movie2.year){
//             return -1;
//         } else {
//             return 0
//         }
//     })
//     return orderedMovies;
// }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// let cloneArray2 = structuredClone(moviesArray)

// let orderedMoviesTitle = cloneArray2.sort((movie2.title, movie1.title)=>{
//     if(movie2.title > movie1.title){
//     return 1;
//     } else if (movie1.title> movie2.title){
//     return -1;
//     } else {
//      return 0
//      }
    
//     }) 


// let first20Titles = structuredClone(orderedMoviesTitle)

// return first20Titles.slice(0,20)




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
