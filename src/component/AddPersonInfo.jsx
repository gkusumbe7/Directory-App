import { useState } from "react";

const AddPersonInfo = () => {
  const [personName, setPersonName] = useState("");
  const [personDOB, setPersonDOB] = useState("");
  const [personAadhar, setPersonAadhar] = useState("");
  const [personMobile, setPersonMobile] = useState("");
  const [personAge, setPersonAge] = useState("");
  const [personInformation, setPersonInformation] = useState([]);

  const savePersonInformation = (e) => {
    e.preventDefault();
    const newPerson = {
      name: personName,
      dob: personDOB,
      aadharNo: personAadhar,
      mobileNo: personMobile,
      age: personAge,
      delete: "Delete",
    };

    setPersonInformation([...personInformation, newPerson]);

    // Clear the form fields
    setPersonName("");
    setPersonDOB("");
    setPersonAadhar("");
    setPersonMobile("");
    setPersonAge("");
  };

  return (
    <>
      <div>
        <h1>Add New Person</h1>
        <section>
          <table className="border border-black tex-sm">
            <thead className="border border-black">
              <tr className="flex gap-24 text-md">
                <th className="w-20 ">Name</th>
                <th className="w-22">DOB</th>
                <th className="w-30">Aadhar Number</th>
                <th className="w-30">Mobile Number</th>
                <th className="w-14">Age</th>
                <th className="w-14">Action</th>
              </tr>
            </thead>
            <tbody>
              {personInformation.map((personData, index) => (
                <tr key={index} className="flex gap-18 border border-black">
                  <td className="w-20 border">{personData.name}</td>
                  <td className="w-22 border">{personData.dob}</td>
                  <td className="w-20 border">{personData.aadharNo}</td>
                  <td className="w-20 border">{personData.mobileNo}</td>
                  <td className="w-20 border">{personData.age}</td>
                  <td className="w-20 border">{personData.delete}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <form onSubmit={savePersonInformation}>
            <h1>Fill below form for New Entry</h1>
            <table className="border tex-sm">
              <tr className="text-xm">
                <td>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    id="personName"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    id="dob"
                    value={personDOB}
                    onChange={(e) => setPersonDOB(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Aadhar Number"
                    id="aadharNumber"
                    value={personAadhar}
                    onChange={(e) => setPersonAadhar(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    id="mobileNumber"
                    value={personMobile}
                    onChange={(e) => setPersonMobile(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Age"
                    id="age"
                    value={personAge}
                    onChange={(e) => setPersonAge(e.target.value)}
                  />
                </td>
                <td>
                  <button type="submit">Save</button>
                </td>
              </tr>
            </table>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddPersonInfo;
