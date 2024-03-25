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
    const nameOfOurFoe = objectosaurus.name
    const thoughtsOfOurFoe = objectosaurus.internalOrgans.brain.thought
    const thingsInStomach = objectosaurus.internalOrgans.stomach.contents
    const thingsInIntestines = objectosaurus.internalOrgans.intestines.contents
    
    // 2. Count the amount of keys in our foe's, with using less characters 
    const thingsInDigestiveTract = thingsInStomach.concat(thingsInIntestines)
    const amountOfKeys = thingsInDigestiveTract.length

    // 3. Find the first and second keys in the foe's digestive tract
    const first = thingsInDigestiveTract[0]
    const second = thingsInDigestiveTract[1]
    const remainder = thingsInDigestiveTract.slice(2)

    
    // 4. Using object destructuring and restructuring, defeat the foe in a single line of code!
    const doneosaurus = objectosaurus
    
    // 5. Let's check if doneosaurus is alive in a novel way
    const doneosaurusIsAlive = doneosaurus.alive
    const doneosaurusName = doneosaurus.name

    // 5. then using array destructuring, let's retrieve the keys from doneosaurus's digestive tract
    const keyA = null
    const keyB = null
    
    const tryOpeningChest = (keyA, keyB, saurus) => `${keyA}+${keyB}🔓: ${saurus.name} is ${saurus.alive?"alive":`deceased - struck by a ${saurus.struck}`}`

    //console.log(tryOpeningChest(keyA, keyB, doneosaurus))

    // if you haven't yet read much on JSX syntax, the rest of the file
    // will seem like ✨magic✨, but this will make sense in a few sessions.
    // Don't modify the code below.
    if (doneosaurusIsAlive) {
        return <>
            <div>
                <p>There are still monsters lurking in the fields...</p>
                <p>We need to defeat <b>{nameOfOurFoe}</b>!</p>
                <p>This monster has eaten {amountOfKeys} keys already!</p>
                <p>We can read our foe's thoughts: &quot;<i>{thoughtsOfOurFoe}</i>&quot;</p>
                <p>Things in our foe's digestive tract:</p>
                <p>{first} - our foe just ate it. {second} - that was eaten right before.<br/> But before that, all of these were devoured: {remainder.join(", ")}</p>
            </div>
        </>
    } else {
        return <>
            <p>We defeated {doneosaurusName}! Let's go open that chest we found!</p>
            <p><b>{keyA}</b> and <b>{keyB}</b> used together to open the chest...</p>
            {(tryOpeningChest(keyA, keyB, doneosaurus) === "🟩🗝+⬜🗝🔓: Doneosaurus is deceased - struck by a sword") ? <span>Yay! You found: <MapFilterReduce /></span> : <span>The chest won't budge ☹</span>}
        </>
    }
}

export default SpreadRest;