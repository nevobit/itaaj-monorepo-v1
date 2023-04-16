import { Base } from "../../../common";

export enum PropertyType {
 HOUSE= 'house',
 APARTAMENT= 'apartament',
 CONDO= 'condo',
 TOWNHOUSE= 'townhouse',
 OTHER = 'other'
}

interface Location {
 latitude: number;
 longitude: number;
}

export interface Property extends Base{
 name: string;
 description: string;
 address: string;
 city: string;
 state: string;
 country: string;
 location: Location;
 price: number;
 area: number;
 garage: number;
 images: string[];
 amenities: string[]
 bedrooms: number;
 bathrooms: number;
 image: string;
 owner: string;
 virtualTourUrl: string;
 video: string;
 antiquity: number;
 propertyStatus: string;
 type: PropertyType;
 blockchainId: string;
 balcony: number;
 kitcken: number;
}