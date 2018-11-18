import axios from 'axios';

export const hasStorage = () => {
  return !!localStorage.getItem("jwtToken");
};

export const setStorage = (token) => {
    localStorage.setItem('jwtToken', token);
};

export const removeStorage = () => {
    localStorage.removeItem('jwtToken');
};

export function setHeaderAuthorization() {
	const token = localStorage.getItem("jwtToken");
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

export function removeHeaderAuthorization() {
  delete axios.defaults.headers.common['Authorization'];
}