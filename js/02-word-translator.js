let userInput = prompt ("Enter a language code: es, de, en, fr ");
userInput=userInput.trim().toLowerCase();

if (userInput === 'es' ){
    console.log("Hello World translated in Spanish is: Hola Mundo");
 }
 else if (userInput === 'de'){
    console.log("Hello World translated in German is: Hallo Welt");
 }
 else if (userInput === 'fr'){
    console.log("Hello World translated in French is: Bonjour le monde");
 }
 else {
    console.log("Hello World translated in English is: Hello World");
 }