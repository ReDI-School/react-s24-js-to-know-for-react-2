/* eslint-disable react/prop-types */
function BonusFuncs() {

    const dogs = [
        {
          id: "dog-1",
          name: "Poodle",
          temperament: [
            "Intelligent",
            "Active",
            "Alert",
            "Faithful",
            "Trainable",
            "Instinctual"
          ]
        },
        {
          id: "dog-2",
          name: "Bernese Mountain Dog",
          temperament: ["Affectionate", "Intelligent", "Loyal", "Faithful"]
        },
        {
          id: "dog-3",
          name: "Labrador Retriever",
          temperament: [
            "Intelligent",
            "Even Tempered",
            "Kind",
            "Agile",
            "Outgoing",
            "Trusting",
            "Gentle"
          ]
        }
      ];
      
    return <>
        {/* find the one with name: Bernese Mountain Dog */}
        <ShowDog
            description={"The Bernese Mountain Dog:"}
            dog={dogs.find((dog) => dog.name === "Bernese Mountain Dog")} />
        <YesNoDog
            description={"Are there any Trusting dogs?"}
            test={dogs.some((dog) => dog.temperament.includes("Trusting"))} />
        <YesNoDog
            description={"Are there any Aggressive dogs?"}
            test={dogs.some((dog) => dog.temperament.includes("Aggressive"))} />
        <YesNoDog
            description={"Is every dog Trusting?"}
            test={dogs.every((dog) => dog.temperament.includes("Trusting"))} />
        <YesNoDog
            description={"Is every dog Intelligent?"}
            test={dogs.every((dog) => dog.temperament.includes("Intelligent"))} />
        <ListDogs
            description={"All temperaments"}
            dogs={dogs.flatMap(dog => dog.temperament)} />
        <ListDogs
            description={"All temperaments (no repeats)"}
            dogs={Array.from(new Set(dogs.flatMap(dog => dog.temperament)))} />
        <ShowDog
            description={"Index of the kind dog"}
            dog={dogs.findIndex(dog => dog.temperament.includes("Kind"))} />
    </>
}

function ListDogs({description, dogs}) {
    return <p>
        {description}<br/>
        <textarea value={JSON.stringify(dogs, null, 4)} />
    </p>
}

function ShowDog({description, dog}) {
    return <p>
        {description} <br/>
        <textarea value={JSON.stringify(dog, null, 4)} />
    </p>
}

function YesNoDog({description, test}) {
    return <p>{description} {test?"Yes":"No"}</p>
}

export default BonusFuncs

