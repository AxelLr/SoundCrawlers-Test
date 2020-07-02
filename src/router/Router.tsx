import React from 'react'
// PAGES
import PublishedTracks from 'src/pages/published-tracks/PublishedTracks'

const Router:React.FC = () => {
  
  return (
    <div className='global-container'>
      <div style={{ 
        width: '100%',
        minHeight: 70,
        height: '12.32vh',
        backgroundColor: '#757575',
      }}>  </div>
      <PublishedTracks />
      <div
      style={{
        width: '100%',
        height: '7.92vh',
        minHeight: 45,
        backgroundColor: '#757575'
      }}
      >

      </div>
    </div>
  )
}

export default Router
