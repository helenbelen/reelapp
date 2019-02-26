db.collection.insertOne(
 
   {
     title: "movie1",
	duration: 30,
	rating: "R",
	description: "sample movie",
	year: 2011,
	tags: "comedy",
	thumb: "reelapp-december-2018.s3.amazonaws.com/thumbs/movie-poster1.jpg",
	link: "reelapp-december-2018.s3.amazonaws.com/videos/video-1.mp4",
	meta:{
		score: 3,
	}
   }
);
   