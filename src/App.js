import './App.css'
import { Box, Heading } from '@chakra-ui/react'
import { Container, VStack } from '@chakra-ui/react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import useTodoState from './hooks/useTodoState'

function App() {
	const { todos, addTodo, deleteTodo } = useTodoState([])

	return (
		<div className='App'>
			<VStack>
				<Container
					mt={2}
					maxW='md'
					borderColor='black'
					borderWidth='2px'
					color='white'
					h='auto'
				>
					<Box
						textAlign={'center'}
						padding='4'
						bg=''
						color='black'
						maxW='md'
						h='auto'
					>
						<Heading mb={10}>Todos</Heading>
						<TodoForm
							saveTodo={todoText => {
								const trimmedText = todoText.trim()
								if (trimmedText.length > 0) {
									addTodo(trimmedText)
								}
							}}
						/>
						<TodoList todos={todos} deleteTodo={deleteTodo} />
					</Box>
				</Container>
			</VStack>
		</div>
	)
}

export default App
