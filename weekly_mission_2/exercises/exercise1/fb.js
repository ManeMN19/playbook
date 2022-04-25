const user = {
    name: "Mane Navarro",
    username: "maanee19",
    friends: 100,
    livesin: "Zapopan",
    relationshipstatus: "single",
    photos: [
        {
            title: "Foto 1",
            src: "/user/maanee19/foto1.jpg",
            likes: 100,
            comments: 5,
        },
        {
            title: "Foto 2",
            src: "/user/maanee19/foto2.jpg",
            likes: 187,
            comments: 23,
        },
        {
            title: "Foto 3",
            src: "/user/maanee19/foto3.jpg",
            likes: 56,
            comments: 12,
        },
    ],
    videos: [
        {
            title: "Video 1",
            src: "/user/maanee19/video1.mp4",
            likes: 250,
            comments: 10,
        }
    ],

    getUsername: function(){
      return this.username
    },

    getName: function(){
      return this.name
    },

    getFriends: function(){
        return this.friends
    },

    getLivesIn: function(){
        return this.livesin
    },

    getRelationship: function(){
        return this.relationshipstatus
    },

    getPhotos: function(){
        return this.photos
    },

    getVideos: function(){
        return this.videos
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
console.log(user.getPhotos())

const post = {
	author: 'Mane Navarro',
    content: [
        text= "Este es mi nuevo post",
        srcimage="",
        srcvideo=""
    ],
    privacity: 'Public',
	date: new Date(),
    likes: 123,
	shares: 456,
    comments: [
        {
            c_author: "Friend 1",
            c_comment: "Esta genial tu foto",
            c_date: new Date(),
            c_likes: 10,
        }
    ],

    getAuthor: function(){
        return this.author
      },
  
      getPrivacity: function(){
        return this.privacity
      },
  
      getDatePost: function(){
          return this.date
      },
  
      getLikes: function(){
          return this.likes
      },
  
      getShares: function(){
          return this.shares
      },
  
      getComments: function(){
          return this.comments
      },
      
      setPost: function(author, content, privacity){
           this.author=author
           this.privacity=privacity
           this.date= new Date()
           this.content= content
      },
  
      setComment: function(authorcom,comment){
          this.comments[0].c_author=authorcom
          this.comments[0].c_comment=comment
      },

      setLikePost: function(){
        this.likes+=1
      },

      setLikeComment: function(){
        this.comments[0].c_likes+=1
      },
}

console.log("\n-------------------------------\n\nPost: ")
console.log(post)
post.setLikeComment();
console.log(post.comments[0].c_likes)

const biography = {
    name: 'Mane Navarro',
	userName: 'Maanee19',
	profileImg: {
		title: 'Mi Foto de Perfil Favorita',
		srcimage: '/user/maanee19/profile.jpg'
	},
    
    getName: function(){
        return this.name
    },

    getUserName: function(){
        return this.userName
    },

    getProfileImage: function(){
        return this.profileImg
    },

    setProfileImage: function(title,src){
        this.profileImg.title=title
        this.profileImg.srcimage=src
    },    
}

console.log("\n-------------------------------\n\nBiography: ")
console.log(biography)
biography.setProfileImage("Image 2","https://fb.com/maanee19")
console.log(biography.getProfileImage())