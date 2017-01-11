export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user}
  })
);
export const signin = user => (
  $.ajax({
    method: 'POST',
    url: '/api/sessions',
    data: {user}
  })
);
export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/sessions',
  })
);
export const update = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: {user}
  })
);

window.signin = signin;
window.signup = signup;
