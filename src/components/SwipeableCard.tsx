import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { motion, AnimatePresence } from 'framer-motion'

interface SwipeableCardProps {
  currentIndex: number
  totalCards: number
  onNext: () => void
  onPrevious: () => void
  canSwipe: boolean
  children: React.ReactNode
}

export const SwipeableCard: React.FC<SwipeableCardProps> = ({
  currentIndex,
  totalCards,
  onNext,
  onPrevious,
  canSwipe,
  children,
}) => {
  const [direction, setDirection] = useState<'left' | 'right' | null>(null)

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (canSwipe && currentIndex < totalCards - 1) {
        setDirection('left')
        setTimeout(() => {
          onNext()
          setDirection(null)
        }, 300)
      }
    },
    onSwipedRight: () => {
      if (canSwipe && currentIndex > 0) {
        setDirection('right')
        setTimeout(() => {
          onPrevious()
          setDirection(null)
        }, 300)
      }
    },
    trackMouse: true,
  })

  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'left' ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'left' ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <div {...handlers} style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
          style={{ width: '100%', height: '100%' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

