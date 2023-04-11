// import { useState } from 'react'
import { evaluate } from 'mathjs'
import { useEffect, useState } from 'react'
import Button from './button'

const Calculator = () => {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [render, setRender] = useState('')

  useEffect(() => {
    text && setRender(text)
  }, [text])

  const addToText = (value) => {
    setText(`${text}${value}`)
  }

  const resetInputs = () => {
    setResult('')
    setText('')
    setRender('')
  }

  const calculateResult = () => {
    try {
      const result = (evaluate(text))
      if (result % 1 === 0) {
        setResult(result)
        setText(result)
      } else {
        setResult(result.toFixed(2))
        setText(result)
      }
      setRender(result)
    } catch (err) {
      setResult('Syntax Error')
      setText(result)
    }
  }

  return (
    <div className='calculator'>
      <div className='result__container'>
        <p className='result__op' name='result' id='result'>{render}
        </p>
      </div>

      <div>
        <input type='button' className='clear' value='clear' onClick={resetInputs} />
      </div>

      <div className='inputs__container'>
        <Button styles='number' type='button' value='7' handleClick={addToText} />
        <Button styles='number' type='button' value='8' handleClick={addToText} />
        <Button styles='number' type='button' value='9' handleClick={addToText} />
        <Button styles='operator' type='button' value='/' handleClick={addToText} />
      </div>

      <div className='inputs__container'>
        <Button styles='number' type='button' value='4' handleClick={addToText} />
        <Button styles='number' type='button' value='5' handleClick={addToText} />
        <Button styles='number' type='button' value='6' handleClick={addToText} />
        <Button styles='operator' type='button' value='*' handleClick={addToText} />
      </div>

      <div className='inputs__container'>
        <Button styles='number' type='button' value='1' handleClick={addToText} />
        <Button styles='number' type='button' value='2' handleClick={addToText} />
        <Button styles='number' type='button' value='3' handleClick={addToText} />
        <Button styles='operator' type='button' value='-' handleClick={addToText} />
      </div>

      <div className='inputs__container'>
        <Button styles='number' type='button' value='0' handleClick={addToText} />
        <Button styles='number' type='button' value='.' handleClick={addToText} />
        <input type='button' className='result' value='=' onClick={calculateResult} />
        <Button styles='operator' type='button' value='+' handleClick={addToText} />
      </div>
    </div>
  )
}

export { Calculator }
