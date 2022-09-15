import { useQuery } from 'react-query'
import { fetchData } from '../../helpers/fatchData'
import { IData, IPosts } from '../../types'

export const useGetHomepagePosts = () =>
	useQuery('posts', async (): Promise<IData<IPosts>> => {
		const data = await fetchData(
			`{
        posts {
          data {
            id
            attributes {
              title
              body
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          meta{
            pagination {
              total
              page
              pageSize 
              pageCount
            }
          }
        }
      }
      `,
			{ vaiables: {} }
		)
		return data.posts
	})
