import ListFruits from "./ListFruits";

function MapFilterReduce() {

    const FRUITS = [
        "apple",
        "apricot",
        "avocado",
        "banana",
        "cranberry",
        "grape",
        "grapefruit",
        "lemon",
        "lime",
        "melon",
        "orange",
        "papaya",
        "pineapple",
        "raspberry",
        "strawberry",
        "tomato",
        "watermelon"
      ];

    // this would be the usual way to process things in a loop
    let transformedFruits = [];
    for (let i = 0; i < FRUITS.length; i++) {
        transformedFruits.push(`${FRUITS[i]}!`);
    }

    for (let i = 0; i < FRUITS.length; i++) {
        console.log(`fruit ${i} is ${FRUITS[i]}!`);
    }

    // what if we wanted to keep it const? how would we do that?
    // const transformedFruits = [] // ????

    // I wanna see us shouting the fruits here
    const shoutedFruits = []

    // I wanna see the lengths of the fruits instead of the names
    const fruitLengths = []

    // ==========================================================
    // I wanna see only the fruits that start with "a"
    const fruitsStartingWithA = []

    // I wanna see only the fruits that have even numbers of characters
    const fruitsWithEvenNumberOfChars = []

    // I wanna see only the fruits that end with "berry"
    const fruitsEndingInBerry = []

    // ==========================================================
    // I wanna see the total count of characters in all fruits
    const sumOfNumberOfCharactersInFruits = 0

    // I wanna see all of the fruits in a single string, but shouted, and without using Array.join()
    const shoutedFruitsInOneGo = ""

    // I wanna see the total count of vowels we have in all of the fruits
    const countOfVowelsInFruits = 0

    

    // if you haven't yet read much on JSX syntax and components, the rest of the file
    // will seem like ✨magic✨, but this will make sense in a few sessions.
    // Don't modify the code below.
    return <>
        <p>Lots of fruits!</p>
        <ListFruits description="List of all fruits" fruits={transformedFruits} />
        <ListFruits description="Shouting the names of the fruits" fruits={shoutedFruits} />
        <ListFruits description="Lenghts of the names of the fruits" fruits={fruitLengths} />
        <ListFruits description="Only the fruits that start with 'a'" fruits={fruitsStartingWithA} />
        <ListFruits description="Only the fruits with even numbers of characters" fruits={fruitsWithEvenNumberOfChars} />
        <ListFruits description="Only the fruits that end in 'berry'" fruits={fruitsEndingInBerry} />
        <ListFruits description="Only the fruits that end in 'berry'" fruits={fruitsEndingInBerry} />
        <p>Sum of number of characters in all fruits: {sumOfNumberOfCharactersInFruits}</p>
        <p>Shouted fruits in one go: {shoutedFruitsInOneGo}</p>
        <p>Count of all vowels in fruits: {countOfVowelsInFruits}</p>
    </>
}

export default MapFilterReduce