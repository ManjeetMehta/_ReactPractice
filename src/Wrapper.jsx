function Wrapper({ children }) {
  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      {children}
    </div>
  )
}

export default Wrapper