/**
 * ~ plugins/axios.js
 * This file contains plugins used in the Nuxt.js application.
 * Here, different plugins used in the application are registered and exported.
 */
//------------------------------------------------------------------------------

/**
 * Plugin to handle JWT (Bearer) authentication token.
 * This plugin automatically attaches the JWT token to outgoing HTTP requests
 */
export default function ({ $axios }) {
  //Alter a request before it is transmitted or to modify a response before it is delivered to callbacks.
  $axios.onRequest((config) => {
    $axios.setToken(process.env.BEARER_TOKEN, "Bearer");
    // Adds header: `Content-Type: application/x-www-form-urlencoded` to only post & put requests
    if (config.method == "post" || config.method == "put") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
  });
}
