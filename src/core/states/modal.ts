import { atom, useRecoilState } from 'recoil';

type IModalsName = 'buyVehicle' | 'buyHouse' | 'buySmartphone' | '';

interface IModal {
  name: IModalsName;
  props?: any;
}

export const modalAtom = atom({
  key: 'modal',
  default: {
    name: '',
  } as IModal,
});

export const useModalState = () => {
  const [modal, setModal] = useRecoilState(modalAtom);

  return { modal, setModal };
};
