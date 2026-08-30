import type { Dispatch, SetStateAction } from "react";

export interface UserLocation{
    street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
}
export interface User{
    "gender": String,
    "name": {
        "title": string,
        "first": string,
        "last": string
    },
    "location" : UserLocation
}

export interface APIResponse{
    results: User[]
}

export interface FormProps{
    setIsLogin : Dispatch<SetStateAction<boolean>>
}

export interface SignUpObject{
        "parentName":string | null,
        "password":string | null,
        "email": string |null
}
export interface LoginInObject{
        "password":string | null,
        "email": string |null
}