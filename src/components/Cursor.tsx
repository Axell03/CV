'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let hovering = false

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    const onEnter = () => { hovering = true }
    const onLeave = () => { hovering = false }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    let raf: number
    const loop = () => {
      if (dotRef.current) {
        dotRef.current.style.left  = mx + 'px'
        dotRef.current.style.top   = my + 'px'
        dotRef.current.style.width  = hovering ? '14px' : '9px'
        dotRef.current.style.height = hovering ? '14px' : '9px'
        dotRef.current.style.background = hovering ? '#1db87a' : '#7b6ef6'
      }
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left   = rx + 'px'
        ringRef.current.style.top    = ry + 'px'
        ringRef.current.style.width  = hovering ? '52px' : '38px'
        ringRef.current.style.height = hovering ? '52px' : '38px'
        ringRef.current.style.borderColor = hovering
          ? 'rgba(29,184,122,0.28)'
          : 'rgba(123,110,246,0.32)'
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="fixed z-[9999] rounded-full pointer-events-none mix-blend-screen transition-[width,height,background] duration-200" style={{ transform: 'translate(-50%,-50%)', width: 9, height: 9, background: '#7b6ef6' }} />
      <div ref={ringRef} className="fixed z-[9998] rounded-full pointer-events-none border transition-[width,height,border-color] duration-200" style={{ transform: 'translate(-50%,-50%)', width: 38, height: 38, borderColor: 'rgba(123,110,246,0.32)' }} />
    </>
  )
}
