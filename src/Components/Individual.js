import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

const Individual = () => {
    const item = useSelector(data=> data.Two.user)
    const {id} = useParams()
    const [data , setData] = useState('')
    console.log(useParams())
    console.log(id)
    console.log(data)
    useEffect(() => {
        setData( item.find(e => e.id === id))
    },[])
   
    return (
        <div>
            
        </div>
    )
}

export default Individual
