export namespace User {
	export interface ReqUserParams {
		offset: number
		limit: number
	}

	export interface addUserParams {
		name: string
		position: string
		sex: number
		age: number
		idNumber: string
		email: string
	}
}

export namespace Auth {}
