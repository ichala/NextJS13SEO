import React from 'react'

const loading = () => {
  return (
    <div>
    <div className="flex justify-center bg-base-200 items-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-primary/60" />
      </div>
    </div>
  </div>
  )
}

export default loading
