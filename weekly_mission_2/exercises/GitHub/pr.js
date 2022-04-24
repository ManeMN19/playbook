const pr = {
    title: "Merge con Master",
    author:"ManeMN19",
    branchName: "newBranch",
    dateCreated: new Date(),
    status: "Open",
    repositoryNameAssociated: "playbook",

    getStatus: function(){
      return this.status
    },
    getTitleAndAuthor: function(){
        return {
          'title': this.title,
          'author': this.author
        }
    }
}
   
   console.log("Nombre del Branch: " + pr.branchName)
   console.log(`Status: ${pr.getStatus()}`)
   console.log(pr.getTitleAndAuthor())