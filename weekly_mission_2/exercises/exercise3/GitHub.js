class repository {
    constructor(name, author, language){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits= 0,
        this.stars= 0,
        this.forks= 0,
        this.issues_open= 0,
        this.issues_close= 0
    }
        getTotalIssues(){
            return this.issues_open + this.issues_close
        }
        
        getGeneralInfo()
        {
            return `This repository ${this.name} was created by ${this.author}`
        }
}

const Repo = new repository("playbook", "ManeMN19", "Javascript");
console.log(Repo);
