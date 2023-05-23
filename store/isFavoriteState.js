import { atomWithStorage } from "jotai/utils";

export const isFavoriteState = atomWithStorage("favPictures", []);
