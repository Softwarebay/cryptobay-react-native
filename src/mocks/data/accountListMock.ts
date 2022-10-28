import { PROFILE } from '../../../assets/pictures';
import { Account } from '../../types/account.type';

export const accountListMock = [
  {
    profilePicture: PROFILE,
    accountName: 'Account 1',
    tokenShortName: 'ETH',
    tokenValue: 9.2362,
  },
  {
    profilePicture: PROFILE,
    accountName: 'Account 2',
    tokenShortName: 'ETH',
    tokenValue: 2.43,
  },
  {
    profilePicture: PROFILE,
    accountName: 'Account 3',
    tokenShortName: 'ETH',
    tokenValue: 1.27,
  },
] as Account[];
