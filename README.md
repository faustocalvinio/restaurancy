Te dejo algunas tareas:

Nuestro componente RestaurantCard contiene dos componentes. El componente que contiene la información no necesita ninguna actividad, por ende, podría seguir siendo un Server Component. Mueve el componente del botón de favorito a otro archivo e impórtalo.
Puedes convertir RestaurantCard en una carpeta y agregarle un index.tsx y un FavoriteButton.tsx dentro. De esa manera, los componentes seguirían colocados lo más cerca de donde son relevantes posible. Pero maneja esto a tu gusto.
Implementa la funcionalidad de agregar y quitar favoritos en el botón de favorito. Al cargar la página, debería mostrar el estado actual, y al hacer clic en el botón, debería mostrar el estado actualizado y persistir ese estado al recargar la página.
Estamos repitiendo los tipos para Restaurant muchas veces, mueve la interfaz a un archivo src/types.ts, exportala y usala donde sea necesario.