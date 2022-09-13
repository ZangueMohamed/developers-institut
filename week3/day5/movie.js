// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '04d045aea1msh7b5249e9c0be216p1f557ajsn4f5ddd33ad08',
//     'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
//   }
// };

// fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en', options)
//   .then(response => response.json())
//   .then(data => {
//     const list = data.d;

//     list.map((item) => {
//       const name = item.l;
//       const poster = item.i.imageUrl;
//       const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
//       document.querySelector(".movies").innerHTML += movie;
//     })
//   })
//   .catch(err => {
//     console.error(err);
//     });  
const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/search/basic',
  params: {
    country: 'us',
    service: 'netflix',
    type: 'movie',
    genre: '18',
    page: '1',
    output_language: 'en',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '04d045aea1msh7b5249e9c0be216p1f557ajsn4f5ddd33ad08',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
    list.map((item) => {
      const name = item.l;
      const poster = item.i.imageUrl;
      const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
      document.querySelector(".movies").innerHTML += movie;
    })

}).catch(function (error) {
  console.error(error);
});