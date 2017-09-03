# FreeCodeCamp :: Image Search Abstraction Layer  

**User Story:** I can get the image URLs, alt text and page urls for a set of images relating to a given search string.  
  
**User Story:** I can paginate through the responses by adding a ?offset=2 parameter to the URL.  
  
**User Story:** I can get a list of the most recently submitted search strings.  
* <https://heather-flare.glitch.me/search/free%20code%20camp>  
* <https://heather-flare.glitch.me/search/free%20code%20camp?offset=3>  
* <https://heather-flare.glitch.me/recent>

```JSON
[{
  type: "image/jpeg",
  width: 3600,
  height: 2403,
  size: 1047219,
  url: "http://static2.businessinsider.com/image/56bb5129dd08958c148b470a-3600-2403/the-walking-dead-zombies.jpg",
  thumbnail: {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpurq3kfA3kvVA62f595fiaaPoZro8bKfxGDug__6X5Q0iqRtQLpR8pqf",
    width: 150,
    height: 100
  },
  description: "The Walking Dead' used zombie dentures with blood in mid-season ...",
  parentPage: "http://www.businessinsider.com/walking-dead-zombie-dentures-mid-season-premiere-2016-2"
}]
```
:sparkles: