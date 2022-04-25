class user {
    constructor(name, username, livesin, relationshipstatus){
        this.name= name
        this.username= username
        this.friends= 0
        this.livesin= livesin
        this.relationshipstatus= relationshipstatus
        this.photos= [
            {
                title: "Foto Default",
                src: "/user/default.jpg",
                likes: 100,
                comments: 5,
            },
        ],
        this.videos= [
            {
            }
        ]
    }

    getUsername(){
        return this.username
    }

    getName(){
        return this.name
    }

    getFriends(){
        return this.friends
    }

    getLivesIn(){
        return this.livesin
    }

    getRelationship(){
        return this.relationshipstatus
    }

    getPhotos(){
        return this.photos
    }

    getVideos(){
        return this.videos
    }

    setUsername(newUsername){
        this.username=newUsername
    }

    setBio(newBio){
        this.bio=newBio
    }
}

const newuser= new user("Mane Navarro","maanee19","Zapopan","Single");
console.log("\nUser: ")
console.log(newuser)
console.log(newuser.getPhotos())