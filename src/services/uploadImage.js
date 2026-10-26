export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(
      `${import.meta.env.ENDPOINT}?key=${import.meta.env.IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

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
