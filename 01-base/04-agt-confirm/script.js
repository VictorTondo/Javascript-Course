/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function questions (){
        let theAge = prompt("How old are you?");
        let theGender = prompt("What is your gender?");
        let theTown = prompt("Where do you live?");
        return " Your age: " + theAge + " Your gender: " + theGender + " Your town or city: " + theTown;
    }
    let info = questions ();
    let confirm = window.confirm("Is this information correct?" + info );

    if (confirm !== true ){
        questions();
    }

})();
