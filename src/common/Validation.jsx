import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const helpers = {
  Email: function (email) {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email.match(isValidEmail)) {
      return true;
    }
    return false;
  },
  Empty: function (str) {
    if (!str || str === undefined || (str && str === "")) {
      return true;
    }
    return false;
  },
  Compare2Array: function (obj1 = [], obj2 = []) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if number of keys are the same
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Sort keys to ensure order doesn't matter
    keys1.sort();
    keys2.sort();

    // Check if keys are the same
    if (!keys1.every((key, index) => key === keys2[index])) {
      return false;
    }

    // Check if values of corresponding keys are the same
    return keys1.every(
      (key) => JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])
    );
  },
};

export default helpers;
