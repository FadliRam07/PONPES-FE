export default function ContactForm() {
  return (
    <div style={{ padding: "20px", border: "2px solid red" }}>
      <h2>TES FORM KONTAK</h2>
      
      <div style={{ marginBottom: "10px" }}>
        <label>Nama Wali:</label>
        <br />
        <input type="text" style={{ border: "1px solid black", width: "100%" }} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Pesan:</label>
        <br />
        <textarea style={{ border: "1px solid black", width: "100%" }}></textarea>
      </div>

      {/* TOMBOL TES KLIK */}
      <button 
        type="button" 
        onClick={() => alert("TOMBOL BERHASIL DIKLIK!")}
        style={{ 
          backgroundColor: "blue", 
          color: "white", 
          padding: "10px 20px", 
          cursor: "pointer",
          border: "none"
        }}
      >
        TES KLIK SAYA
      </button>
    </div>
  );
}