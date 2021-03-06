import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({
  children,
  closeModal,
  ...rest
}: Props) {
  const { secondary80, secondary100 } = theme.colors;
  
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>  
        <View style={styles.overlay}>
          <View style={styles.container}>
            <LinearGradient
              style={styles.container}
              colors={[secondary80, secondary100]}
            >
              <View style={styles.bar} />
              {children}
            </LinearGradient>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
