import {
  useCreateRestaurant,
  useGetRestaurant,
  useUpdateRestaurant,
} from "@/api/RestaurantApi";
import RestaurantForm from "@/forms/restaurant-form/RestaurantForm";

const Restaurant = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateRestaurant();
  const { restaurant } = useGetRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateRestaurant();

  // const isEditing = !!restaurant;
  const isEditing = restaurant ? true : false;

  return (
    <RestaurantForm
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
      restaurant={restaurant}
    />
  );
};

export default Restaurant;
