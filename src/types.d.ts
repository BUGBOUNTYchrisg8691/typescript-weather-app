interface Options {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}

type Success = (pos: any) => void;
