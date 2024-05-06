import dynamic from 'next/dynamic';

const BuyVehicle = dynamic(() =>
  import('./BuyVehicle/BuyVehicle').then((component) => component.BuyVehicle),
);

const BuyHouse = dynamic(() =>
  import('./BuyHouse/BuyHouse').then((component) => component.BuyHouse),
);
const BuySmartphone = dynamic(() =>
  import('./BuySmartphone/BuySmartphone').then(
    (component) => component.BuySmartphone,
  ),
);

const RedeemVehicle = dynamic(() =>
  import('./RedeemVehicle/ReedeemVehicle').then(
    (component) => component.RedeemVehicle,
  ),
);

interface IModals {
  props: any;
}

export const modals = ({ props }: any) => {
  return {
    buyVehicle: <BuyVehicle {...props} />,
    buyHouse: <BuyHouse {...props} />,
    buySmartphone: <BuySmartphone {...props} />,
    redeemVehicle: <RedeemVehicle {...props} />,
    '': null,
  };
};
