import PropTypes from "prop-types";

const Button = ({setStatus , setUsers}) => {
    const getData = async () => {
        try {
          setStatus("pending");
          const response = await fetch("https://reqres.in/api/users/?page=1");
          if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
          }
          const { data } = await response.json();
          setUsers(data);
          setStatus("");
        } catch (error) {
          console.error("Error fetching data:", error);
          setStatus("error");
        }
      };
      
  return (
    <div>
       <button
            className="text-white px-2 py-1 rounded-lg bg-red-600"
            onClick={getData}
          >
            Get Users
          </button>
    </div>
  )
}

Button.propTypes = {
    setStatus: PropTypes.func.isRequired,
    setUsers: PropTypes.func.isRequired
  };

export default Button
