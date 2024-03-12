const twitter = {
    mustafa : {
        username : "@Mustafa",
        content : `Mustafa is Software Engineer`,
        likes: 240,
        post : 5,
        tags : ["#finishr","#mustafa"]
    },
    university : {
        username : "@PUTRasul",
        content : `PUT Rasul is Technology University`,
        likes: 240,
        post : 5,
        tags : ["#technology","#bsse"]
    }

}

console.log(twitter.mustafa); //access nested object

console.log(twitter.mustafa.likes); //access each object inner data