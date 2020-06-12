export  interface StudentModals {
    // Id: number,
    // Student: string,
    // Email: string,
    // contactNo: number;
    // Gender: string
    VenderDetails:string
}

export class EmployeeDetails implements StudentModals  {
    Id: number;
    Student: string;
    Email: string;
    contactNo: number;
    Gender: string;
    VenderDetails:string


    constructor(Id: number, student: string, email: string, contactNo: number, gender: string,venderDetails:string) {
        this.Id = Id;
        this.Student = student;
        this.Email = email
        this.contactNo = contactNo;
        this.Gender = gender;
        this.VenderDetails=venderDetails
    }
}

