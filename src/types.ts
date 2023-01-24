export interface milkData {
	name: string
	type: string
	storage: number
	id: string
}

export interface IMilkDataProps {
	data: milkData[]
}

export interface ISearchCompProps {
	data: milkData[]
	milkTypes:Set<string>
}