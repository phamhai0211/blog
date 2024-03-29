import React from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import { useState, useEffect } from "react"
import './home.css'
import axios from "axios"
const Home = ({ type }) => {
    const { lists, setLists } = useState([])
    const { genre, setGenre } = useState(null)

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `list${type ? "?type=" + type : ""} ${genre ? "&genre=" + genre : ""}`,
                    {
                        header: {
                            token:
                                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        }
                    }
                )
                setLists(res.data)
            } catch (err) {

            }
        }
        getRandomLists()
    },[type,genre])
    return (
        <div className='home'>
            <Navbar />
            <Featured type={type} />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home
