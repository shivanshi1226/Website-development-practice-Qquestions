function Author(name, birthYear, nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality
  }
  
  function Book(name, birthYear, nationality, genre, price){
    this.author = new Author(name, birthYear, nationality);
    this.genre = genre;
    this.price = price;
    this.getBookInfo= function(){
      console.log(`${this.author.name} ${this.genre} ${this.price}`)
    }
  }
  
  var myBook = new Book("Stephen King", 1947, "American", "horror", 500);
  myBook.getBookInfo();