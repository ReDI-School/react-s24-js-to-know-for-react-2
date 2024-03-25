/* eslint-disable react/prop-types */
function ListFruits({description, fruits}) {
    return <p>
        {description}:
        <ul>
            {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
        </ul>
    </p>
}

export default ListFruits