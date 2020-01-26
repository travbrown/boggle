
function findStartingPoints(grid,word){
    starting_points = []
    
    if(word[0] == 'Q'){ // To account for the Qu tile
        searchTile = 'Qu'
    }else{
        searchTile = word[0]
    }

    for( gridRow = 0; gridRow < grid.length; gridRow++ ){
        for( gridCol = 0; gridCol < grid[0].length; gridCol++ ){
            if(grid[gridRow][gridCol] == searchTile){
                starting_points.push([gridRow,gridCol]);
            }
        }
    }
    return starting_points;
 }
function DFS(grid, row, col, visited, word, letter){

        var offsets = [[-1,-1], [-1,0], [-1,1],
        [0,-1], [0,1],[1,-1],[1,0],[1,1]]

        visited[row][col] = 1

        if(word[letter] == 'u'){ // skip to next letter
            letter += 1
        }

        let tile = word[letter]; 
        if(tile == 'Q'){ // ensuring we matching Qu with Qu & not Q with Qu 
            tile = 'Qu' // Check the next mention of this variable to understand
        }

        for( offset_pairs = 0; offset_pairs < 8; offset_pairs++ ){ // Checking all the neighbours
            x = offsets[offset_pairs][0] + row 
            y = offsets[offset_pairs][1] + col
            
            
            if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length){ // If within range
                
                if (visited[x][y] == 1){
                    continue
                }else{

                    if(tile == grid[x][y]){ // if we have found the letter
                        
                        if(letter == word.length-1){ // if we have found the last letter
                            //console.log('the last letter: ', tile);
                            
                            found = true; // then tell em, we found it
                            break; // break out from checking other pairs if we found it
                        };

                        if(tile == 'Qu' && letter == word.length-2){
                            //console.log('the last letter: ', tile);
                            
                            found = true; // then tell em, we found it
                            break; // break out from checking other pairs if we found it
                        }

                        letter += 1;
                        //if(word[letter] == 'u'){letter += 1}
                        DFS(grid, x,y,visited, word, letter) // then go deeper and keep looking for the rest
                    }
                }
            }else{
                continue
            }
        }
 }

 function hasNumber(myString) {
    return /\d/.test(myString);
  }

  function isWordValid(word){
    if(hasNumber(word)){
        return false
    }
    
    if(word.length < 3){
        return false
    }
    return true
  }

function findAllSolutions(grid, dictionary){
    valid_words = []
     if(grid == [] || dictionary == []){
        return [];
     }
    
    for ( i = 0; i < dictionary.length; i++ ){ //iterating thru dictionary
        
        word = dictionary[i]; //extracting words
        if(!isWordValid(word)){
            continue
        }
        

        starting_points = findStartingPoints(grid,word); // finding the position index pair(s) for first letter of word

        if(starting_points == []){ //if no starting_points, move on to the next word
            continue
        }

        for ( pair = 0; pair < starting_points.length; pair++ ){ // iterating the various starting_points
            //creating a new visited arr for each time we check a diff start pt
            let visited = new Array(grid.length)
            for(visit_row = 0; visit_row < grid.length; visit_row++){
                visited[visit_row] = new Array(grid[0].length)
                for(visit_col = 0; visit_col < grid[0].length; visit_col++){
                    visited[visit_row][visit_col] = 0;
                }
            }
            
            found = false // init found to false for each point we check for the word

            DFS(grid, starting_points[pair][0], starting_points[pair][1], visited, word, 1) // Diving in
            
            if(found){ // break from checking the other starting points if word is found
                valid_words.push(word) 
                break
            }
        }
    }
    
    return valid_words
}


exports.findAllSolutions = findAllSolutions;



 
