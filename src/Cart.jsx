import PropTypes from "prop-types";

const Cart = ({ users }) => {
  return (
    <div>
      <main className="mt-10">
        <div className="flex flex-wrap justify-center">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex bg-black w-80 h-40 mx-8 my-5 rounded-xl  shadow-2xl shadow-neutral-700"
            >
              <div className="flex justify-center items-center">
                <img
                  className="contain rounded-full w-16 h-16 mx-5 md:w-20 md:h-20 border-red-600 border-2"
                  src={user.avatar}
                ></img>
              </div>

              <div className="flex items-start justify-center flex-col jus">
                <div className="flex">
                  <p className="text-white text-sm font-bold md:text-lg">
                    {user.first_name}
                  </p>
                  <p className="text-white px-2 text-sm font-bold md:text-lg">
                    {user.last_name}
                  </p>
                </div>

                <div className="mt-1">
                  <p className="text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

Cart.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Cart;
