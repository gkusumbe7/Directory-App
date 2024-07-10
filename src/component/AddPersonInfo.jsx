import { useState,useEffect } from "react";



const AddPersonInfo = ()=>{


const [personName , setPersonName ] = useState(" ");
const [personDOB , setPersonDOB ] =  useState("");
const [personAadhar , setPersonAadhar ] =  useState("");
const [personMobile , setPersonMobile ] =  useState("");
const [personAge , setPersonAge ] =  useState("");



    const personInformation = [{
        name:"",
        dob:"",
        aadharNo:"",
        mobileNo:"",
        age:"age",
}
]

    const savePersonInformation =(e)=>{
        e.preventDefault(); 
        setPersonName(e.target.personName.value);
        setPersonDOB(e.target.dob.value);
        setPersonAadhar(e.target.aadharNumber.value);
        setPersonMobile(e.target.mobileNumber.value)
        setPersonAge(e.target.age.value);


        personInformation.push(
            ...personInformation,
            {
                name:personName,
                dob:personDOB,
                aadharNo:personAadhar,
                mobileNo:personMobile,
                age:personAge,
            }
        )
    }

    console.log(personInformation)
    return(
        <>
            <div className="">
            {/* Display Data On List */}
                    <h1>Add New Person</h1>
                    <section>
                        <table className="border tex-sm">
                                <thead className="text-xm">
                                    <td>Name</td>
                                    <td>Date Of Birth</td>
                                    <td>Aadhar Number</td>
                                    <td>Mobile Number</td>
                                    <td>Age</td>
                                    <td>Action</td>
                                </thead>
                                <tr>
                                   <td>Ganesh</td>
                                    <td>12-09-200</td>
                                    <td>12569459656</td>
                                    <td>9172319748</td>
                                    <td>24</td>
                                    <td>Delete</td>
                                </tr>
                        </table>
                    </section>
                    
                    {/* Enter Data */}

                    <section>
                    <form onSubmit={savePersonInformation}>
                    <h1>Fill below form for New Entry</h1>
                        <table className="border tex-sm">                      
                                <tr className="text-xm">
                                    <td><input type="text" placeholder="Enter Name" name="" id="personName" /></td>
                                    <td><input type="date" name="" id="dob" /></td>
                                    <td><input type="text" placeholder="Enter Aadhar Number" name="" id="aadharNumber" /></td>
                                    <td><input type="text" placeholder="Enter Mobile Number" name="" id="mobileNumber" /></td>
                                    <td><input type="text" placeholder="Enter Age" name="" id="age" /></td>
                                    <td><button type="submit">Save</button></td>
                                </tr>
                        </table>
                    </form>
                    </section>
            </div>
        </>
    );
}

export default AddPersonInfo;