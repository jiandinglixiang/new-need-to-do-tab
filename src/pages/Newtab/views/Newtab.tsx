import React, { useMemo } from 'react'
import GridLayout from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import { useTranslation } from 'react-i18next'
import 'react-resizable/css/styles.css'
import { TestItems } from '../components/TestItems'

export default function Newtab() {
  const { t } = useTranslation()
  console.log('Newtab', t)
  const layoutConfig = useMemo(() => {
    const config = {
      cols: 24,
      width: window.innerWidth,
      rowHeight: 0,
      margin: [10, 10],
      containerPadding: [40, 20],
    }
    config.rowHeight = config.width - config.containerPadding[0] * 2
    config.rowHeight = config.rowHeight - (config.cols - 1) * config.margin[0]
    config.rowHeight = config.rowHeight / config.cols
    return config
  }, [])
  console.log(layoutConfig)
  function onLayoutChange(...layout: any) {
    console.log(1, layout)
  }

  return (
    <div>
      <GridLayout
        rowHeight={layoutConfig.rowHeight}
        width={layoutConfig.width}
        cols={layoutConfig.cols}
        isDraggable={true}
        isResizable={false}
        containerPadding={layoutConfig.containerPadding as [number, number]}
        margin={layoutConfig.margin as [number, number]}
        verticalCompact={false}
        style={{
          height: '100vh',
        }}
        layout={undefined}
        onLayoutChange={onLayoutChange}
      >
        {TestItems()}
      </GridLayout>
    </div>
  )
}
