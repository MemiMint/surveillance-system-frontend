import { ImageProps } from "react-native";

export interface IProps {
  header: string;
  isModalVisible: boolean;
  elementImage: ImageProps;
  onPressElement: (data: any) => void;
  onAssignAll: () => void;
  onClose: () => void;
}
