import { atomWithStorage } from "jotai/utils";

export const isFavorite = atomWithStorage("favPictures", []);
