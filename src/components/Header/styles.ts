import styled from 'styled-components/native';
import { colors } from '../../theme/colors';
import { ChevronLeft } from 'lucide-react-native';

export const Container = styled.View`
  justify-content: center;
  width: 100%;
  height: 72px;
`;

export const ButtonRedirect = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  padding-left: 2px;
`;

export const ChevronLeftIcon = styled(ChevronLeft).attrs({})`
  color: ${colors.iconsColor.white};
`;
