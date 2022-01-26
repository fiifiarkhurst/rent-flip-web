export interface CardComponentProp {
  name: string;
  email: string;
  phone: string;
  photo: string;
  property: string;
  idType: string;
  startDate: Date;
  endDate: Date;
  onAccept: () => void;
  onReject: () => void;
}

export interface DateViewComponentProp {
  onAccept: (dataFromView: any) => void;
  onReject: (dataFromView: any) => void;
}
