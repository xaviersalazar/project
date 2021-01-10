import { AdditionalInfo } from "./additional-info";

export interface Client {
  id: string;
  age: number;
  name: string;
  gender: string;
  additionalInfo: AdditionalInfo;
}
