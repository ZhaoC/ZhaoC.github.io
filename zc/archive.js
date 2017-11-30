var rootObj = document.querySelector(".tree");

$.LoadingOverlay("show");

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
                levelTwoLI.innerHTML = levelTwoName + " <font size='4' color='#00BFFF' >("+levelTwoChilds.length+")</font>";

                var levelTwoUL = document.createElement("ul");
                                                
                for(let m=0; m<levelTwoChilds.length; m++){
                    var levelTwoChildItem = levelTwoChilds[m];

                    var levelThreeLI = document.createElement("li");
                    levelThreeLI.className = "level3";
                    levelThreeLI.innerText = "[ "+levelTwoChildItem.title + " ] ";

                    var coreA = document.createElement("a");
                    coreA.style = "text-decoration:none;";

                    // when url string is too long, use alias instead
                    if(typeof levelTwoChildItem.alias !== "undefined"){
                        coreA.innerHTML = levelTwoChildItem.alias +"&nbsp; &nbsp;";
                    }
                    else{
                        coreA.innerHTML = levelTwoChildItem.url +"&nbsp; &nbsp;";
                    }
                    coreA.href = levelTwoChildItem.url;
                    coreA.title = levelTwoChildItem.description;
                    

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
                    // icon.title = levelTwoChildItem.description;        

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

        // set onclick event
        $(".level2").click(function(e){
            // apply onclick event only to its parent element
            if (e.target !== this)
                return;

            if($(this).children(':visible').length === 0){
                $(this).children().show();
            } else {
                $(this).children().hide();
            }            
        });

        $.LoadingOverlay("hide");
    }
)