import React from 'react'

export function TestItems() {
  /* <div key="counter" data-grid={layout[0]}>
        <GridItem title="Counter Widget">
          <Counter />
        </GridItem>
      </div>

      <div key="navigation" data-grid={layout[1]}>
        <GridItem title="Navigation">
          <button>{t('settings')}</button>
        </GridItem>
      </div>

      <div key="info" data-grid={layout[2]}>
        <GridItem title="Draggable & Resizable Grid">
          <p>
            Try dragging these boxes around or resizing them from the
            bottom-right corner!1
          </p>
        </GridItem>
        <h1>{t('welcome')}123234</h1>
      </div> */

  return Array.from({ length: 6 })
    .map((_, index1) => {
      return Array.from({ length: 2 }).map((_, index2) => {
        return (
          <div
            key={`${index2}-${index1}`}
            data-grid={{ x: index1 * 4, y: index2 * 4, w: 1, h: 1 }}
            style={{
              boxSizing: 'border-box',
              backgroundColor: '#000000',
              borderRadius: '10px',
            }}
          >
            {`${index2}-${index1}`}
          </div>
        )
      })
    })
    .flat()
}
