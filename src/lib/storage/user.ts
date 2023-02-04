export const getSchoolName = () => {
  return localStorage.getItem('school-name');
};

export const setSchoolName = (schoolName: string) => {
  localStorage.setItem('school-name', schoolName);
};

export const deleteSchoolName = () => {
  localStorage.removeItem('school-name');
};

export const getAuthority = () => {
  return localStorage.getItem('authority');
};

export const setAuthority = (authority: string) => {
  localStorage.setItem('authority', authority);
};

export const deleteAuthority = () => {
  localStorage.removeItem('authority');
};
