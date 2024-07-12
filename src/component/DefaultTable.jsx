// import { useState } from "react";
import { Card, Typography } from "@material-tailwind/react"; 
const TABLE_HEAD = ["Name", "DOB", "Aadhar Number", "Mobile Number" , "Age" , "Action" ];
const TABLE_ROWS = [
  {
    name: "John Michael",
    dateOfBirth: "23/04/18",
    aadharNumber: "1111111111",
    mobileNumber:"91732660",
    age: "23"
  },
];
 
export default function DefaulTable() {

  // const [personName , setPersonName] = useState("");
  // const [ dateOfBirth , setDateOfBirth ] = useState("");
  // const [personAge , setPersonAge] = useState("");
  // const [personAadhar , setPersonAadhar] = useState("");
  // const [personMobile , setPersonMobile ] = useState("");
  

  return (
    <>   
    <Card className="h-full w-full overflow-scroll mt-10">
    <Card >
      <table className="w-full min-w-max table-auto text-left">
        <thead className="border border-black">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-blue-gray-100 bg-blue-400 py-1 px-4 text-[18px] text-center text-white">
                <Typography
                  variant="h3"
                   
                  className="font-semibold "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
       
        <tbody>
          {TABLE_ROWS.map(({ name, dateOfBirth, aadharNumber,mobileNumber,age }, index) => (
            <tr key={name} className="border-blue-gray-100  px-4 text-[18px] text-center">
              <td className="p-2 ">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {dateOfBirth}
                </Typography>
                
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {aadharNumber}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {mobileNumber}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {age}
                </Typography>
              </td>
              <td className="p-2">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Edit
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
        <span className="text-center font-md text-orange-500 font-semibold "> 
            Fill below form for New Entry
       </span>
    <Card>
    <form onSubmit={addPersonInfo}>
        <tr key={name} className="border-blue-gray-100 flex gap-8 text-center px-4 text-[15px] p-2 ">
        <td>
          <input type="text" id="personNameId" placeholder="Enter Name" className="border border-black" />
        </td>
        <td>
          <input type="date" id="dateId" />
        </td>
        <td>
          <input type="text" id="aadharId" placeholder="Enter Aadhar" />
        </td>
        <td>
          <input type="text" id="mobileNumberId" placeholder="Enter Mobile Number" />
        </td>
        <td>
          <input type="text" id="ageId" placeholder="Enter Age" />
        </td>
        <table>
          <button type="submit">Save</button>
        </table>
        </tr>
        </form>
  </Card>

    </Card>
    
 </> 
  
);
  
}