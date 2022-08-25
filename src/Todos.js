import { getConfig } from '@testing-library/react'
import {useSelector, useDispatch} from 'react-redux'

function Todos(){

    const dispatch = useDispatch()

    const todos = useSelector (state => state)

    const handleDelete = (index) => {
        dispatch({
            type: 'delete',
            payload: index
        })
    }


    return (
        <>
        <ul className="list-group">
            {todos.map((item, index) => {
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                        <div>
                            <input type='checkbox' defaultChecked={item.done}/>
                        </div>
                        {item.text}
                        <div>
                            <button 
                            className='btn btn-outline-danger'
                            onClick={() => handleDelete(index)}
                            >
                                x
                            </button>
                        </div>
                    </li>
                )
            })}
        </ul>
        <div className='d-flex'>
            <form>
                <input type='text'/>
            </form>
            <button>
                tab
            </button>
        </div>
        </>
    )
}

export default Todos;