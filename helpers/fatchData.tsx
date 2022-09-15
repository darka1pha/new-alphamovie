import axios from 'axios'

const graphQLAPI = 'http://localhost:1337/graphql'

export const fetchData = async (query: string, { variables }: any) => {
	const headers = { 'Content-Type': 'application/json' }
	const { data } = await axios.post(
		graphQLAPI,
		{ query, variables },
		{ headers }
	)
	return data.data
}
