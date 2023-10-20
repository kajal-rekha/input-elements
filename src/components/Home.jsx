import { useContext, useState } from "react";
import { DataProvider } from "../layout/Main";

const INIT_STATE = {
  name: "",
  email: "",
  country: "",
  bio: "",
  birthday: "",
  gender: "",
  agree: false,
  skills: [],
  group: "",
};

const Home = () => {
  const [inputs, setInputs] = useState(INIT_STATE);
  const { getData } = useContext(DataProvider);
  const { name, email, country, bio, birthday, gender, group, agree, skills } =
    inputs;

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleChackbox = (event) => {
    setInputs({ ...inputs, agree: event.target.checked });
  };

  const handleSkillChange = (event) => {
    if (event.target.checked) {
      setInputs({ ...inputs, skills: [...inputs.skills, event.target.value] });
    } else {
      const skills = inputs.skills.filter(
        (skill) => skill !== event.target.value
      );
      setInputs({ ...inputs, skills });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    getData(inputs);
    setInputs({ ...INIT_STATE });
  };
  return (
    <div className="mt-14 py-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-gray-200 py-10 px-14 w-[600px] mx-auto mt-10 rounded-md"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleChange}
            required
            className="bg-transparent border border-gray-600 w-full py-3 px-5 outline-none rounded-md focus:border-gray-800 "
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
            className="bg-transparent border border-gray-600 w-full py-3 px-5  outline-none rounded-md focus:border-gray-800 "
          />
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            placeholder="birthday"
            value={birthday}
            onChange={handleChange}
            className="bg-transparent border border-gray-600 w-full py-3 px-5  outline-none rounded-md focus:border-gray-800"
          />
        </div>

        <div>
          <select
            name="country"
            value={country}
            onChange={handleChange}
            className="bg-transparent border border-gray-600 w-full py-3 px-5  outline-none rounded-md focus:border-gray-800 "
          >
            <option value=""> Select your country</option>
            <option value="bangladesh"> Bangladesh</option>
            <option value="india"> India</option>
            <option value="pakistan"> Pakistan</option>
          </select>
        </div>

        <div>
          <textarea
            name="bio"
            value={bio}
            placeholder="tell me your bio"
            onChange={handleChange}
            className="bg-transparent border border-gray-600 w-full py-3 px-5  outline-none rounded-md focus:border-gray-800"
          ></textarea>
        </div>

        <div
          className="flex gap-3"
          value={gender}
          onChange={handleChange}
          required
        >
          <p className="font-medium">Select gender :</p>
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female
          <input type="radio" name="gender" value="other" />
          Other
        </div>

        <div
          className="flex gap-3"
          value={skills}
          onChange={handleSkillChange}
          required
        >
          <p className="font-medium">Skills:</p>
          <input type="checkbox" name="skills" value="java" />
          Java
          <input type="checkbox" name="skills" value="javascript" />
          Javascript
          <input type="checkbox" name="skills" value="python" />
          Python
          <input type="checkbox" name="skills" value="typescript" />
          Typescript
        </div>

        <div
          value={group}
          onChange={handleChange}
          required
          className="flex gap-3"
        >
          <label htmlFor="group" className="font-medium">
            Group:
          </label>
          <input type="radio" name="group" value="home" />
          Home
          <input type="radio" name="group" value="office" />
          Office
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={handleChackbox}
          />
          <p> I agree with the condition</p>
        </div>

        <button
          type="submit"
          className="font-medium bg-gray-900 text-gray-200 w-full py-3 px-5 text-lg rounded-md hover:bg-gray-950"
        >
          Show Details
        </button>
      </form>
    </div>
  );
};

export default Home;
