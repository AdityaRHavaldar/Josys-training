import React, { useState } from 'react';

interface Dept
{
    deptno : number;
    dname :string;
    loc : string;
}

 const DeptsList:React.FC = ()  =>
 {

    const [deptsArray, setDeptsArray] = useState<Dept[]>([]);

    function getData()
    {
        let data:Dept[]  =   [
            { deptno:10,   dname: "Accounts", loc : "Hyd" } ,
            { deptno:20,   dname: "Sales", loc : "Pune" } ,
            { deptno:30,   dname: "Admin", loc : "Hyd" } ,
            { deptno:40,   dname: "Marketing", loc : "Mumbai" }
           ] ;    

        setDeptsArray(data);
    }
                            
         
       
	 
        var result = deptsArray.map( (item,index) => 
            <tr key={index}>  
               <td> {item.deptno}  </td> 
               <td> {item.dname}  </td> 
               <td> {item.loc}  </td>  
            </tr>);

         

      return (
        <div>   
            <h3>All Deptartments</h3>
            <br/>

            <input type="button"  id="b2" onClick={getData}  value="Get Depts"  />
            <br/><br/>

           
            <table   border={2}  cellPadding="5"  cellSpacing="0" width="500">
                <thead>
                        <tr>
                                <th>deptno</th>
                                <th>dname</th>
                                <th>location</th>
                        </tr>
                </thead>
                
                <tbody>
                    {result}
                </tbody>
                
            </table>
            <br/>  
            

        </div>  );
};


export default DeptsList;
 

 
