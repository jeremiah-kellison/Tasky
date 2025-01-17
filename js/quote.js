// function getDailyQuote() {
//   const apiUrl = "https://api.quotable.io/random?tags=inspirational";

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const quote = data.content;
//       const author = data.author;
//       document.querySelector("p.quote").innerHTML = `"${quote}"`;
//       document.querySelector("p.author").innerHTML = `-${author}`;
//     })
//     .catch((error) => {
//       console.error("Error fetching quote:", error);
//     });
// }

function getDailyQuote() {
    const apiUrl = "https://api.quotable.io/random";
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const quoteText = data.content;
        const quoteAuthor = data.author;
  
        document.querySelector("p.quote").innerHTML = quoteText;
        document.querySelector("p.author").innerHTML = `-${quoteAuthor}`;
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    getDailyQuote();
  });
  
  function getDailyVerse() {
    const apiUrl = "https://beta.ourmanna.com/api/v1/get/?format=json";
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const verse = data.verse.details.text;
        document.querySelector(".verse").innerHTML = `"${verse}"`;
        const reference = data.verse.details.reference;
        document.querySelector(".reference").innerHTML = `-${reference}`;
      })
      .catch((error) => {
        console.error("Error fetching Bible verse:", error);
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    getDailyVerse();
  });
  