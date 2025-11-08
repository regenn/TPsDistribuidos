// app/hooks/usefavorites.ts
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { favoritesService } from "@/app/services/favorites.service";

export function useFavorites() {
  return useQuery({
    queryKey: ["favorites"],
    queryFn: favoritesService.getAll,
  });
}

export function useCreateFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: favoritesService.add,
    onSuccess: () => {
      // Invalida la cache para refrescar la lista
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });
}

export function useDeleteFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: favoritesService.remove,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });
}

