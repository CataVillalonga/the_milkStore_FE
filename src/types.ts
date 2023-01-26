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
	milkTypes:string[]
	setCurrentDataDisplay: React.Dispatch<React.SetStateAction<milkData[]>>
}

export interface IPagCompProps {
	numOfPages :number
	currentPage :number
	setCurrentPage:React.Dispatch<React.SetStateAction<number>>
}

export interface IProductRouteProps {
	milk: milkData,
	i:number
}