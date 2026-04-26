import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Yuma Akhunza</title>
      </Head>

      {/* Menambahkan inline style justifyContent agar kartu berada di tengah layar */}
      <main className={styles.main} style={{ justifyContent: 'center' }}>
        <div style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#ffffff", // Latar kartu tetap putih
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          color: "#000000", // Memaksa warna teks menjadi hitam agar tidak "hilang"
          maxWidth: "400px",
          width: "100%",
          fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" // MENGUBAH JENIS FONT DI SINI
        }}>
          <h1 style={{ marginBottom: "20px", color: "#000000", fontWeight: "bold" }}>About Me</h1>

          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <p style={{ margin: "10px 0", color: "#000000" }}>
              <strong>Nama:</strong> Yuma Akhunza Kausar Putra
            </p>
            <p style={{ margin: "10px 0", color: "#000000" }}>
              <strong>NIM:</strong> 2341720259
            </p>
            <p style={{ margin: "10px 0", color: "#000000" }}>
              <strong>Program Studi:</strong> D4 Teknik Informatika
            </p>
          </div>

          <Link href="/" style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "12px 24px",
            backgroundColor: "#0070f3",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "inherit" // Memastikan tombol mengikuti font kartu
          }}>
            ← Kembali ke Home
          </Link>
        </div>
      </main>
    </>
  )
}