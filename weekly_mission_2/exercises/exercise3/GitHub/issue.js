class issue {
    constructor(title, repository, author){
        this.title= title
        this.repositoryNameAssociated= repository
        this.status= "Open"
        this.numberOfComments= 0
        this.labels= 0
        this.author= author
        this.dateCreated= new Date()
        this.lastUpdated= new Date()
    }

    getTitleAndAuthor(){
        return {
          'title': this.title,
          'author': this.author
        }
    }
    
    getGeneralInfo(){
        return `This Issue: "${this.title}" associated to the repository ${this.repositoryNameAssociated} was created on ${this.dateCreated}`
    }
}

const issue1 = new issue("Mi nuevo Issue", "playbook", "ManeMN19");

console.log("\n-------------------------------\n\nIssue: ")
console.log(issue1)
console.log("Status: " + issue1.status)
console.log(issue1.getTitleAndAuthor())
console.log(issue1.getGeneralInfo())