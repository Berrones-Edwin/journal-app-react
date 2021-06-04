export const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append("upload_preset", "react-journal");
    formData.append("file", file);

    const cloudURL = " https://api.cloudinary.com/v1_1/dwa0boye6/upload";

    try {
        const resp = await fetch(cloudURL, {
            method: "POST",
            body: formData,
        });

        if (resp.ok) {
            const { secure_url } = await resp.json();
            return secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        console.error(error);
    }
};
