import {
	LocalPizzaOutlined as PizzaIcon,
	TagFaces as JokesIcon,
	CompareArrows as CompareArrowsIcon,
	Settings as SettingsIcon,
	MonetizationOnOutlined as MonetizationOnOutlinedIcon,
	LocalGasStation as LocalGasStationIcon,
	Hail as HailIcon,
	AutoStoriesOutlined as AutoStoriesOutlinedIcon,
	CancelOutlined as CancelOutlinedIcon,
	Redeem as RedeemIcon,
} from '@mui/icons-material'

const toolList = [
	{
		primary: 'Pizza Time',
		secondary: '2 small pizzas or 1 large one?',
		img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		icon: <PizzaIcon color="primary" fontSize="large" />,
		featured: true,
	},
	{
		primary: 'Dad Jokes',
		secondary: 'Need a classic Dad joke, well look no further.',
		img: 'https://images.unsplash.com/photo-1616705334775-bb7739245489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		icon: <JokesIcon color="primary" fontSize="large" />,
	},
	{
		primary: 'Double Age',
		secondary: 'Curious when someone will be double your age?',
		img: 'https://images.unsplash.com/photo-1567067974934-75a3e4534c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		icon: <CompareArrowsIcon color="primary" fontSize="large" />,
	},
	{
		primary: 'Car Share',
		secondary: 'Fairly split the fuel cost',
		img: 'https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
		icon: <LocalGasStationIcon color="primary" fontSize="large" />,
	},
	{
		primary: 'Coin Toss',
		secondary: 'Heads or Tails?',
		img: 'https://images.unsplash.com/photo-1610719887095-1c2d1486be5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
		icon: <MonetizationOnOutlinedIcon color="primary" fontSize="large" />,
	},
	{
		primary: 'Whos Turn',
		secondary: 'Randomly choose between you',
		img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		icon: <HailIcon color="primary" fontSize="large" />,
	},
	{
		primary: 'Story Game',
		secondary:
			"Take it in turns to make a truly random story but don't let the person before see what you wrote",
		img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		icon: <AutoStoriesOutlinedIcon color="primary" fontSize="large" />,
	},
	{
		primary: 'Tic-Tac-Toe',
		secondary: 'Play a friend at Tic-Tac-Toe',
		img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		icon: <CancelOutlinedIcon color="primary" fontSize="large" />,
	},
	{
		primary: 'Secret Santa',
		secondary: 'No paper and hat? Just use this handy app',
		img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		icon: <RedeemIcon color="primary" fontSize="large" />,
	},
	// {
	// 	primary: 'Story Game 2',
	// 	secondary:
	// 		"Take it in turns to make a truly random story but don't let the person before see what you wrote",
	// 	img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	// 	icon: <AutoStoriesOutlinedIcon color="primary" fontSize="large" />,
	// },
	// {
	// 	primary: 'The Office Game',
	// 	secondary: 'Play a friend at Tic-Tac-Toe',
	// 	img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	// 	icon: <CancelOutlinedIcon color='primary' fontSize='large'/>,

	// }
]

export default toolList
