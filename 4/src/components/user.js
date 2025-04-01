import {memo} from 'react'

const user = ({name, onChange, onRemove, index}) => {
    console.log(name)
    return (
        <div className="user">
            <input value={name} onChange={(event) => onChange(event.target.value, index)} />
            <p>{name}</p>
            <button onClick={() => onRemove(index)}>Delete</button>
        </div>
    )
}

export default memo(user)