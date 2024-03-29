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

/**
 * Exports the getTaskDetails function which makes a GET request to fetch details tasks.
 * @param {Object} axios - Axios instance to make the HTTP request.
 * @param {Number} id - Task ID to display.
 * @returns {Promise<Array>} A promise that resolves with an Array of task
 */
export const getTaskDetails = async (axios, id) => {
  return await axios.$get(`/tasks/${id}`);
};

/**
 * Exports the createTask function, which makes a POST request to create a new task
 * @param {Object} axios - Axios instance to make the HTTP request.
 * @param {Object} task - Task to create
 * @returns {Promise<Array>} A promise that resolves with an Objet of task
 */
export const createTask = async (axios, task) => {
  return await axios.$post(
    `/tasks`,
    new URLSearchParams({
      ...task,
      token: "",
      is_completed: task.is_completed ? 1 : 0,
    })
  );
};

/**
 * Exports the updateTask function, which makes a UPDAYE request to update a new task
 * @param {Object} axios - Axios instance to make the HTTP request.
 * @param {Object} task - Task to update
 * @returns {Promise<Array>} A promise that resolves with an Objet of task
 */
export const updateTask = async (axios, task) => {
  return await axios.$put(
    `/tasks/${task.id}`,
    new URLSearchParams({
      ...task,
      is_completed: task.is_completed ? 1 : 0,
    })
  );
};

/**
 * Exports the deleteTask function which makes a DELETE request to delete a task.
 * @param {Object} axios - Axios instance to make the HTTP request.
 * @param {Number} id - Task ID to display.
 * @returns {Promise<Array>} A promise that resolves with an Boolean
 */
export const deleteTask = async (axios, id) => {
  return await axios.$delete(`/tasks/${id}`);
};
