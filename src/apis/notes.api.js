async function fetchNotes(id) {
    const response = await fetch(`https://6541275ff0b8287df1fded95.mockapi.io/api/v1/user/${id}/notes/`);
    const data = await response.json();
    return data;
  }
  export { fetchNotes };