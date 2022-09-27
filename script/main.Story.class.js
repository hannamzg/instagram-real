class story{
    currentId =0;
    stories =[
        /* id = this.currentId++,
        isDone = false, 
        storiesSrc = [], */
    ];
    
    addStories(src,name){
        let story = {
            id : this.currentId++,
            time:2000,
            storiesSrc : [src],
            isDone : false,
            name : name,
        }
        this.stories.push(story);
        return story;
    }

    getTheStoryes(){
         return this.stories
    }

    getId(id){
    let found = this.stories.find((element) => element.id === id);

        if(found){
            return found;
        }
        throw new Error("id not right");
    }

    changeIsDone(id){
        let updated = this.getId(id)
        this.stories = this.stories.map((element) => {
            if (element.id >= id) {
                element.isDone = true;
            }
        })
        return updated;
    }
}

/* let  mangerStroy =  new story();
console.log(mangerStroy.addStories("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShR-z_YBaJ_3pBA_zuFxX9KgpQkBtDPo4XWO_jEDMa&s"));
console.log(mangerStroy.addStories("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShR-z_YBaJ_3pBA_zuFxX9KgpQkBtDPo4XWO_jEDMa&s"));
console.log(mangerStroy.addStories("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShR-z_YBaJ_3pBA_zuFxX9KgpQkBtDPo4XWO_jEDMa&s"));
console.log(mangerStroy.getId(1));
console.log(mangerStroy.changeIsDone(2)); */