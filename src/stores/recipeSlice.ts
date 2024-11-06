import { SearchFilter } from './../types/index';
import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import type { Categories, Drinks , Drink, Recipe} from "../types"


export type RecipeSliceType = {
    categories: Categories
    drinks: Drinks
    selectRecipe: Recipe
    modal:boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilters: SearchFilter) => Promise<void>
    selectRecipes: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks:{
        drinks: []
    },
    selectRecipe: {} as Recipe,
    modal:false,
    fetchCategories: async() => {
         const categories = await getCategories()
         set({
            categories
         })
    },
    searchRecipes: async (filters) => {
        const drinks= await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipes: async (id) => {
     const selectRecipe =   await getRecipeById(id)
     set({
        selectRecipe,
        modal:true
    })
    },
    closeModal: () =>{
        set({
            modal:false,
            selectRecipe:{} as Recipe
        })
    }
})