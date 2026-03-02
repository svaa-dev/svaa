'use client'

import { useState } from 'react'
import { evaluate, round } from 'mathjs'
import {
  Plus,
  Minus,
  Divide,
  X,
  Percent,
  Equal,
  Trash,
  Delete,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type buttonValue =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '+'
  | '-'
  | '*'
  | '/'
  | '%'
  | '+/-'
  | '.'
  | 'AC'
  | 'CE'
  | '='

type button = {
  value: buttonValue
}

const buttons: button[] = [
  { value: 'AC' },
  { value: 'CE' },
  { value: '%' },
  { value: '/' },

  { value: '7' },
  { value: '8' },
  { value: '9' },
  { value: '*' },

  { value: '4' },
  { value: '5' },
  { value: '6' },
  { value: '-' },

  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '+' },

  { value: '+/-' },
  { value: '0' },
  { value: '.' },
  { value: '=' },
]

const part1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+/-']
const part2 = ['+', '-', '*', '/', '=']
const part3 = ['CE', 'AC', '%']

export default function Page() {
  const [operation, setOperation] = useState('0')
  const expressions = operation.split(/[+\-*/]/).filter(Boolean)
  const lastExpression = expressions[expressions.length - 1]

  let result = '...'
  try {
    result = String(round(evaluate(operation), 4))
  } catch {}

  function handleClick(value: buttonValue) {
    const lastChar = operation[operation.length - 1]
    console.log({ operation, lastChar, expressions, lastExpression })

    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9': {
        if (operation === '0') {
          setOperation(value)
          break
        }
        setOperation(p => p + value)
        break
      }

      case '+':
      case '-':
      case '*':
      case '/': {
        if (['+', '-', '*', '/', '.'].includes(lastChar)) {
          setOperation(p => p.slice(0, -1) + value)
          break
        }
        setOperation(p => p + value)
        break
      }

      case '%': {
        if (['+', '-', '*', '/', '.'].includes(lastChar)) break
        setOperation(
          p =>
            p.slice(0, lastExpression.length * -1) +
            Number(lastExpression) * 100,
        )
        break
      }

      case '.': {
        if (['+', '-', '*', '/', '.'].includes(lastChar)) {
          setOperation(p => p.slice(0, -1) + value)
          break
        }
        if (lastExpression.includes('.')) break
        setOperation(p => p + value)
        break
      }

      case 'AC': {
        setOperation('0')
        break
      }
      case 'CE': {
        if (operation.length === 1) {
          setOperation('0')
          break
        }
        setOperation(p => p.slice(0, -1))
        break
      }

      case '=': {
        try {
          setOperation(String(round(evaluate(operation), 4)))
        } catch {}
        break
      }
    }
  }

  return (
    <div className='mx-auto mt-16 max-w-70 space-y-4 rounded-xl border p-4 pt-18 sm:max-w-sm sm:pt-24'>
      <div className='min-w-full overflow-hidden text-right'>
        <div className='flex items-center justify-end text-xl opacity-50 sm:text-5xl'>
          {operation.split('').map((op, i) => {
            if (op === '+') return <Plus key={i} />
            if (op === '-') return <Minus key={i} />
            if (op === '*') return <X key={i} />
            if (op === '/') return <Divide key={i} />
            return <span key={i}>{op}</span>
          })}
        </div>
        <div className='text-5xl sm:text-8xl'>{result}</div>
      </div>
      <hr />
      <div className='grid grid-cols-4 gap-4'>
        {buttons.map((b: button, i) => {
          const base =
            'flex aspect-square cursor-pointer items-center justify-center rounded-full border transition-colors hover:bg-black/5 active:bg-black/10 text-xl sm:text-3xl'
          const icon = 'size-4.5 sm:size-6'
          switch (b.value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '+/-':
            case '.':
              return (
                <button
                  key={i}
                  className={cn(base)}
                  onClick={() => handleClick(b.value)}
                >
                  {b.value}
                </button>
              )
            case '+':
              return (
                <button
                  key={i}
                  className={cn(base)}
                  onClick={() => handleClick(b.value)}
                >
                  <Plus className={icon} />
                </button>
              )
            case '-':
              return (
                <button
                  key={i}
                  className={cn(base)}
                  onClick={() => handleClick(b.value)}
                >
                  <Minus className={icon} />
                </button>
              )
            case '*':
              return (
                <button
                  key={i}
                  className={cn(base)}
                  onClick={() => handleClick(b.value)}
                >
                  <X className={icon} />
                </button>
              )
            case '/':
              return (
                <button
                  key={i}
                  className={cn(base)}
                  onClick={() => handleClick(b.value)}
                >
                  <Divide className={icon} />
                </button>
              )
            case '%':
              return (
                <button
                  key={i}
                  className={cn(base)}
                  onClick={() => handleClick(b.value)}
                >
                  <Percent className={icon} />
                </button>
              )
            case 'AC':
              return (
                <button
                  key={i}
                  className={cn(base)}
                  onClick={() => handleClick(b.value)}
                >
                  <Trash className={icon} />
                </button>
              )
            case 'CE':
              return (
                <button
                  key={i}
                  className={cn(base)}
                  onClick={() => handleClick(b.value)}
                >
                  <Delete className={icon} />
                </button>
              )
            case '=':
              return (
                <button
                  key={i}
                  className={cn(base)}
                  onClick={() => handleClick(b.value)}
                >
                  <Equal className={icon} />
                </button>
              )
          }
        })}
      </div>
    </div>
  )
}
