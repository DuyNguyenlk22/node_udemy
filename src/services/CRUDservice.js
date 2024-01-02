const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, fields] = await connection.query("select * from Users");
  return results;
};

const getUserById = async (id) => {
  const [results, fields] = await connection.query("select * from Users where id = ?", [id]);

  if (results && results.length > 0) {
    return results[0];
  } else {
    return {};
  }
};

const updateUserById = async (name, email, city, id) => {
  const [results, fields] = await connection.query(
    `UPDATE Users
    SET name = ?, email = ?, city = ?
    WHERE id = ? `,
    [name, email, city, id],
  );
};
const deleteUserById = async (id) => {
  const [results, fields] = await connection.query(`DELETE FROM Users WHERE id= ?;`, [id]);
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
