const AddPersonInfo = ()=>{
    
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
                     <h1>Fill below form for New Entry</h1>
                        <table className="border tex-sm">                      
                                <thead className="text-xm">
                                    <td><input type="text" placeholder="Enter Name" name="" id="personName" /></td>
                                    <td><input type="date" name="" id="date" /></td>
                                    <td><input type="text" placeholder="Enter Aadhar Number" name="" id="aadharNo" /></td>
                                    <td><input type="text" placeholder="Enter Mobile Number" name="" id="mobileNo" /></td>
                                    <td><input type="text" placeholder="Enter Age" name="" id="age" /></td>
                                    <td><button>Save</button></td>
                                </thead>
                                <tr>
                                   <td>Ganesh</td>
                                    <td>12-09-200</td>
                                    <td>12569459656</td>
                                    <td>9172319748</td>
                                    <td>24</td>
                                    <td>Save</td>
                                </tr>
                        </table>
                    </section>
            </div>
        </>
    );
}

export default AddPersonInfo;