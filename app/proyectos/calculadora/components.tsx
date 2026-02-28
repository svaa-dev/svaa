'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import {
  Trash,
  Delete,
  Percent,
  Divide,
  X,
  Minus,
  Plus,
  Equal,
} from 'lucide-react'

const buttons = [
  { value: 'Delete all', content: <Trash /> },
  { value: 'Delete', content: <Delete /> },
  { value: '%', content: <Percent /> },
  { value: '/', content: <Divide /> },

  { value: '7', content: '7' },
  { value: '8', content: '8' },
  { value: '9', content: '9' },
  { value: '*', content: <X /> },

  { value: '4', content: '4' },
  { value: '5', content: '5' },
  { value: '6', content: '6' },
  { value: '-', content: <Minus /> },

  { value: '1', content: '1' },
  { value: '2', content: '2' },
  { value: '3', content: '3' },
  { value: '+', content: <Plus /> },

  { value: '0', content: '0' },
  { value: '.', content: '.' },
  { value: '=', content: <Equal /> },
]
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ['+', '-', '*', '/']

const styleBase =
  'flex justify-center items-center aspect-square cursor-pointer text-2xl transition-all shadow-[0px_0px_1px_1px_#0008] hover:shadow-[0px_0px_4px_1px_#0008]'

export function Calculator() {
  const [operation, setOperation] = useState('0')
  const [result, setResult] = useState(operation)

  function handleClick(value: string) {
    const expressions = operation.split(/[+\-*/]/).filter(Boolean)
    const lastExpression = expressions[expressions.length - 1]
    const lastCharacter = operation.slice(-1)
    const noLastExpression = operation.slice(0, lastExpression.length * -1)
    console.log({
      operation,
      expressions,
      lastExpression,
      lastCharacter,
      noLastExpression,
    })

    switch (true) {
      case numbers.includes(value): {
        if (operation === '0') {
          setOperation(value)
          break
        }
        setOperation(p => p + value)
        break
      }
      case operators.includes(value): {
        if ([...operators, '.'].includes(lastCharacter)) {
          setOperation(operation.slice(0, -1) + value)
          break
        }
        setOperation(p => p + value)
        break
      }
      case 'Delete all' === value: {
        setOperation('0')
        break
      }
      case 'Delete' === value: {
        if (operation.length === 1) {
          setOperation('0')
          break
        }
        setOperation(p => p.slice(0, -1))
        break
      }
      case '.' === value: {
        if (operators.includes(lastCharacter)) {
          setOperation(operation.slice(0, -1) + value)
          break
        }
        if (!lastExpression.includes('.')) {
          console.log('n')
          setOperation(noLastExpression + lastExpression + '.')
          break
        }
        console.log('s')
        break
      }
      case '%' === value: {
        if (operators.includes(lastCharacter)) break
        const value = Number(lastExpression) * 100
        console.log(noLastExpression + value)
        setOperation(noLastExpression + value)
        break
      }
      case '=' === value: {
        console.log('result')
        setOperation(result)
      }
    }
  }

  useEffect(() => {
    try {
      const result = eval(operation)
      setResult(String(result))
    } catch {}
  }, [operation])

  return (
    <div className='mx-auto mt-18 flex w-sm flex-col space-y-8 rounded-4xl border bg-[#f8f8ef] p-2 text-black dark:bg-[#252525] dark:text-white'>
      <div className='mr-4 space-y-2 overflow-hidden pt-12 text-right whitespace-nowrap'>
        <div className='text-4xl font-light'>
          {operation.replaceAll('*', 'x')}
        </div>
        <div className='text-7xl font-light'> = {result}</div>
      </div>
      <div className='grid grid-cols-4 gap-2 pb-5'>
        {buttons.map((b, i) => {
          switch (b.value) {
            case 'Delete all': {
              return (
                <button
                  className={cn(styleBase, 'text-red-800 dark:text-red-400')}
                  onClick={() => handleClick('Delete all')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case 'Delete': {
              return (
                <button
                  className={cn(
                    styleBase,
                    'text-yellow-500 dark:text-yellow-400',
                  )}
                  onClick={() => handleClick('Delete')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '%': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('%')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '/': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('/')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }

            case '7': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('7')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '8': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('8')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '9': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('9')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '*': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('*')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }

            case '4': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('4')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '5': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('5')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '6': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('6')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '-': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('-')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }

            case '1': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('1')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '2': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('2')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '3': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('3')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '+': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('+')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }

            case '0': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('0')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '.': {
              return (
                <button
                  className={cn(styleBase)}
                  onClick={() => handleClick('.')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
            case '=': {
              return (
                <button
                  className={cn(
                    styleBase,
                    'col-span-2 aspect-auto bg-[#ffffff] dark:bg-[#2e2e2e]',
                  )}
                  onClick={() => handleClick('=')}
                  key={i}
                >
                  {b.content}
                </button>
              )
            }
          }
        })}
      </div>
    </div>
  )
}
