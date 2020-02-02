/*jshint esversion: 6 */
const findAllSolutions = require('./boggle_solver.js');
/**
 * Known Bugs & Testing blindspots:
 * - with QuGCD, the code looks for an extra D after finding the word
 * - the code only checks the first route it finds with each starting point and 
 *      not the multiple possibilities per starting point.
 * - If a word has Qu repetitively and ends with another letter, the code may fail.
 * 
 * Lessons learned:
 * - Test Driven Dev is an amazingly thorough approach to coding. I love it
 * - Always use semicolons in JS.
 *    - "but Travis why would I do that? 
 *        doesn't JS accommodate for that small syntax error with Automatic Semicolon Insertion"?
 *        - Well, me from the past, it can mess up your code 
 *            by creating global variables accidentally or unintentionally returning undefined. Just Google it bro
 * - Crucial differences between "var", "let" and "const":
 *    - var is global
 *    - let is block-scoped. treats same name variables with different scopes like 2 different 
 *    - const is block scoped, can't be redeclared or updated.
 * - I learned of for...of loops for arrays & for...in for objects loops
 * - JS does not support multidimensional arrays. 
 *      Apart from the way I did it, every other way I saw to make 2d arrays 
 *          was either making a reference to the same object
 *          OR created a shallow copy of a 1d array
 *                  (anymore dimensions and it's a reference to the original)
 * - Your code WILL have Bugs
 */

describe("Correctness test", () => {
    
      test('2x2 grid', () => {
        var grid = [['A', 'B'], ['C', 'D']];
        var dictionary = ['A', 'B', 'AC', 'ACA', 'ACB', 'DE'];        
        expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual(['ACB']);
      });

      test('3x3 grid', () => {
        var grid = [['A', 'B', 'C'], ['C', 'D', 'E']];
        var dictionary = ['A', 'B', 'AC', 'ACA', 'ACB', 'DE'];        
        expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual(['ACB']);
      });

      test('4x4 grid', () => {
        var grid = [['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H'], ['I', 'J', 'K', 'L'], ['A', 'B', 'C', 'D']];
        var dictionary = ['ABEF', 'AFJIEB', 'DGKD', 'DGKA'];
        expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual(['ABEF','AFJIEB','DGKD']);
      });

      test('5x5 grid', () => {
        var grid = [['A', 'B', 'C', 'D', 'E'], ['E', 'F', 'G', 'H', 'I'], ['I', 'J', 'K', 'L', 'J'], ['A', 'B', 'C', 'D', 'E']];
        var dictionary = ['ABEF', 'AFJIEB', 'DGKD', 'DGKA'];
        expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual(['ABEF','AFJIEB','DGKD']);
      });
    
      test('example test case 3', () => {
        var grid = [['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D'], ['A', 'B', 'C', 'D']];
        var dictionary = ['AAAA', 'BB', 'CCCC', 'HHHHH'];
        expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual(['AAAA','CCCC']);
      });
 
      describe('Qu Tests', ()=>{
        test('words that start with Qu', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']];
            var dictionary = ['QuGCD','QuF'];
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual(['QuGCD', 'QuF']);
        });
        
        test('words that end with Qu', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']];
            var dictionary = ['EAQu','FQu'];
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual(['EAQu','FQu']);
        });

        test('words with Qu in the middle', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']];
            var dictionary = ['EAQuCD','FQuHH'];
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual(['EAQuCD','FQuHH']);
        });

        test('words with Qu repetitively', () => {
            var grid = [['E', 'Qu', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']];
            var dictionary = ['QuGQu','EQuQu'];
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual(['QuGQu','EQuQu']);
        });
        
        test('Qu intensive edge case tests on 4x4', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']];
            var dictionary = ['QuGCD', 'EFQuH', 'QuF', 'FQu'];
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual(['QuGCD', 'EFQuH', 'QuF', 'FQu']);
        });
      });
      
      describe('Failure tests', () => {
        test('empty grid', () => {
            var grid = [];
            var dictionary = ['QuGCD', 'EFQuH', 'QuF', 'FQu'];
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual([]);
        });
        test('empty dictionary', () => {
            var grid = [['E', 'F', 'Qu', 'H'], ['E', 'F', 'G', 'H'], ['A', 'Qu', 'C', 'D'], ['A', 'B', 'C', 'D']];
            var dictionary = [];
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual([]);
        });
        test('empty grid & dictionary', () => {
            var grid = [];
            var dictionary = [];
            expect(findAllSolutions.findAllSolutions(grid, dictionary)).toEqual([]);
        });
      });
});

