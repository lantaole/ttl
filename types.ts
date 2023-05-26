export interface UserType {
    name: string
    password:string
}
export interface LoginResponseType {
    code: string
    token: string
    msg?: string
    user: {
        name: string
        id: number
        score: number
        user_group: number
        avatar: string
    }
}

export interface ActionType {
    type: string
    payload?: any
}
