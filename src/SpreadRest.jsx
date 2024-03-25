import MapFilterReduce from "./MapFilterReduce"

function SpreadRest() {

    // We don't want to modify the monster, it is a constant monster - a "conster"! 😜
    const objectosaurus = {
        name: "Objectosaurus Rex",
        alive: true,
        internalOrgans: {
            brain: {
                thought: "I wanna eat all of the keys!"
            },
            stomach: {
                contents: ["🟥🗝", "🟩🗝", "⬜🗝", "⬛🗝"]
            },
            intestines: {
                contents: ["🟨🗝", "🟪🗝"]
            }
        }
    }

    // missions: 
    
    // 1. Identify our foe and its thoughts in less lines of code.
    const {name, internalOrgans: {
            brain: {thought},
            stomach: {contents: stomachContents},
            intestines: {contents: intestinesContents}}} = objectosaurus
    
    // 2. Count the amount of keys in our foe's, with using less characters 
    const digestiveTractContents = [...stomachContents, ...intestinesContents]
    const amountOfKeys = digestiveTractContents.length

    // 3. Find the first and second keys in the foe's digestive tract, in one line
    const [first, second, ...remainder] = digestiveTractContents
    
    // 4. Using object destructuring and restructuring, defeat the foe in a single line of code with your sword!
    const doneosaurus = {...objectosaurus, alive: false, name: "Doneosaurus", struck: "sword"}
    
    // 5. Let's check if doneosaurus is alive in a novel way, along with their name, in a single swoop
    const {alive: doneosaurusIsAlive, name: doneosaurusName} = doneosaurus
    
    // 5. then using array destructuring, let's retrieve the keys from doneosaurus's digestive tract in one go
    const [,keyA, keyB] = digestiveTractContents
    
    const tryOpeningChest = (keyA, keyB, saurus) => `${keyA}+${keyB}🔓: ${saurus.name} is ${saurus.alive?"alive":`deceased - struck by a ${saurus.struck}`}`

    //console.log(tryOpeningChest(keyA, keyB, doneosaurus))

    // if you haven't yet read much on JSX syntax, the rest of the file
    // will seem like ✨magic✨, but this will make sense in a few sessions.
    // Don't modify the code below.
    if (doneosaurusIsAlive) {
        return <>
            <div>
                <p>There are still monsters lurking in the fields...</p>
                <p>We need to defeat <b>{name}</b>!</p>
                <p>This monster has eaten {amountOfKeys} keys already!</p>
                <p>We can read our foe&apos;s thoughts: &quot;<i>{thought}</i>&quot;</p>
                <p>Things in our foe&apos;s digestive tract:</p>
                <p>{first} - our foe just ate it. {second} - that was eaten right before.<br/> But before that, all of these were devoured: {remainder.join(", ")}</p>
            </div>
        </>
    } else {
        return <>
            <p>We defeated {doneosaurusName}! Let&apos;s go open that chest we found!</p>
            <p><b>{keyA}</b> and <b>{keyB}</b> used together to open the chest...</p>
            {(tryOpeningChest(keyA, keyB, doneosaurus) === "🟩🗝+⬜🗝🔓: Doneosaurus is deceased - struck by a sword") ? <span>Yay! You found: <MapFilterReduce /></span> : <span>The chest won&apos;t budge ☹</span>}
        </>
    }
}

export default SpreadRest;