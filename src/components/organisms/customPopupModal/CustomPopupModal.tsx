import type { ReactNode} from 'react';
import React, { useRef } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modalbox';
import { styles } from './CustomPopupModal.styles';
import { Colors } from '@/theme/colors';

interface IModalProps {
  backdrop?: boolean | undefined;
  backdropColor?: string | undefined;
  backdropOpacity?: number | undefined;
  backdropPressToClose?: boolean | undefined;
  backgroundColor?: string;
  children: ReactNode;
  height: number;
  isDisabled?: boolean;
  onModalClose: () => void;
  position?: 'bottom' | 'center'
  startOpen?: boolean | undefined;
  swipeArea?: unknown;
  swipeToClose?: boolean;
  visible: boolean;
}

const CustomPopupModal = ({
  backdrop = true,
  backdropOpacity = 0.8,
  backdropPressToClose = false,
  backgroundColor = Colors.white,
  children,
  height,
  isDisabled = false,
  onModalClose,
  position = 'center',
  startOpen = false,
  swipeToClose = true,
  visible
}: IModalProps) => {
  const modal = useRef(null);

  return (
    <Modal
      backButtonClose={false}
      backdrop={backdrop}
      backdropColor={Colors.black}
      backdropOpacity={backdropOpacity}
      backdropPressToClose={backdropPressToClose}
      coverScreen
      entry={'bottom'}
      isDisabled={isDisabled}
      isOpen={visible}
      onClosed={onModalClose}
      position={position}
      ref={modal}
      startOpen={startOpen}
      style={[styles.modalContainer, { height }]}
      swipeToClose={swipeToClose}
      useNativeDriver>
      <View
        style={[
          styles.modalInnerContainer,
          {
            backgroundColor: Colors.white,
            height,
          },
          !!backgroundColor && { backgroundColor },
        ]}>
        {children}
      </View>
    </Modal>
  );
};

export default CustomPopupModal;
