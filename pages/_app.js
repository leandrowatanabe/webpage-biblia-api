import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div style={{
      alignItems:"center",
      justifyContent:"center",
      display:"flex",
      height:"100vh"
    }}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
