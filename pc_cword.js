 "use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Millione Johnson
   Date: 3/28/19
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/


var allLetters;

var currentLetters = puzzleLetter;

var wordletters;

var acrossClue;

var downClue;

var typeDirection = right;

window.onload = init;

function init() {
      allLetters = document.querySelectorAll("table#crossword span");
      currentLetter = allLetters[0];
      var downID = currentLetter.dataset.clueA;
      var acrossID = currentLetter.dataset.clueD;
      acrossClue = document.getElementById("acrossID");
      downClue = document.getElementById("downID");
}


function formatPuzzle(puzzleLetter) {
      for(var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.backgroundColor = ";";
      }
      acrossClue.style.color = "";
      downClue.style.color = "";

      if(currentLetter.dataset.clueA !== undefined) {
         acrossClue = document.getElementById(currentLetter.dataset.clueA);
         acrossClue.style.color = "blue";
         wordLetters = document.querySelectorAll("data-clue-a =") + currentLetter.dataset.clueA + "]");
         for(var i = 0; i < wordLetters.length; i++) {
            wordLetters[i].style.background = "rgb(231, 231, 255)";
         }
      }

      if(currentLetter.dataset.clueD !== undefined) {
         acrossClue = document.getElementById(currentLetter.dataset.clueD);
         acrossClue.style.color = "red";
         wordLetters = document.querySelectorAll("data-clue-d =") + currentLetter.dataset.clueD + "]");
         for(var i = 0; i < wordLetters.length; i++) {
            wordLetters[i].style.background = "rgb(255, 231, 231)";
         }
      }
      if(typeDirection = "right"){
         currentLetter.style.color = "rgb(191, 191, 255)";
      } else {
         currentLetter.stlye.color = "rgb(255, 191, 191)";
      }
}
   
function selectLetter(e) {
   var leftLetter = "datset.left";
   var upLetter = "dataset.up";
   var rightLetter = "dataset.right";
   var downLetter = "dataset.down";
   var userKey = e.userKey;

   if(userKey === 37) {
      formatPuzzle(leftLetter)
   } else if(userKey === 38) {
      formatPuzzle(upLetter)
   } else if(userKey === 39 || userKey === 9) {
      formatPuzzle(rightLetter)
   } else if(userKey === 40 || userKey === 13) {
      formatPuzzle(downLetter)
   } else if(userKey === 8 || userKey === 46) {
      currentLetter.textContent = getChar(userKey);
      if(typeDirection === "right") {
         formatPuzzle(rightLetter);
      } else {
         formatPuzzle(downLetter);
      }
      e.preventDefault();
}





/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
