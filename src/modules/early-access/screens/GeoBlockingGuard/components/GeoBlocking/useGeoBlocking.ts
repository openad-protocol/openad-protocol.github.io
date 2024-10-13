import { useGetCountryCodeQuery } from 'modules/common/actions/getCountryCode';
import {
  ACTION_CACHE_LONG,
  RESTRICTED_COUNTRIES_CODES,
} from 'modules/common/const';
import { useLocalGetCountryCode } from './useLocalGetCountryCode';

interface IUseGeoBlocking {
  isLoading: boolean;
  allow: boolean;
}

export function useGeoBlocking(): IUseGeoBlocking {
  const { data: localCountryCode, isLoading: isLoadingLocal } =
    useLocalGetCountryCode();
  const { data: ipConfCountryCode, isLoading: isLoadingIp } =
    useGetCountryCodeQuery(undefined, {
      refetchOnMountOrArgChange: ACTION_CACHE_LONG,
    });

  const countryCode = localCountryCode || ipConfCountryCode;

  return {
    isLoading: isLoadingIp || isLoadingLocal,
    allow: countryCode
      ? !RESTRICTED_COUNTRIES_CODES.includes(countryCode)
      : false,
  };
}
