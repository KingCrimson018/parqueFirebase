export interface Author {
    id: String
    email: String
    name: String
    lastName: String
    
}
export interface Authors extends Array<Author>{}