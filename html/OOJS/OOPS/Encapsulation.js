document.getElementById("demo").innerHTML = "Encapsulation in JS";

class Movie {
    // Data members are private and are not accessible outside the class use '#' keyword to make them private
    #title;
    #year;
    #genre;

    // Constructor
    constructor(t='', y=-1, g='') {
        this.#title = t;
        this.#year = y;
        this.#genre = g;
    }

    getTitle() {
        return this.#title;
    }

    setTitle(t){
        this.#title = t;
    }

    setGenre(g){
        this.#genre = g;
    }

    getGenre(){
        return this.#genre;
    }

    getYear(){
        return this.#year;
    }

    setYear(y){
        this.#year = y;
    }

    printMovieDetails(){
        console.log(this.#title);
        console.log(this.#year);
        console.log(this.#genre);
    }
}

const movie = new Movie( "vineeth and Sneha", 2025, "Romance");

movie.printMovieDetails();

console.log("----");
movie.setTitle("Sneha and vineeth");
movie.setYear(2026);
movie.setGenre("Action");
console.log(movie.getTitle());
movie.printMovieDetails();
