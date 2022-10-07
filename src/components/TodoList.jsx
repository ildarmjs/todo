import {
	ListItem,
	OrderedList,
	Flex,
	Box,
	Spacer,
	CloseButton,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

export const TodoList = props => {
	return (
		<OrderedList >
			{props.todos.map((todo, index) => {
				return (
					<Flex
						fontSize={20}
						width='100%'
						mb={5}
						px={8}
						py={4}
						borderColor='black'
						borderWidth='2px'
						borderRadius='lg'
						alignItems={'center'}
						background={'#8c2bed'}
					>
						<Box>
							<ListItem>{todo}</ListItem>
						</Box>
						<Spacer />
						<Box>
							<CloseButton onClick={() => props.deleteTodo(index)} />
						</Box>
					</Flex>
				)
			})}
		</OrderedList>
	)
}
