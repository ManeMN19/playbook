class bio {
    constructor(name,username, profileImg){
        this.name= name
        this.userName= username
        this.profileImg= {
            title: profileImg[0],
            srcimage: profileImg[1]
        }
    }

    getName(){
        return this.name
    }

    getUserName(){
        return this.userName
    }

    getProfileImage(){
        return this.profileImg
    }

    setProfileImage(title,src){
        this.profileImg.title=title
        this.profileImg.srcimage=src
    }  
}

const biography= new bio('Mane Navarro','Maanee19',[title= 'Mi Foto de Perfil Favorita',srcimage= '/user/maanee19/profile.jpg'])
console.log("\n-------------------------------\n\nBiography: ")
console.log(biography)
biography.setProfileImage("Image 2","https://fb.com/maanee19")
console.log(biography.getProfileImage())