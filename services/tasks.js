/**
 * ~ services/tasks.js
 * This file contains the functions to make HTTP requests to the server's API.
 */
//------------------------------------------------------------------------------

/**
 * Exports the getTasks function which makes a GET request to fetch all tasks.
 * @param {Object} axios - Axios instance to make the HTTP request.
 * @returns {Promise<Array>} A promise that resolves with an array of tasks
 */
export const getTasks = async (axios) => {
  return await axios.$get("/tasks");
};
