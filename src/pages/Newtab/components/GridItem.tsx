import React from 'react'

type GridItemProps = {
  title: string
  children: React.ReactNode
}

export function GridItem({ title, children }: GridItemProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  )
}