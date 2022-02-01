export interface AddPropertyFormInput {
  name: string;
  description: string;
  price: number;
  rooms: number;
  gpsAddress: string;
}

declare enum PropertyTypeEnum {
  Sale,
  Rent,
}

export type Type = keyof typeof PropertyTypeEnum;

export interface AddPropertyInputProp {
  name: string;
  type: Type;
  description: string;
  price: number;
  gpsAddress: string;
  address: string;
  latitude: number;
  longitude: number;
  otherImages?: string[];
  featuredBigImage: string;
  featuredSmallImage: string;
  checkInTime: Date;
  checkOutTime: Date;
  numberOfBedrooms: number;
  numberOfKitchens: number;
  numberOfBathrooms: number;
}

export interface AddPropertyOutputProp {
  success: boolean;
}

// export const property = {
//   name: { type: String, required: true, trim: true },
//   type: { type: String, required: true, enum: ["Rent", "Sale"] },
//   description: { type: String, required: true, trim: true },
//   price: { type: Number, required: true, trim: true },
//   gpsAddress: { type: String, required: true, trim: true },
//   address: { type: String, required: true, trim: true },
//   location: {
//     latitude: { type: Number, required: true },
//     longitude: { type: Number, required: true },
//   },
//   otherImages: [{ type: String }],
//   featuredBigImage: { type: String, required: true, trim: true },
//   featuredSmallImage: { type: String, required: true, trim: true },
//   checkInTime: { type: Date, required: true },
//   checkOutTime: { type: Date, required: true },
//   meta: {
//     numberOfBedrooms: { type: Number, required: true },
//     numberOfKitchens: { type: Number, required: true },
//     numberOfBathrooms: { type: Number, required: true },
//     parkingPremiseAvailable: { type: Boolean, default: false },
//   },
//   deletedAt: { type: Date },
// };
