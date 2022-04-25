class pr {

    constructor(title, author, branch, repo){
        this.title= title
        this.author= author
        this.branchName= branch 
        this.dateCreated= new Date()
        this.status= "Open"
        this.repositoryNameAssociated= repo
    }

    getStatus(){
      return this.status
    }

    getTitleAndAuthor(){
        return {
          'title': this.title,
          'author': this.author
        }
    }
}

const pr1 = new pr("Merge con Master", "ManeMN19","newBranch","playbook");

console.log("\n-------------------------------\n\nPull Request: ")
console.log(pr1)
console.log("Nombre del Branch: " + pr1.branchName)
console.log(`Status: ${pr1.getStatus()}`)
console.log(pr1.getTitleAndAuthor())