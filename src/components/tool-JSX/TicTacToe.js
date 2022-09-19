import PlainPaper from '../mini_components/PlainPaper'
import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import '../../index.css'

const func = () => {
	const X_CLASS = 'x'
	const CIRCLE_CLASS = 'circle'
	const WINNING_COMBINATIONS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 4, 8],
		[2, 4, 6],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
	]

	const cellElements = document.querySelectorAll('[data-cell]')
	const board = document.getElementById('board')
	const winningMessageElement = document.getElementById('winningMessage')
	const winningMessageTextElement = document.querySelector(
		'[data-winning-message-text]'
	)
	const restartButton = document.getElementById('restartButton')
	let circleTurn

	startGame()

	restartButton?.addEventListener('click', startGame)

	function startGame() {
		circleTurn = false
		cellElements.forEach((cell) => {
			cell.classList.remove(X_CLASS)
			cell.classList.remove(CIRCLE_CLASS)
			cell.removeEventListener('click', handleClick)
			cell.addEventListener('click', handleClick, { once: true })
		})
		setBoardHoverClass()
		winningMessageElement?.classList.remove('show')
	}

	function handleClick(e) {
		// placeMark
		// Check For Win
		// Check For Draw
		// Switch Turns
		const cell = e.target
		const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
		placeMark(cell, currentClass)
		if (checkWin(currentClass)) {
			endGame(false)
		} else if (isDraw()) {
			endGame(true)
		} else {
			swapTurns()
			setBoardHoverClass()
		}
	}

	function endGame(draw) {
		if (draw) {
			winningMessageTextElement.innerText = 'Draw!'
		} else {
			winningMessageTextElement.innerText = `${
				circleTurn ? "0's" : "X's"
			} Wins!`
		}
		winningMessageElement.classList.add('show')
	}

	function isDraw() {
		return [...cellElements].every((cell) => {
			return (
				cell.classList.contains(CIRCLE_CLASS) ||
				cell.classList.contains(X_CLASS)
			)
		})
	}

	function placeMark(cell, currentClass) {
		cell.classList.add(currentClass)
	}

	function swapTurns() {
		circleTurn = !circleTurn
	}

	function setBoardHoverClass() {
		board?.classList.remove(X_CLASS)
		board?.classList.remove(CIRCLE_CLASS)
		if (circleTurn) {
			board?.classList.add(CIRCLE_CLASS)
		} else {
			board?.classList.add(X_CLASS)
		}
	}

	function checkWin(currentClass) {
		return WINNING_COMBINATIONS.some((combination) => {
			return combination.every((index) => {
				return cellElements[index].classList.contains(currentClass)
			})
		})
	}
}

const content = (
  <>
  {/* <Button>Click</Button> */}
  <div className="board" id="board">
    <div className="cell" data-cell></div>
    <div className="cell" data-cell></div>
    <div className="cell" data-cell></div>
    <div className="cell" data-cell></div>
    <div className="cell" data-cell></div>
    <div className="cell" data-cell></div>
    <div className="cell" data-cell></div>
    <div className="cell" data-cell></div>
    <div className="cell" data-cell></div>
  </div>
  <div className="winning-message" id="winningMessage">
    <div data-winning-message-text></div>
    <button id="restartButton">Restart</button>
  </div>
</>)

const NaughtsCrosses = () => {
	const [newGame, setNewGame] = useState(false)

	useEffect(() => {
		func()
	}, [])

	return (
		<PlainPaper title='Tic-Tac-Toe' content={content}/>
	)
}

export default NaughtsCrosses
