import { User } from './interface'

export const getUserList = (params: User.ReqUserParams) => {
	const tableData: any[] = [
		{
			id: 1,
			name: 'Tom',
			position: 'Boss',
			sex: 0,
			age: 20,
			idNumber: '308706533921829758',
			email: 'e.lbmnep@ktjozby.kw',
			status: 1,
			createTime: '2024-07-02 17:07:30',
			changeTime: '2024-07-02 17:07:30',
			delVisable: false
		},
		{
			id: 2,
			name: 'Tom',
			position: 'Manager',
			sex: 1,
			age: 50,
			idNumber: '752686446445614688',
			email: 'x.gwtk@bgc.kh',
			status: 0,
			createTime: '2024-06-02 11:25:30',
			changeTime: '2024-06-10 20:30:30',
			delVisable: false
		},
		{
			id: 3,
			name: 'Tom',
			position: 'Custom',
			sex: 0,
			age: 18,
			idNumber: '922074521249323665',
			email: 'j.bkdtu@vmyhsts.z',
			status: 1,
			createTime: '2024-02-02 14:50:30',
			changeTime: '2024-03-25 23:10:30',
			delVisable: false
		},
		{
			id: 4,
			name: 'Tom',
			position: 'Business',
			sex: 1,
			age: 25,
			idNumber: '566683556569241481',
			email: 'v.peew@bepnffcgg.lc',
			status: 1,
			createTime: '2023-10-20 02:11:30',
			changeTime: '2023-12-02 07:23:30',
			delVisable: false
		},
		{
			id: 1,
			name: 'Tom',
			position: 'Boss',
			sex: 0,
			age: 20,
			idNumber: '308706533921829758',
			email: 'e.lbmnep@ktjozby.kw',
			status: 1,
			createTime: '2024-07-02 17:07:30',
			changeTime: '2024-07-02 17:07:30',
			delVisable: false
		},
		{
			id: 2,
			name: 'Tom',
			position: 'Manager',
			sex: 1,
			age: 50,
			idNumber: '752686446445614688',
			email: 'x.gwtk@bgc.kh',
			status: 0,
			createTime: '2024-06-02 11:25:30',
			changeTime: '2024-06-10 20:30:30',
			delVisable: false
		},
		{
			id: 3,
			name: 'Tom',
			position: 'Custom',
			sex: 0,
			age: 18,
			idNumber: '922074521249323665',
			email: 'j.bkdtu@vmyhsts.z',
			status: 1,
			createTime: '2024-02-02 14:50:30',
			changeTime: '2024-03-25 23:10:30',
			delVisable: false
		},
		{
			id: 4,
			name: 'Tom',
			position: 'Business',
			sex: 1,
			age: 25,
			idNumber: '566683556569241481',
			email: 'v.peew@bepnffcgg.lc',
			status: 1,
			createTime: '2023-10-20 02:11:30',
			changeTime: '2023-12-02 07:23:30',
			delVisable: false
		},
		{
			id: 1,
			name: 'Tom',
			position: 'Boss',
			sex: 0,
			age: 20,
			idNumber: '308706533921829758',
			email: 'e.lbmnep@ktjozby.kw',
			status: 1,
			createTime: '2024-07-02 17:07:30',
			changeTime: '2024-07-02 17:07:30',
			delVisable: false
		},
		{
			id: 2,
			name: 'Tom',
			position: 'Manager',
			sex: 1,
			age: 50,
			idNumber: '752686446445614688',
			email: 'x.gwtk@bgc.kh',
			status: 0,
			createTime: '2024-06-02 11:25:30',
			changeTime: '2024-06-10 20:30:30',
			delVisable: false
		},
		{
			id: 3,
			name: 'Tom',
			position: 'Custom',
			sex: 0,
			age: 18,
			idNumber: '922074521249323665',
			email: 'j.bkdtu@vmyhsts.z',
			status: 1,
			createTime: '2024-02-02 14:50:30',
			changeTime: '2024-03-25 23:10:30',
			delVisable: false
		},
		{
			id: 4,
			name: 'Tom',
			position: 'Business',
			sex: 1,
			age: 25,
			idNumber: '566683556569241481',
			email: 'v.peew@bepnffcgg.lc',
			status: 1,
			createTime: '2023-10-20 02:11:30',
			changeTime: '2023-12-02 07:23:30',
			delVisable: false
		}
	]
	const { offset, limit } = params
	return Promise.resolve({ tableData: tableData.slice(offset, limit), totals: tableData.length })
}

export const addUser = (params: User.addUserParams) => {
	return Promise.resolve(params)
}

export const delUser = (params: number[]) => {
	return Promise.resolve(params)
}
