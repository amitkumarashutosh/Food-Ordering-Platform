import { useCreateRestaurant, useGetRestaurant } from "@/api/RestaurantApi";
import RestaurantForm from "@/forms/restaurant-form/RestaurantForm";

const Restaurant = () => {
  const { createRestaurant, isLoading } = useCreateRestaurant();
  const { restaurant } = useGetRestaurant();

  return (
    <RestaurantForm
      onSave={createRestaurant}
      isLoading={isLoading}
      restaurant={restaurant}
    />
  );
};

export default Restaurant;
