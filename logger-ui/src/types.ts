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
        "title": String,
        "first": String,
        "last": String
    },
    "location" : UserLocation
}

export interface APIResponse{
    results: User[]
}