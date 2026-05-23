'use client'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

export default function GtmProvider() {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID
    if (gtmId) TagManager.initialize({ gtmId })
  }, [])
  return null
}
