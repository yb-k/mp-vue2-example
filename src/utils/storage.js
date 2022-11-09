export function storage(key, value) {
  if (value !== undefined) {
    return localStorage.setItem(key, value);
  } else {
    return localStorage.getItem(key);
  }
}

export function session(key, value) {
  if (value !== undefined) {
    return sessionStorage.setItem(key, value);
  } else {
    return sessionStorage.getItem(key);
  }
}
