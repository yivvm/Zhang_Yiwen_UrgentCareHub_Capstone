import React, { useEffect, useState } from "react"
import axios from 'axios'

import "./departments.css"
import { departmentMappings } from "../../data/departments"

const baseURL = 'https://pokeapi.co/api/v2/'

export default function Departments() {
    const [departments, setDepartments] = useState(["water"])

    const getDepartmentName = (typeName) => {
        return departmentMappings[typeName] || "Primary Care";
    }

  //#region DATA FETCHING -------

    // Button for fetching data
    useEffect(() => {
        async function fetchData(){
        axios.get(`${baseURL}type`).then((res) => {
            // console.log(res.data.results)
            setDepartments(res.data.results)
        })
        }
        fetchData();
    }, [])  
    //   console.log(departments)

  //#endregion

 //#region JSX RETURN -------
  return (
    <div className="departments-container page">
      

      {departments.map((item, index) => {
          return <button className="department-btn" key={index}>{getDepartmentName(item.name)}</button>
        })}


    </div>
  )
  //#endregion
  
}

