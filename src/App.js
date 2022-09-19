import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import logo from './images/logo.png'
import theme from './theme'
import { MainStore } from './contexts/MainContext'
import TopNav from './components/mini_components/TopNav'
import BottomNav from './components/mini_components/BottomNav'

//BottomNav

// import menuList from '../important/toolList'
// import tileData from '../important/tileData'
// import Content2 from './Content2'
import DrawerBar from './components/mini_components/DrawerBar'
import toolList from './components/important/toolList'
import Homepage from './components/mini_components/Homepage'
import PizzaTime from './components/tool-JSX/PizzaTime'
import AgeCompare from './components/tool-JSX/AgeCompare'
import CarShare from './components/tool-JSX/CarShare'
import DadJoke from './components/tool-JSX/DadJoke'
import CoinFlip from './components/tool-JSX/CoinFlip'
import WhosTurn from './components/tool-JSX/WhosTurn'
import Consequence from './components/tool-JSX/Consequence'
import TicTacToe from './components/tool-JSX/TicTacToe'


//import Notepad from './components/tool-JSX/Notepad'
//import offensiveJoke from './components/tool-functions/offensiveJoke'

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<MainStore>
					<ThemeProvider theme={theme}>
						<TopNav logo={logo} title="ToolCity" />
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/pizza-time" element={<PizzaTime />} />
							<Route path="/double-age" element={<AgeCompare />} />
							<Route path="/car-share" element={<CarShare />} />
							<Route path="/dad-jokes" element={<DadJoke />} />
							<Route path ="/coin-toss" element={<CoinFlip/>}/>
							<Route path ="/whos-turn" element={<WhosTurn/>}/>
							<Route path ="/story-game" element={<Consequence/>}/>
							<Route path="/tic-tac-toe" element={<TicTacToe/>}/>
							{/* <Route path = 'offensive-jokes' element={<offensiveJoke/>}/> */}

							{/* <Route path="/notepad" element={<Notepad />} /> */}
							
							
						</Routes>
						<BottomNav Drawer={DrawerBar} drawerList={toolList} />
					</ThemeProvider>
				</MainStore>
			</BrowserRouter>
		</div>
	)
}

export default App
