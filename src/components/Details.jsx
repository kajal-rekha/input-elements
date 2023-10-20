import { useContext, useState } from "react";
import { DataProvider } from "../layout/Main";

const Details = () => {
  const { formData } = useContext(DataProvider);
  const [filter, setFilter] = useState("all");

  const handleFiltered = (e) => {
    setFilter(e.target.value);
  };

  let filteredContent = [];
  if (filter === "all") {
    filteredContent = formData;
  } else {
    filteredContent = formData.filter((data) => data.group === filter);
  }

  return (
    <div className="min-h-screen mt-10 wrapper">
      <div className="text-right p-6">
        <select
          value={filter}
          onChange={handleFiltered}
          name="filter"
          className=" text-lg text-gray-200 bg-gray-900"
        >
          <option value="">None</option>
          <option value="all">All</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
        </select>
      </div>
      <table className="min-w-full  text-gray-200 border border-gray-300 mt-10">
        <thead className="">
          <tr className="bg-transparent ">
            <th className="border-b p-2 text-left">Name</th>
            <th className="border-b p-2 text-left">Email</th>
            <th className="border-b p-2 text-left">Country</th>
            <th className="border-b p-2 text-left">Bio</th>
            <th className="border-b p-2 text-left">Birthday</th>
            <th className="border-b p-2 text-left">Gender</th>
            <th className="border-b p-2 text-left">Skills</th>
            <th className="border-b p-2 text-left">Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredContent.map((user, i) => (
            <tr key={i} className="bg-transparent">
              <td className="border-b  p-2 text-left">{user.name}</td>
              <td className="border-b p-2 text-left">{user.email}</td>
              <td className="border-b p-2 text-left">{user.country}</td>
              <td className="border-b p-2 text-left">{user.bio}</td>
              <td className="border-b p-2 text-left">{user.birthday}</td>
              <td className="border-b p-2 text-left">{user.gender}</td>
              <td className="border-b p-2 text-left">
                {user.skills.map((skill, i) => (
                  <span key={i} className="mr-2 p-1 rounded">
                    {skill}
                  </span>
                ))}
              </td>
              <td className="border-b p-2 text-left">{user.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Details;
