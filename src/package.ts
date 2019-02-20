import { IOutput } from './output'

export interface IPackage {
	version: string
	categories: any[]
	scopes: any[]
	module: { [id: string]: IModule }
	buttons: IOutput[]
}

export interface IModule {
	code: string
}
