import { ICustomer } from 'app/shared/model/customer.model';

export interface ICity {
  id?: number;
  name?: string;
  names?: ICustomer[];
}

export const defaultValue: Readonly<ICity> = {};
