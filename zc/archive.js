var rootObj = document.querySelector(".tree");
fetch("./archive_data.json").then(
    content => content.json()
).then(
    jsonData => {
        var archivelist = jsonData.data;
        var htmlContent;
        for (let i=0; i<archivelist.length; i++){

            var levelOneNode = archivelist[i];
            var levelOneName = levelOneNode.LevelOneName;
            var levelOneChilds = levelOneNode.LevelOneChilds;

            var levelOneLI = document.createElement("li");
            levelOneLI.className = "level1";
            levelOneLI.innerText = levelOneName;

            var levelOneUL = document.createElement("ul");

            for (let j=0; j<levelOneChilds.length; j++){

                var levelTwoNode = levelOneChilds[j];
                var levelTwoName = levelTwoNode.LevelTwoName;
                var levelTwoChilds = levelTwoNode.LevelTwoChilds;

                var levelTwoLI = document.createElement("li");
                levelTwoLI.className = "level2";
                levelTwoLI.innerText = levelTwoName;

                var levelTwoUL = document.createElement("ul");
                                                
                for(let m=0; m<levelTwoChilds.length; m++){
                    var levelTwoChildItem = levelTwoChilds[m];

                    var levelThreeLI = document.createElement("li");
                    levelThreeLI.className = "level3";
                    levelThreeLI.innerText = "[ "+levelTwoChildItem.title + " ] ";

                    var coreA = document.createElement("a");
                    coreA.style = "text-decoration:none;";
                    coreA.href = levelTwoChildItem.url;
                    coreA.innerHTML = levelTwoChildItem.url +"&nbsp; &nbsp;";

                    // var iconOne = document.createElement("i");
                    // iconOne.className = "fa fa-circle fa-stack-2x";

                    // var iconTwo = document.createElement("i");
                    // iconTwo.className = "fa fa-flag fa-stack-1x fa-inverse";

                    // var span = document.createElement("span");
                    // span.className = "fa-stack";
                    // span.title = levelTwoChildItem.description;

                    // span.appendChild(iconOne);
                    // span.appendChild(iconTwo);                    

                    var icon = document.createElement("i");
                    icon.className = "fa fa-snowflake-o fa-spin";    
                    icon.style = "color: skyblue;";
                    icon.title = levelTwoChildItem.description;        

                    levelThreeLI.appendChild(coreA);
                    levelThreeLI.appendChild(icon);
                    levelTwoUL.appendChild(levelThreeLI);                                
                }

                levelTwoLI.appendChild(levelTwoUL);
                levelOneUL.appendChild(levelTwoLI);
            }
            levelOneLI.appendChild(levelOneUL);
            rootObj.appendChild(levelOneLI);
        }
    }
)