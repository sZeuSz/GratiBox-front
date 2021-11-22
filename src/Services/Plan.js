const LOCAL_STORAGE_KEY = "planData";

export function storePlanData(user) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function getPlanData() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (data) {
    return JSON.parse(data);
  } else {
    return undefined;
  }
}

export function removePlanData() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}