export interface authState {
	authMenuList: Menu.MenuOptions[]
}

export interface globalState {
	isCollapse: boolean
}

export interface userInfoParams {
	id: string
}

export interface userState {
	token: string
	userInfo: userInfoParams
}
