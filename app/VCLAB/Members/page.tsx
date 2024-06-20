import React from 'react';
import NavBar from '@/app/components/NavBar/NavBar';
import Footer from '@/app/components/Footer/Footer';
import LabStudents from '@/app/components/LabMembers/LabStudents/LabStudents';
import LabFaculty from '@/app/components/LabMembers/LabFaculty/LabFaculty';

export default function Members(){
    return(
        <>
        <NavBar/>
        <LabFaculty/>
        <LabStudents title=''/>
        <Footer/>
        </>
    )
}