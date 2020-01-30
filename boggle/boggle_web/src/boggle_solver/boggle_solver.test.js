const findAllSolutions = require('./boggle_solver.js');
/**
 * Known Bugs & Testing blindspots:
 * - with QuGCD, the code looks for an extra D after finding the word
 * - the code only checks the first route it finds with each starting point and 
 *      not the multiple possibilities per starting point.
 * - If a word has Qu repetitively and ends with another letter, the code may fail.
 * - lack of thorough testing with varying sized non-square grids
 * 
 * Lessons learned:
 * - Test Driven Dev is an amazingly thorough approach to coding. I love it
 * - JS does not support multidimensional arrays. 
 *      Apart from the way I did it, every other way I saw to make 2d arrays 
 *          was either making a reference to the same object
 *          OR created a shallow copy of a 1d array
 *                  (anymore dimensions and it's a reference to the original)
 * - Your code WILL have Bugs
 */

describe("Correctness test", () => {
    
      test('2x2 grid', () => {
        var grid = [['A', 'B'], ['C', 'D']]
        var dictionary = ['A', 'B', 'AC', 'ACA', 'ACB', 'DE']        
        expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual(['ACB']);
      });

      test('2x3 grid', () => {
        var grid = [['A', 'B'], ['C', 'D'],['G','P']]
        var dictionary = ['A', 'B', 'AC', 'ACA', 'ACB', 'DE']        
        expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual(['ACB']);
      });

      test('3x3 grid', () => {
        var grid = [['A', 'B', 'C'], ['C', 'D', 'E']]
        var dictionary = ['A', 'B', 'AC', 'ACA', 'ACB', 'DE']        
        expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual(['ACB']);
      });

      test('4x4 grid', () => {
        var grid = [['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H'], ['I', 'J', 'K', 'L'], ['A', 'B', 'C', 'D']]
        var dictionary = ['ABEF', 'AFJIEB', 'DGKD', 'DGKA']
        expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual(['ABEF','AFJIEB','DGKD']);
      });
    
      test('example test case 3', () => {
        var grid = [['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D']]
        var dictionary = ['AAAA', 'BB', 'CCCC', 'HHHHH']
        expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual(['AAAA','CCCC']);
      });
 
      describe('Qu Tests', ()=>{
        test('words that start with Qu', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']]
            var dictionary = ['QuGCD','QuF']
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual(['QuGCD', 'QuF']);
        });
        
        test('words that end with Qu', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']]
            var dictionary = ['EAQu','FQu']
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual(['EAQu','FQu']);
        });

        test('words with Qu in the middle', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']]
            var dictionary = ['EAQuCD','FQuHH']
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual(['EAQuCD','FQuHH']);
        });

        test('words with Qu repetitively', () => {
            var grid = [['E', 'Qu', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']]
            var dictionary = ['QuGQu','EQuQu']
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual(['QuGQu','EQuQu']);
        });
        
        test('Qu intensive edge case tests on 4x4', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']]
            var dictionary = ['QuGCD', 'EFQuH', 'QuF', 'FQu']
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual(['QuGCD', 'EFQuH', 'QuF', 'FQu']);
        });
      })
      
      describe('Failure tests', () => {
        test('empty grid', () => {
            var grid = []
            var dictionary = ['QuGCD', 'EFQuH', 'QuF', 'FQu']
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual([]);
        });
        test('empty dictionary', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']]
            var dictionary = []
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual([]);
        });
        test('empty grid & dictionary', () => {
            var grid = []
            var dictionary = []
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual([]);
        });
        test('numbers as string data-type in dictionary', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']]
            var dictionary = ['567', '76', '67', '987']
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual([]);
        });
        test('dictionary mixed with numbers, as str, & valid strings', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']]
            var dictionary = ['567', '76', 'EEF', '987']
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toStrictEqual(['EEF']);
        });
      })
});

