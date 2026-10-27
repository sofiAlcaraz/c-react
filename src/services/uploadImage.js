export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_ENDPOINT}?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error del servidor (${response.status}): ${errorText || "Respuesta vacía"}`,
      );
    }
    const data = await response.json();

    if (!data.success) {
      throw new Error("Error al subir la imagen");
    }

    return data.data.url;
  } catch (error) {
    console.error("ImgBB error:", error);
    throw error;
  }
};
