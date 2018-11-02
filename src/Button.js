import React from "react"

export default ({ loading, handleClick }) => (
  <button
    disabled={loading}
    onClick={handleClick}
    style={{
      border: "none",
      padding: 10,
      borderRadius: 5,
      backgroundColor: `${loading ? "palevioletred" : "mediumseagreen"}`,
      color: "white"
    }}
  >
    {loading ? "LOADING..." : "FETCH MORE!"}
  </button>
)
