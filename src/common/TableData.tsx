import React from 'react';

type AppProps = {
    tab: [{
        id:any,
        firstName: any,
        lastName:any,
        userName: any,
        emailId: any,
        gender: any,
        mobileNo: any,
        fieldEdit:boolean
    }]
    editItem: (item:any) => void,
    deleteItem:(id:any) =>void
  };  
const TableData = (props: AppProps) => {


    const editItem = (item:any) => {       
       props.editItem(item)
     }
 
     const deleteItem = (id:any) => {
       props.deleteItem(id)
     }

    const tableView = () => {
        return props.tab && props.tab.map((item) => {           
             return <tr key = {item.id}>
                 <td>{Math.round(item.id)}</td>
                 <td>{item.userName}</td>
                 <td>{item.firstName}</td>
                 <td>{item.lastName}</td>
                 <td>{item.gender}</td>
                 <td>{item.emailId}</td>
                 <td>{item.mobileNo}</td>
                 <td>
                 <button type = 'button' className='btn btn-success' onClick= {()=>editItem(item)}>Edit</button> &nbsp; 
                 <button type='button' className='btn btn-danger' onClick= {()=>deleteItem(item.id)}>Delete</button>
                 </td>
                 </tr>
         })
     }   
    return (
        <>
         <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>UserName</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Gender</th>
                            <th>Email ID</th>
                            <th>Mobile No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableView()}
                    </tbody>
                </table>
        </>
    )
}


export default TableData