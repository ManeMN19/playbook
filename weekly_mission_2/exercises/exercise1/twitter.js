const user = {
    id: Math.floor(Math.random()*(10-1)),
    username: "Maanee1504",
    name: "Mane Navarro",
    bio: "Aprendiendo a aprender",
    dateCreated: new Date(),
    lastUpdated: new Date(),

    getUsername: function(){
      return this.username
    },

    getName: function(){
      return this.name
    },

    getBio: function(){
        return this.bio
    },

    getDateCreated: function(){
        return this.dateCreated
    },

    getLastUpdated: function(){
        return this.lastUpdated
    },

    setUsername: function(newUsername){
        this.username=newUsername
    },

    setBio: function(newBio){
        this.bio=newBio
    },
}

console.log("\nUser: ")
console.log(user)

 const trending_topic = {
     id: Math.floor(Math.random()*(10-1)),
     category: "Música",
     trendingTopicName: "BTS",
     hastag: "#BTS",
     tweetsCount: 1160000,
     spam: false,
     dateCreated: new Date(),
     lastUpdated: new Date(),

    getCategory: function(){
        return this.category
    },

    getTTName: function(){
        return this.trendingTopicName
    },
    
    getHastag: function(){
        return this.hastag
    },

    getTweetsCount: function(){
        return this.tweetsCount
    },

    getIsSpam: function(){
        return this.spam
    },
    
    getDateCreated: function(){
        return this.dateCreated
    },

    getLastUpdated: function(){
        return this.lastUpdated
    },

}

console.log("\n-------------------------------\n\nTrending Topics: ")
console.log(trending_topic)