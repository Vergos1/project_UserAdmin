import React, { useEffect, useState } from 'react'

export interface IUseLocalStorageProps<T> {
  key: string
  initialValue: T
}

function useLocalStorage<T>({
  key,
  initialValue
}: IUseLocalStorageProps<T>): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = window.localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialValue //? Parsing the value if it exists
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value)) //? Save the value to localStorage
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
