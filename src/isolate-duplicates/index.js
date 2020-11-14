function isolateDuplicates(text) {
    if(text === undefined){return ""}
    if(typeof (text) !== "string"){return "please enter a valid string"}
    let count = 0;
    let casetext = text.toLowerCase().split("")
    let newText = text.split("")
    let textArray = []
    for(let i = 0; i<newText.length; i++){
        textArray.push(newText[i])

        if(casetext[i] === casetext[i+1]){
            count++
        } else{
            if(count > 1){
                textArray.push(']');
            }
            count = 0;
        }
        if(count === 2){
            textArray.push("[")
        }
    }
    
    // check for parenthesis, count them and output new string
    let testStr = textArray.join("")
    
    for(let i=0; i<testStr.length; i++){
        if(testStr[i] == "["){
            count++
        }
    }
    
    return [testStr, count]
}

module.exports = isolateDuplicates;




   