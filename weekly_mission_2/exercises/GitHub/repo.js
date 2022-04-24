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
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())