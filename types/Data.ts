export interface IData<T> {
	data: Array<T>
	meta: {
		pagination: {
			total: Number
			page: Number
			pageSize: Number
			pageCount: Number
		}
	}
}

export interface IPosts {
	id: Number
	attributes: {
		title: string
		body: string
		image: {
			data: {
				attributes: {
					url: string
				}
			}
		}
	}
}
