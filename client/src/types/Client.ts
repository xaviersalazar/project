export interface IClient {
  id: string;
  age: number;
  name: string;
  gender: string;
  additionalInfo: IAdditionalInfo;
}

export interface IAdditionalInfo {
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}
