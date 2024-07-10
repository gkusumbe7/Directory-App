import { useState, useEffect } from "react";

const AddPersonInfo = () => {
  const [personName, setPersonName] = useState(" ");
  const [personDOB, setPersonDOB] = useState("");
  const [personAadhar, setPersonAadhar] = useState("");
  const [personMobile, setPersonMobile] = useState("");
  const [personAge, setPersonAge] = useState("");
  const [msg , setMsg ]= useState("");
  const [personInformation, setPersonInformation] = useState([
    {
      name: "",
      dob: "",
      aadharNo: "",
      mobileNo: "",
      age: "",
      delete:"Delete"
    },
  ]);

  const savePersonInformation = (e) => {
    e.preventDefault();
    setPersonName(e.target.personName.value);
    setPersonDOB(e.target.dob.value);
    setPersonAadhar(e.target.aadharNumber.value);
    setPersonMobile(e.target.mobileNumber.value);
    setPersonAge(e.target.age.value);

    const newPersonInformation = {
      name: personName,
      dob: personDOB,
      aadharNo: personAadhar,
      mobileNo: personMobile,
      age: personAge,
      delete:"Delete",
    };
    setPersonInformation([...personInformation, newPersonInformation]);
  };


  return (
    <>
      <div className="">
        {/* Display Data On List */}
        <h1>Add New Person</h1>
        <section>
          <table className="border tex-sm">
            <thead className="">
              <tr className="flex gap-20 border text-md">
                <th className="w-14">Name</th>
                <th className="w-22">DOB</th>
                <th className="w-20">Aadhar Number</th>
                <th className="w-20">Mobile Number</th>
                <th className="w-14">Age</th>
                <th className="w-14">Action</th>
              </tr>
            </thead>
            <tbody>

              { personInformation.map((personData, index) => (
                <tr key={index} className="flex gap-18 border border-black">
                  <td className="w-20 border">{personData.name}</td>
                  <td className="w-22 border">{personData.dob}</td>
                  <td className="w-20 border">{personData.aadharNo}</td>
                  <td className="w-20 border">{personData.mobileNo}</td>
                  <td className="w-20 border">{personData.age}</td>
                  <td className="w-20 border">{personData.delete}</td>
                </tr>
              ))}
              <span>{msg}</span>
            </tbody>
          </table>
        </section>

        {/* Enter Data */}

        <section>
          <form onSubmit={savePersonInformation}>
            <h1>Fill below form for New Entry</h1>
            <table className="border tex-sm">
              <tr className="text-xm">
                <td>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name=""
                    id="personName"
                  />
                </td>
                <td>
                  <input type="date" name="" id="dob" />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Aadhar Number"
                    name=""
                    id="aadharNumber"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    name=""
                    id="mobileNumber"
                  />
                </td>
                <td>
                  <input type="text" placeholder="Enter Age" name="" id="age" />
                </td>
                <td>
                  <button type="submit">Save</button>
                </td>
              </tr>
            </table>
          </form>
        </section>
      </div>

      {/* <div>
        {personInformation.map((personData, index) => (
            <div key={index}>
            <p>{personData.name}</p>
            <p>{personData.dob}</p>
            <p>{personData.aadharNo}</p>
            <p>{personData.mobileNo}</p>
            <p>{personData.age}</p>
            <p>Delete</p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default AddPersonInfo;
