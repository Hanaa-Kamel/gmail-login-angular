export interface IUser {
      results: [
        {
          gender: string,
          email: string,
        
          dob?: {
            date: Date,
            age: number
          },
          
          phone?: number,
        }
      ]
}

