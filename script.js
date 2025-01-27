function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString('id-ID', options);

  document.getElementById('datetime').textContent = `${date} - ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();