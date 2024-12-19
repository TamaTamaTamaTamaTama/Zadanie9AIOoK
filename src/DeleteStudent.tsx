import { useState, useEffect } from 'react';
import { StudentClass} from './types/Student';

type StudentPropsType={
    student:StudentClass;
    canceldeletion: () => void;
    deletestudent: (id: number) => void;
  }


export default function DeleteStudent({student, canceldeletion, deletestudent}: StudentPropsType): React.ReactElement  {
    return (
    <><p>Are you sure you want to delete {student.Name} {student.Surname}
    </p>
    <button onClick={()=>deletestudent(student.Index_nr)}>Yes</button>
    <button onClick={()=> canceldeletion()}>No</button>
    
    </>
    );
}