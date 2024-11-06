import { create } from "zustand";
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, RecipeSliceType } from './recipeSlice';
import { FavoritesSliceType, createFavoritesSlice } from "./favoriteSlice";
import { NotificationSliceType, createNotificationSlice } from "./notificacionSlice";




export const useAppStore = create<RecipeSliceType & FavoritesSliceType & 
    NotificationSliceType>()(devtools ((...a) => ({
            ...createRecipesSlice(...a),
            ...createFavoritesSlice(...a),
            ...createNotificationSlice(...a),
})))