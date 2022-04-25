class post {
    constructor(author,content, privacity){
        this.author= author
        this.content= {
            text:content[0],
            srcimage:content[1],
            srcvideo:content[2]
        }
        this.privacity= privacity
        this.date= new Date()
        this.likes= 0
        this.shares= 0
        this.comments= []
    }

    getAuthor(){
        return this.author
    }

    getPrivacity(){
        return this.privacity
    }

    getDatePost(){
        return this.date
    }

    getLikes(){
        return this.likes
    }

    getShares(){
        return this.shares
    }

    getComments(){
        return this.comments
    }

    setLikePost(){
        this.likes+=1
    }
}

const newpost=new post("Mane Navarro",[text= "Este es mi nuevo post",srcimage="",srcvideo=""],"Public")
console.log("\n-------------------------------\n\nPost: ")
console.log(newpost)
newpost.setLikePost();
console.log(`Likes: ${newpost.getLikes()}`)