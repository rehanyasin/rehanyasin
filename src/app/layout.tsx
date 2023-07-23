import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      
      <body>
        <div>
      <h1>layout.tsx file in App Dir</h1>
      {children}      
      </div>
      </body>

    </html>
  )
}

