import { Table } from '@mui/material';
import React from 'react';
import BasicTable from './Table/BasicTable';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../config/firestore';
import { useEffect } from 'react';


const EmployeeManagement = () => {
    
    const getAllEmployees = async () =>{
        const querySnapshot = await getDocs(collection(db, "employees"));
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }
    useEffect(() => {
        getAllEmployees();
    },[])


    return(
        <div>
            <h1>Employee Management</h1>
            <BasicTable />
        </div>
        
    )
}
export default EmployeeManagement