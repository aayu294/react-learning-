import { useState } from 'react'

function App() {
  // 1. Ek state banayi jo user ka text save karegi (shuru me khali '' hai)
  const [naam, setNaam] = useState('')

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Bhai, React me Input handle karein! ✍️</h1>
      
      {/* 2. Ek Input Box banaya */}
      <input 
        type="text" 
        placeholder="Apna naam likho..." 
        value={naam}
        onChange={(e) => setNaam(e.target.value)} // Jo bhi type hoga, state me chala jayega
        style={{ padding: '10px', fontSize: '16px', width: '250px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      {/* 3. Agar input box khali nahi hai, toh neeche live naam dikhega */}
      {naam && (
        <h2 style={{ color: 'orange', marginTop: '20px' }}>
          Welcome Bhai, {naam}! 🔥
        </h2>
      )}
    </div>
  )
}

export default App