const issue = {
    title: "Mi nuevo Issue",
    repositoryNameAssociated: "playbook",
    status: "Open",
    numberOfComments: 10,
    labels: 3,
    author: "ManeMN19",
    dateCreated: new Date(),
    lastUpdated: new Date(),

    getTitleAndAuthor: function(){
      return {
        'title': this.title,
        'author': this.author
      }
    },
    getGeneralInfo: function(){
      return `This Issue: "${this.title}" associated to the repository ${this.repositoryNameAssociated} was created on ${this.dateCreated}`
    }
   }
   
   console.log("Status: " + issue.status)
   console.log(issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())