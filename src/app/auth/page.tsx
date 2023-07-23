import React from 'react';

import Link from 'next/link'
import useIsAuthed from './hooks/useIsAuthed'
 
export default function Page() {
  const isAuthed = useIsAuthed()
  const path = isAuthed ? '/auth/dashboard' : '/dashboard'
  return (
    <Link as="/dashboard" href={path}>
      Dashboard
    </Link>
  )
}
