const repo = {
    name: "playbook",
    author: "ManeMN19",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 17,
    forks: 3,
    issues_open: 123,
    issues_close: 34,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("\nRepo: ")
console.log(repo)
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

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

console.log("\n-------------------------------\n\nIssue: ")
console.log(issue)
console.log("Status: " + issue.status)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

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

console.log("\n-------------------------------\n\nPull Request: ")
console.log(pr)
console.log("Nombre del Branch: " + pr.branchName)
console.log(`Status: ${pr.getStatus()}`)
console.log(pr.getTitleAndAuthor())