import axios from 'axios';
import { fromHexToBase64 } from 'modules/common/utils/fromHexToBase64';
import { getErrorMessage } from 'modules/common/utils/getErrorMessage';
import { getApiConfig } from '../apiConfig';
import { TChainId } from '../chainIDs';
import { TChainName } from './types';
import { getChainNameById } from './utils/getChainNameById';

const { depositAddrApiUrl, baseApiUrl, thresholdKey } = getApiConfig();

const SANCTIONS_MESSAGE = 'destination address is under sanctions';
export const SANCTIONED_ADDRESS = 'sanctioned_address';

interface IDepositBtcAddressParams {
  threshold_key: string;
  to_address: string;
  to_chain: TChainName;
  to_address_signature?: string;
}

interface IDepositBtcAddressResponse {
  key: {
    id: string;
    material_id: string;
    owner: string;
    public_key: string;
    blockchain: string;
    to_address: string;
    to_chain: TChainName;
  };
}

/**
 * Get the address for depositing BTC.
 * If the signature is provided, the address will be registered in the system.
 *
 * If the address is sanctioned, the `SANCTIONED_ADDRESS` will be returned.
 *
 * @param address user address where LBTC will be claimed
 * @param chainId the chain ID
 * @param signature (optional) the signature of the address
 *
 * @returns the address for depositing BTC
 */
export const getDepositBtcAddress = async (
  address: string,
  chainId: TChainId,
  signature?: string,
): Promise<string> => {
  const btcDepositAddress = await generateDepositAddress(
    address,
    chainId,
    signature,
  );

  const shouldNotRegister =
    !signature || btcDepositAddress === SANCTIONED_ADDRESS;

  if (shouldNotRegister) {
    return btcDepositAddress;
  }

  try {
    await axios.post(`${baseApiUrl}/api/v1/address`, {
      address: btcDepositAddress,
    });

    return btcDepositAddress;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to register deposit address');
  }
};

async function generateDepositAddress(
  address: string,
  chainId: TChainId,
  signature?: string,
): Promise<string> {
  const params: IDepositBtcAddressParams = {
    threshold_key: thresholdKey,
    to_address: fromHexToBase64(address),
    to_chain: getChainNameById(chainId),
  };

  if (signature) {
    const toAddressSignature = fromHexToBase64(signature);
    params.to_address_signature = toAddressSignature;
  }

  try {
    const { data } = await axios.post<IDepositBtcAddressResponse>(
      `${depositAddrApiUrl}/v1alpha/generate/depositAddress`,
      params,
    );

    return mapResponse(data);
  } catch (error) {
    const errorMsg = getErrorMessage(error);
    const isSanctioned = !!errorMsg.includes(SANCTIONS_MESSAGE);

    if (isSanctioned) {
      return SANCTIONED_ADDRESS;
    } else {
      throw new Error(errorMsg);
    }
  }
}

function mapResponse(response: IDepositBtcAddressResponse): string {
  if (!response.key) {
    throw new Error('No key');
  }

  return response.key.material_id;
}
