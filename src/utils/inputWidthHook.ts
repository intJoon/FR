import { useEffect, useRef, useState, useCallback } from 'react'
import { calculateInputWidth } from './inputUtils'

export const useInputWidth = <T extends { blanks: Array<unknown> }>(
  currentItem: T,
  inputs: Record<number, string>,
  setInputs: React.Dispatch<React.SetStateAction<Record<number, string>>>
) => {
  const measureRef = useRef<HTMLSpanElement>(null)
  const [inputWidths, setInputWidths] = useState<Record<number, number>>({})

  const handleInputChange = useCallback((blankIndex: number, value: string) => {
    setInputs((prev) => ({ ...prev, [blankIndex]: value }))
    const width = calculateInputWidth(measureRef, value)
    setInputWidths((prev) => ({ ...prev, [blankIndex]: width }))
  }, [setInputs])

  useEffect(() => {
    currentItem.blanks.forEach((_, blankIndex) => {
      const value = inputs[blankIndex] || '___'
      const width = calculateInputWidth(measureRef, value)
      setInputWidths((prev) => ({ ...prev, [blankIndex]: width }))
    })
  }, [currentItem, inputs])

  return { measureRef, inputWidths, handleInputChange }
}

