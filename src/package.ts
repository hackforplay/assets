import { IOutput } from './output'

export interface IPackage {
	version: string
	categories: ICategory[]
	scopes: IScope[]
	module: { [id: string]: IModule }
	buttons: IOutput[]
}

export interface IModule {
	code: string
}

export interface ICategory {
	name: string
	iconUrl: string
}

export interface IScope {
	name: string
	defaultActiveCategory: number
}
