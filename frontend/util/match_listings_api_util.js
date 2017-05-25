export function fetchMatchListings(match) {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: {match}
  });
}
