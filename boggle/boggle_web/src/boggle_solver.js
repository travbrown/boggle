/*jshint esversion: 6 */

function findStartingPoints( grid, word ){
    let starting_points = [];
    
    let searchTile = word[0];
    if(word[0] == 'Q'){ // To account for the Qu tile
        searchTile = 'Qu';
    }

    for( let gridRow = 0; gridRow < grid.length; gridRow++ ){
        for( let gridCol = 0; gridCol < grid.length; gridCol++ ){
            if(grid[gridRow][gridCol] == searchTile){
                starting_points.push([gridRow,gridCol]);
            }
        }
    }
    return starting_points;
}

function DFS(grid, row, col, visited, word, letter){
        let offsets = [[-1,-1], [-1,0], [-1,1],
        [0,-1], [0,1],[1,-1],[1,0],[1,1]];

        visited[row][col] = true;

        if(word[letter] == 'u'){ // skip to next letter
            letter += 1;
        }

        let tile = word[letter]; 
        if(tile == 'Q'){ // Ensuring we matching Qu with Qu & not Q with Qu 
            tile = 'Qu'; // Check the next mention of this variable to understand
        }

        for( offset of offsets ){ // Checking all the neighbours
            let x = offset[0] + row;
            let y = offset[1] + col;
            
            
            if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length){ // If within range
                
                if (visited[x][y]){
                    continue;
                }
                if(tile == grid[x][y]){ // if we have found the letter
                        
                    if(letter == word.length-1){ // if we have found the last letter
                        //console.log('the last letter: ', tile);
                        
                        found = true; // then tell em, we found it
                        break; // break out from checking other pairs if we found it
                    }

                    if(tile == 'Qu' && letter == word.length-2){
                        //console.log('the last letter: ', tile);
                        
                        found = true; // then tell em, we found it
                        break; // break out from checking other pairs if we found it
                    }

                    letter += 1;
                    //if(word[letter] == 'u'){letter += 1}
                    DFS(grid, x,y,visited, word, letter); // then go deeper and keep looking for the rest
                }                
            }
        }
 }

  function isWordValid(word){
    if(word.length < 3){
        return false;
    }
    return true;
  }

function findAllSolutions(grid, dictionary){
    valid_words = [];
     if(grid == [] || dictionary == []){
        return [];
     }
    
    for (const word of dictionary ){ //iterating thru dictionary
        
        if(!isWordValid(word)){
            continue;
        }
        

        const starting_points = findStartingPoints(grid,word); // finding the position index pair(s) for first letter of word

        if(starting_points == []){ //if no starting_points, move on to the next word
            continue;
        }

        for ( const starting_point of starting_points ){ // iterating the various starting_points
            //creating a new visited arr for each time we check a diff start pt
            let visited = new Array(grid.length);
            for(let visit_row = 0; visit_row < grid.length; visit_row++){
                visited[visit_row] = new Array(grid[0].length);
                for(let visit_col = 0; visit_col < grid[0].length; visit_col++){
                    visited[visit_row][visit_col] = false;
                }
            }
            
            found = false; // init found to false for each point we check for the word

            DFS(grid, starting_point[0], starting_point[1], visited, word, 1); // Diving in
            
            if(found){ // break from checking the other starting points if word is found
                valid_words.push(word);
                break;
            }
        }
    }
    
    return valid_words;
}


exports.findAllSolutions = findAllSolutions;