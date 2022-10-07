import { Stack, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'
import useInputState from '../hooks/useInputState'

export const TodoForm = props => {
	const { value, reset, onChange } = useInputState('')
	const onSubmitHandler = event => {
		event.preventDefault()
		props.saveTodo(value)
		reset()
	}

	return (
		<form>
			<Stack mb={10}>
				<Input
					mb={5}
					fontSize={24}
					p={6}
					background='blue.200'
					textAlign='center'
					onChange={onChange}
					value={value}
					borderColor='blue.400'
					placeholder='new task'
					size='md'
					_placeholder={{ color: 'black' }}
				/>
				<Button
					fontSize={24}
					background='yellow.300'
					p={6}
					onClick={onSubmitHandler}
					colorScheme='yellow'
					variant='outline'
				>
					Button
				</Button>
			</Stack>
		</form>
	)
}
