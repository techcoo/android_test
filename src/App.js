import logo from './logo.svg';
import './App.css';

function App() {

  const redirect = () => {
    window.location.href = "https://pay.google.com/gp/v/save/eyJ0eXAiOiAiSldUIiwgImFsZyI6ICJSUzI1NiIsICJraWQiOiAiZWIxYzg4ZjRjMzI1YzMwYWMyNmFhNmRiY2M1MzIyMWQ3NDRlYWQzNyJ9.eyJpc3MiOiAid2FsbGV0LXBhc3MtY2xpZW50QGJlYWNvbnN0YWMtMTA0My5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsICJhdWQiOiAiZ29vZ2xlIiwgIm9yaWdpbnMiOiBbImh0dHA6Ly8wLjAuMC4wOjgwMDAvIiwgImh0dHBzOi8vYmFjLXFhLmZpcmViYXNlYXBwLmNvbS8iLCAiaHR0cHM6Ly9iZWFjb25zdGFjcWEubW9ic3RhYy5jb20iLCAiaHR0cHM6Ly9kYXNoYm9hcmQuYmVhY29uc3RhYy5jb20vIiwgImh0dHBzOi8vYXBwc2VydmVyLmJlYWNvbnN0YWMuY29tIl0sICJ0eXAiOiAic2F2ZXRvd2FsbGV0IiwgInBheWxvYWQiOiB7ImdlbmVyaWNPYmplY3RzIjogW3siaWQiOiAiMzM4ODAwMDAwMDAyMjEyODM4MS51bm5pa3Jpc2huYW5hdGhpcmFfYXJ5YW0uY29tLWdlbmVyaWMtcGFzcy1kZWZhdWx0LWZvdXItZGF0YV8xNzA4MDc1MTk1LjgwOTgyMjgifV19fQ.gZDoINTrAD66wmc0QE-HWofgVPnrw8nl4clusi3YJq2zZ6-pG6-CorowhvBla8enkTx7b5wjNZ8bD-uTZvd22_83_JUfi5ueeYxuQn2GS2S0S79eXW-SZMxHUOVWyQF9zNRX7jUswJ9sdM902oMBk1QhOnjia7eIuyrQ3wkN9u6VHAlGs9pdNXpbccWVhAZDKz97XA3RSsBwrI0qBL-CnnC72FxO-sBpSQ9hoFpgeFkiSRlXyaDpcbijKS0XiDYNJ8kliBFAJgt2mnvb9LOwAt9jc-Q7GVXzhNrc8B7bihl5IU_fQyv5xP8_IcbNhyyklkFvuTbcrdyrR6gaJeXjYA";
  }

  const handleContextMenu = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={redirect} style={{ cursor: 'pointer' }} onContextMenu={handleContextMenu}>Click Here 1</button>
        <button onClick={redirect} style={{ cursor: 'pointer' }}>Click Here2</button>
      </header>
    </div >
  );
}

export default App;
